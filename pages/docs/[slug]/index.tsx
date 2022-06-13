import { NextSeo } from "next-seo"
import { useMDX } from "components/mdx-components"
import { Docs } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import { getDoc, getDocPaths } from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"

export default function OverviewPage({ doc }: { doc: Docs }) {
  const Component = useMDX(doc?.body?.code)
  return (
    <>
      <NextSeo title={doc?.title} description={doc?.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { 
    paths: getDocPaths(), 
    fallback: false 
  }
}

export const getStaticProps: GetStaticProps<{ doc: Docs }> = async (ctx) => {
  return { 
    props: { 
      doc: getDoc(ctx?.params?.slug) || null
    } 
  }
}
