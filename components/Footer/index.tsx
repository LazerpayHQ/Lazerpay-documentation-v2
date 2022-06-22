import { LzLink } from 'components';
import LzContainer from 'components/UI/Container';
import React from 'react';
import { footerData } from './data';

export default function FooterWrapper(): JSX.Element {
  return (
    <footer className='w-full mx-auto pb-14'>
      <LzContainer fluid>
        <div className='md:px-10 lg:px-12'>
          <div className='grid w-full grid-cols-2 gap-10 mx-auto md:grid-cols-3 md:gap-28'>
            {
              Object.entries(footerData).map(([key, links]) => (
                <div key={key}>
                  <h3 className='heading-6-b-sm text-neu-900'>{key}</h3>
                  <ul className='mt-5 space-y-3.5'>
                    {
                      links.map(({ route, title }) => (
                        <li className='paragraph-1 text-neu-700' key={title}>
                          <LzLink to={route}>{title}</LzLink>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
          <span className='block mt-28 lg:mt-10 paragraph-1 text-neu-900'>
            All rights Reserved. © {new Date().getFullYear()} Lazerpay Inc.
          </span>
        </div>
      </LzContainer>
    </footer>
  );
}
