import React from 'react'
import CodeBlock from 'components/CodeBlock'
import LzTable from 'components/UI/table'


const TransferAPI = () => {

  return (
    <>
      <LzTable
        head={['Parameter', 'Type', 'Defination']}
        body={[
          [`<b>Header</b>`, '', '.'],
          ['Authorization*', `<code>String</code>`, 'Bearer YOUR_SECRET_KEY'],
          [`<b>Body</b>`, '.', ''],
          [
            'amount*',
            `<code>String | Number </code>`,
            'The amount you want to send out',
          ],
          [
            'recipient*',
            `<code>String</code>`,
            'Wallet address of the recipient',
          ],
          ['coin*', `<code>String</code>`, 'Cryto you want to transfer'],
          [
            'blockchain*',
            `<code>String</code>`,
            'The blockchain network you are sending to',
          ],
        ]}
      />

      {/* cURL CODEBLOCK */}

      {/* RESPONSE CODE */}
    </>
  )
}

export default TransferAPI
