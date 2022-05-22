import React from 'react';
import { Divider, FooterWrapper, Header, LzContainer, Reaction, Sidebar } from 'src/components';
import Styles from './Layout.module.scss';
import classNames from 'classnames';

interface IProps {
  children: React.ReactNode,
}

const DocsLayout = ({ children, ...rest }: IProps)=> {
  console.log(rest);
  
  return(
    <div className={classNames(Styles.LayoutWrapper)}>
      <section className='w-full'>
        <Sidebar />
        <main className="float-right w-4/5 min-h-screen">
          <Header />
          <LzContainer>
            <section className='pt-14'>
              {children}
            </section>
            <Reaction />
            <Divider className='mb-10 mt-7' />
            <FooterWrapper />
          </LzContainer>
        </main>
        <div className='clear-both' />
      </section>
    </div>
  );
};

export const getLayout = (page: React.ReactNode) => <DocsLayout>{page}</DocsLayout>;
export default DocsLayout;