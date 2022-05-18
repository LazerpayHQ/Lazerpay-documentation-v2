import React, {ComponentProps} from 'react';
import type FooterType from '@theme/Footer';
import { LzContainer, LzDivider, LzLink, Rating } from '@site/src/components';
import { footerData } from '@site/src/data';

type Props = ComponentProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <footer className='w-full max-w-3xl px-6 mx-auto mt-10 py-14'>
      <Rating />
      <LzDivider className='mt-14' />
      <LzContainer className="px-8 mt-16" fluid>
        <div className='grid w-full grid-cols-3 mx-auto gap-36'>
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
