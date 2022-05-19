import { LzContainer, LzLink } from 'components';
import React from 'react';
import { footerData } from './data';

export default function FooterWrapper(props: any): JSX.Element {
  return (
    <footer className='w-full max-w-3xl mx-auto mt-10 border-t px-7 border-neu-200 py-14'>
      <LzContainer fluid>
        <div className='grid w-full grid-cols-3 gap-20 mx-auto'>
          {
            Object.entries(footerData).map(([key, links])=> (
              <div key={key}>
                <h3 className='heading-6-b-sm text-neu-900'>{key}</h3>
                <ul className='mt-5 space-y-3.5'>
                  {
                    links.map(({ route, title })=> (
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
        <span className='block mt-10 paragraph-1 text-neu-900'>
          All rights Reserved. © {new Date().getFullYear()} Lazerpay Inc.
        </span>
      </LzContainer>
    </footer>
  );
}
