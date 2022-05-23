import * as React from 'react'
import { LzLink } from '.'

const EditPageLink = ({ href }: { href?: string }) => {
  return (
    <LzLink to={href} passHref>
      <div>
        <span>
          Edit this page
        </span>
      </div>
    </LzLink>
  )
}

export default EditPageLink
