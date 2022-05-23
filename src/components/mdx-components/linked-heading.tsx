import React from 'react'
import { LzLink } from '..'

export const LinkedHeading = (props: any) => (
  <h2 data-group='' css={{ scrollMarginBlock: '6.875rem' }} {...props}>
    <span className='content'>{props.children}</span>
    {props.id && (
      <LzLink to={`#${props.id}`}>
        #
      </LzLink>
    )}
  </h2>
)
