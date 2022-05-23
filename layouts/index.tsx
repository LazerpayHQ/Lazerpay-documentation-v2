import * as React from 'react'
import dynamic from 'next/dynamic'
import PageContainer from 'components/page-container'

const MDXLayout = dynamic(() => import('layouts/mdx'))

export default function DefaultLayout({ children, frontMatter }:any) {
  const slug = frontMatter?.slug

  const layoutMap = {
    docs: <MDXLayout frontmatter={frontMatter}>{children}</MDXLayout>,
    default: (
      <PageContainer frontmatter={frontMatter}>{children}</PageContainer>
    ),
  }

  const layout = Object.entries(layoutMap).find(([path]) => {
    return slug?.startsWith(`/${path}`)
  })

  if (!layout) return layoutMap.default

  return layout[1]
}
