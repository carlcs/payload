import type { CollectionConfig } from 'payload'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'text',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        {
          slug: 'block',
          fields: [],
        },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
}
