// Тестовий endpoint для діагностики Notion інтеграції
// Використання: GET /api/test-notion
import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  // Дозволяємо тільки GET запити
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use GET.',
    });
  }

  const results = {
    timestamp: new Date().toISOString(),
    checks: {},
    errors: [],
  };

  // Перевірка 1: Наявність Environment Variables
  results.checks.envVars = {
    hasApiKey: !!process.env.NOTION_API_KEY,
    hasDatabaseId: !!process.env.NOTION_DATABASE_ID,
    apiKeyPrefix: process.env.NOTION_API_KEY?.substring(0, 10) || 'missing',
    databaseId: process.env.NOTION_DATABASE_ID?.substring(0, 20) + '...' || 'missing',
  };

  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    results.errors.push('Missing environment variables. Check NOTION_API_KEY and NOTION_DATABASE_ID.');
    return res.status(500).json(results);
  }

  // Перевірка 2: Підключення до Notion API
  try {
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    const databaseId = process.env.NOTION_DATABASE_ID.trim();

    // Перевірка 3: Отримання інформації про базу даних
    try {
      const databaseInfo = await notion.databases.retrieve({ database_id: databaseId });
      
      results.checks.databaseAccess = {
        success: true,
        databaseId: databaseInfo.id,
        title: databaseInfo.title?.[0]?.plain_text || 'Untitled',
        properties: Object.keys(databaseInfo.properties || {}),
        propertyDetails: Object.entries(databaseInfo.properties || {}).map(([key, value]) => ({
          name: key,
          type: value.type,
          ...(value.type === 'select' ? { options: value.select?.options?.map(opt => opt.name) || [] } : {}),
        })),
      };
    } catch (dbError) {
      results.checks.databaseAccess = {
        success: false,
        error: dbError.message,
        code: dbError.code,
        status: dbError.status,
      };
      results.errors.push(`Cannot access database: ${dbError.message}`);
    }

    // Перевірка 4: Спробувати створити тестовий запис
    if (results.checks.databaseAccess?.success) {
      try {
        const testProperties = {};
        
        // Знаходимо Title колонку
        const titleProp = Object.entries(databaseInfo.properties).find(([_, prop]) => prop.type === 'title')?.[0];
        if (titleProp) {
          testProperties[titleProp] = {
            title: [{ text: { content: 'Test Entry - Delete Me' } }],
          };
        }

        const testResponse = await notion.pages.create({
          parent: { database_id: databaseId },
          properties: testProperties,
        });

        results.checks.testEntry = {
          success: true,
          pageId: testResponse.id,
          url: testResponse.url,
        };

        // Видаляємо тестовий запис
        try {
          await notion.pages.update({
            page_id: testResponse.id,
            archived: true,
          });
          results.checks.testEntry.deleted = true;
        } catch (deleteError) {
          results.checks.testEntry.deleted = false;
          results.checks.testEntry.deleteError = deleteError.message;
        }
      } catch (createError) {
        results.checks.testEntry = {
          success: false,
          error: createError.message,
          code: createError.code,
          status: createError.status,
          body: createError.body,
        };
        results.errors.push(`Cannot create test entry: ${createError.message}`);
      }
    }

  } catch (apiError) {
    results.checks.apiConnection = {
      success: false,
      error: apiError.message,
    };
    results.errors.push(`Cannot connect to Notion API: ${apiError.message}`);
  }

  // Загальний статус
  results.success = results.errors.length === 0;

  return res.status(results.success ? 200 : 500).json(results);
}

