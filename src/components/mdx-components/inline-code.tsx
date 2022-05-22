import React, { useRef } from 'react'

export const InlineCode = (props: any) => {
  const codeRef = useRef(null)

  return (
    <code
      apply='mdx.code'
      ref={codeRef}
      {...props}
    />
  )
}
