import React from 'react'
import { ToggleIcon } from 'public/icons'
import { FaAngleDown } from 'react-icons/fa'
import CodeBlock, { Label } from 'components/CodeBlock/components'
import LzTable from 'components/UI/table'

const RESPONSES = {
  created: '200: Created',
  unauthorized: '400: Insufficient Funds',
}
const snipId = {
  success: 'cryptResCode200',
  failed: 'cryptResCode400',
}

const TransferAPI = () => {
  let header = (
    <div className='flex space-x-5'>
      <Label label='POST' />{' '}
      <span className='flex space-x-2 items-center'>
        cURL
        <FaAngleDown />
      </span>
    </div>
  )

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
      <CodeBlock
        options
        lang='curl'
        req1={header}
        sideAct={
          <span className='flex space-x-2 items-center'>
            <p> Hide Response</p>
            <ToggleIcon />
          </span>
        }
        id1='cRULSnippet2'
      />

      {/* RESPONSE CODE */}
      <CodeBlock
        options
        lang='json'
        req1='Response'
        sideAct={
          <select name={'resp'} id={'resp'} className='caption-s border-none '>
            <option value={RESPONSES.created}>{RESPONSES.created} </option>
            <option value={RESPONSES.unauthorized}>
              {RESPONSES.unauthorized}
            </option>
          </select>
        }
        id1={snipId.failed}
        className='!bg-white `'
      />
    </>
  )
}

export default TransferAPI
