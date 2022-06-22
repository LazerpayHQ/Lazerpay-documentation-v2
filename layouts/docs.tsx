import React, { useEffect, useState } from "react"
import { path } from 'ramda';
import classNames from "classnames"
import { MDXProvider } from '@mdx-js/react'
import { motion } from "framer-motion"
import { DocumentTypes } from "contentlayer/generated"
import { Divider, FooterWrapper, Header, LzContainer, Sidebar, Reaction, TableOfContents } from "components"
import Styles from './Layout.module.scss';
import { components } from "components/mdx-components";
import { useMediaQuery } from "lib/use-mediaQuery";

type DocsLayoutProps = {
  children: React.ReactNode
  doc: DocumentTypes
}

export default function DocsLayout({ children, doc }: DocsLayoutProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const toggleSidebar = () => setSideBarIsOpen((prev: boolean) => !prev);

  const hideToc = !path(['frontmatter', 'toc', 'length'], doc);

  /** Restore layout on screens larger than tablet - 768px */
  useEffect(() => {
    if (!isMobile) setSideBarIsOpen(null);
  }, [isMobile]);

  return (
    <MDXProvider components={components}>
      <div className={classNames(Styles.LayoutWrapper)}>
        <section className='w-full'>
          <Sidebar isOpen={sideBarIsOpen} toggleSidebar={toggleSidebar} />
          <motion.main
            animate={{ x: sideBarIsOpen ? 300 : 0 }}
            transition={{ duration: .4 }}
            className="min-h-screen lg:w-4/5 lg:float-right">
            <Header toggleSidebar={toggleSidebar} />
            <LzContainer>
              <motion.div
                animate={{ filter: sideBarIsOpen ? 'blur(2.2px)' : 'none' }}
                className="w-full mt-6 md:pt-4 lg:pt-14">
                <section className={classNames(Styles.Content, 'break-keep-all break-all', {
                  'xl:w-3/4 md:!float-left': !hideToc
                })}>
                  {children}
                  <div className="mt-40">
                    <Reaction />
                    <Divider className='mb-10 mt-7' />
                    <FooterWrapper />
                  </div>
                </section>
                {
                  !hideToc && (
                    <div className={classNames(Styles.TOC, "hidden xl:block sticky top-24 float-right h-full w-48")}>
                      <TableOfContents data={doc.frontmatter.toc} />
                    </div>
                  )
                }
                <div className="clear-both" />
              </motion.div>
            </LzContainer>
          </motion.main>
          <div className='clear-both' />
        </section>
      </div>
    </MDXProvider>
  )
}
