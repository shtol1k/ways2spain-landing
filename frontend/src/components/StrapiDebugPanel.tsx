import { useEffect, useState } from "react";

export const StrapiDebugPanel = () => {
  const [debug, setDebug] = useState({
    strapiUrl: '',
    hasToken: false,
    tokenLength: 0,
    tokenPrefix: '',
    env: '',
    testResult: null as any,
  });

  useEffect(() => {
    // Environment info
    const strapiUrl = import.meta.env.VITE_STRAPI_URL || '';
    const apiToken = import.meta.env.VITE_STRAPI_API_TOKEN || '';

    setDebug({
      strapiUrl,
      hasToken: !!apiToken,
      tokenLength: apiToken.length,
      tokenPrefix: apiToken.substring(0, 30),
      env: import.meta.env.MODE || 'unknown',
    });

    // Test API call
    async function testAPI() {
      console.log('🔍 Testing Strapi API...');
      console.log('URL:', strapiUrl);
      console.log('Token length:', apiToken.length);
      console.log('Has token:', !!apiToken);

      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };

        if (apiToken) {
          headers['Authorization'] = `Bearer ${apiToken}`;
        }

        const testUrl = `${strapiUrl}/api/testimonials?populate=Photo&locale=uk-UA`;
        console.log('Fetching:', testUrl);

        const response = await fetch(testUrl, { headers });

        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        const data = await response.json();
        console.log('Response data:', data);

        setDebug(prev => ({
          ...prev,
          testResult: {
            status: response.status,
            ok: response.ok,
            statusText: response.statusText,
            data: data,
          },
        }));
      } catch (error: any) {
        console.error('API test error:', error);
        setDebug(prev => ({
          ...prev,
          testResult: {
            error: error.message,
            name: error.name,
          },
        }));
      }
    }

    if (strapiUrl && apiToken) {
      testAPI();
    } else {
      console.warn('❌ Missing STRAPI_URL or API_TOKEN!');
    }
  }, []);

  // Don't show in production
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      width: '90%',
      maxWidth: '600px',
      background: '#1e1e1e',
      color: '#d4d4d4',
      padding: '15px',
      borderRadius: '8px',
      fontFamily: 'Monaco, Menlo, monospace',
      fontSize: '11px',
      zIndex: 99999,
      maxHeight: '70vh',
      overflow: 'auto',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      border: '2px solid #007acc',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, color: '#007acc', fontSize: '14px' }}>🔍 Strapi Debug Panel</h3>
        <button
          onClick={() => (document.querySelector('[data-debug-panel]') as HTMLElement)?.remove()}
          style={{
            background: '#d13438',
            color: 'white',
            border: 'none',
            padding: '2px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '10px',
          }}
        >
          Close
        </button>
      </div>

      <div style={{ marginBottom: '8px' }}>
        <strong>Environment:</strong> {debug.env}
      </div>

      <div style={{ marginBottom: '8px' }}>
        <strong>VITE_STRAPI_URL:</strong>{' '}
        <span style={{ color: debug.strapiUrl ? '#4ec9b0' : '#f48771' }}>
          {debug.strapiUrl || '<span style="color: #f48771">NOT SET ❌</span>'}
        </span>
      </div>

      <div style={{ marginBottom: '8px' }}>
        <strong>VITE_STRAPI_API_TOKEN:</strong>{' '}
        {debug.hasToken ? (
          <span style={{ color: '#4ec9b0' }}>
            ✓ {debug.tokenLength} chars: "{debug.tokenPrefix}..."
          </span>
        ) : (
          <span style={{ color: '#f48771' }}>NOT SET ❌</span>
        )}
      </div>

      <div style={{ marginBottom: '8px', padding: '8px', background: '#2d2d2d', borderRadius: '4px' }}>
        <strong>API Test Result:</strong>{' '}
        {debug.testResult ? (
          debug.testResult.error ? (
            <span style={{ color: '#f48771' }}>
              ❌ ERROR: {debug.testResult.error}
            </span>
          ) : debug.testResult.ok ? (
            <span style={{ color: '#4ec9b0' }}>
              ✓ SUCCESS ({debug.testResult.status})
            </span>
          ) : (
            <span style={{ color: '#f48771' }}>
              ❌ FAILED ({debug.testResult.status}: {debug.testResult.statusText})
            </span>
          )
        ) : (
          <span style={{ color: '#dcdcaa' }}>Testing...</span>
        )}
      </div>

      {debug.testResult?.data && (
        <div style={{ padding: '8px', background: '#2d2d2d', borderRadius: '4px' }}>
          <strong>Response:</strong>
          <pre style={{ margin: '5px 0 0 0', whiteSpace: 'pre-wrap', fontSize: '10px' }}>
            {JSON.stringify(debug.testResult.data, null, 2)}
          </pre>
        </div>
      )}

      <div style={{ marginTop: '10px', fontSize: '9px', color: '#808080' }}>
        💾 Check browser console (F12) for detailed logs
      </div>
    </div>
  );
};
