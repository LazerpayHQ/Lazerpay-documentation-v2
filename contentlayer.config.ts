import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import siteConfig from './configs/site-config'
import { getTableOfContents } from './src/utils/mdx-utils'
import { rehypeMdxCodeMeta } from './src/utils/rehype-code-meta'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc:any) => `/${doc._raw.flattenedPath}`,
  },
  editUrl: {
    type: 'string',
    resolve: (doc:any) => `${siteConfig.repo.editUrl}/${doc._id}`,
  },
}

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string' },
    author: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: (doc:any) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        image: doc.image,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`,
        headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'pages',
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
})

export default contentLayerConfig
