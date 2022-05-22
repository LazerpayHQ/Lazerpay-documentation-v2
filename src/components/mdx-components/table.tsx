import * as React from 'react'

export const Table = (props:any) => (
  <div>
    <table textAlign='left' mt='32px' width='full' {...props} />
  </div>
)

export const THead = (props) => (
  <th {...props} />
)

export const TData = (props) => (
  <td {...props} />
)
