import { useMDX } from "components/mdx-components"
import type { Component } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import {
  extractParams,
  getComponentDoc,
  getComponentPaths,
} from "lib/contentlayer-utils"
import { Framework } from "lib/framework-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

type PageProps = {
  doc: Component
  framework: Framework
}

export default function ComponentPage({ doc }: PageProps) {
  const mdx = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{mdx}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getComponentPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { framework, slug } = extractParams(ctx.params.slug as string[])
  const doc = getComponentDoc(slug)
  return { props: { doc, framework } }
}
