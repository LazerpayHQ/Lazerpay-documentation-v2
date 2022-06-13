import { NextSeo } from "next-seo"
import { useMDX } from "components/mdx-components"
import { Docs } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import { getDoc } from "lib/contentlayer-utils"
import { GetServerSideProps } from "next"

export default function OverviewPage({ doc }: { doc: Docs }) {
  const Component = useMDX(doc?.body?.code)
  return (
    <>
      <NextSeo title={doc?.title} description={doc?.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ doc: Docs }> = async (ctx) => {
  const { id, slug } = ctx.params;

  return { 
    props: { 
      doc: getDoc(slug, id) || null
    } 
  }
}
