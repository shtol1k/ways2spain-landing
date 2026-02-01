import { CollectionConfig, BeforeChangeHook } from 'payload'

const generatePath: BeforeChangeHook = async ({ data, req, operation }) => {
  // Only generate path on create
  if (operation !== 'create') return data

  const name = data.name
  const parentId = data.parent

  let path = name

  // If parent folder exists, build full path
  if (parentId) {
    const parent = await req.payload.findByID({
      collection: 'mediaFolders',
      id: parentId,
    })

    if (parent?.path) {
      path = `${parent.path}/${name}`
    }
  }

  return {
    ...data,
    path,
  }
}

export const MediaFolders: CollectionConfig = {
  slug: 'mediaFolders',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'path', 'parent', 'updatedAt'],
  },
  hooks: {
    beforeChange: [generatePath],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Folder name (e.g., "blog", "2026", "images")',
      },
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'mediaFolders',
      hasMany: false,
      admin: {
        description: 'Parent folder (optional, for nested folders)',
        position: 'sidebar',
      },
      index: true,
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Folder description for reference',
      },
    },
    {
      name: 'path',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Auto-generated path for file storage',
      },
    },
  ],
}
