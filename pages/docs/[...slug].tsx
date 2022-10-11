import { NextSeo } from 'next-seo'
import { useMDX } from 'components/mdx-components'
import { Docs } from 'contentlayer/generated'
import DocsLayout from 'layouts/docs'
import { getDoc } from 'lib/contentlayer-utils'
import { GetServerSideProps } from 'next'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'

export default function OverviewPage({ doc }: { doc: Docs }) {
  const Component = useMDX(doc?.body?.code)
  return (
    <Fragment>
      <NextSeo title={doc?.title} description={doc?.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
      <ToastContainer
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable={false}
        pauseOnHover
      />
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps<{ doc: Docs }> = async (
  ctx,
) => {
  const { slug } = ctx.params
  /** Currently, we have two layer deep nesting, this should be sufficient for our need at the moment */
  return {
    props: {
      doc: getDoc(slug[0], slug[1]) || null,
    },
  }
}
