import React from "react"
import { path } from 'ramda';
import classNames from "classnames"
import { MDXProvider } from '@mdx-js/react'
import { DocumentTypes } from "contentlayer/generated"
import { Divider, FooterWrapper, Header, LzContainer, Sidebar, Reaction, TableOfContents } from "components"
import Styles from './Layout.module.scss';
import { components } from "components/mdx-components";

type DocsLayoutProps = {
  children: React.ReactNode
  doc: DocumentTypes
}

export default function DocsLayout({ children, doc }: DocsLayoutProps) {
  const hideToc = !path(['frontmatter', 'toc', 'length'], doc);

  return (
    
    <MDXProvider components={components}>
      <div className={classNames(Styles.LayoutWrapper)}>
        <section className='w-full'>
          <Sidebar />
          <main className="float-right w-4/5 min-h-screen">
            <Header />
            <LzContainer>
              <div className="w-full pt-14">
                <section className={classNames(Styles.Content, 'float-left break-all break-before-all w-3/4')}>
                  {children}
                  <div className="mt-40">
                    <Reaction />
                    <Divider className='mb-10 mt-7' />
                    <FooterWrapper />
                  </div>
                </section>
                {
                  !hideToc && (
                    <div className={classNames(Styles.TOC, "sticky top-24 float-right h-full w-48")}>
                      <TableOfContents data={doc.frontmatter.toc} />
                    </div>
                  )
                }
                <div className="clear-both" />
              </div>
            </LzContainer>
          </main>
          <div className='clear-both' />
        </section>
      </div>
    </MDXProvider>
  )
}
