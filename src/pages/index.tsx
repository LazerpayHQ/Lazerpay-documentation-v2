import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LzContainer from '../components/UI/Container';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <LzContainer>
          <h2 className='font-semibold text-pri-500 heading-6-s'>Hello world</h2>
        </LzContainer>
    </Layout>
  );
}
