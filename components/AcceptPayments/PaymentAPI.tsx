import React from 'react'
import LzTable from 'components/UI/table'
import LzAlert from 'components/UI/alert'
import CodeBlock, { Label } from 'components/CodeBlock'
import { FaAngleDown } from 'react-icons/fa'
import { ToggleIcon } from 'public/icons'

const RESPONSES = {
  created: '201: Created',
  unauthorized: '401: Unauthorized',
}
const snipId = {
  success: 'resCode201',
  failed: 'reCode401',
}

const PaymentAPI = () => {
  const [option, setOption] = React.useState(RESPONSES.created)

  return (
    <>
      <LzTable
        head={['Parameter name', 'Type', 'Description']}
        body={[
          ['Header', '', '.'],
          ['x-api-key*', `<code>String</code>`, 'YOUR_PUBLIC_KEY'],
          ['Body', '.', ''],
          ['reference', `<code>String</code>  `, 'YOUR_REFERENCE'],
          ['customer_name*', `<code>String</code>`, 'Your Customer’s name'],
          ['customer_email*', `<code>String</code>`, 'Your Customer’s email'],
          [
            'coin*',
            `<code>String</code>`,
            'Stablecoins you want your customers to pay you in',
          ],
          [
            'currency*',
            `<code>String</code> `,
            'Currency should be in the currency you accept on your store, or application',
          ],
          [
            'amount*',
            `<code>String | Number</code>`,
            'The amoumt you want to charge the customer in the currency specified above',
          ],
          [
            'accept_partial_payment',
            `<code>Boolean</code>`,
            'This parameter is set to "false" by default. When you want to accept partial payments and ensure customers complete the required amount they are supposed to pay, it should be set to true',
          ],
        ]}
      />

      {/* cURL CODEBLOCK */}
      <CodeBlock
        options
        lang='curl'
        req1={<Label label='POST' />}
        req2={
          <span className='flex space-x-2 items-center'>
            cURL
            <FaAngleDown />
          </span>
        }
        sideAct={
          <span className='flex paragraph-1 space-x-2 items-center'>
            <p> Hide Response</p>
            <ToggleIcon />
          </span>
        }
        id1='cRULSnippet'
      />

      {/* RESPONSE CODE */}
      <CodeBlock
        options
        lang='json'
        req1='Response'
        sideAct={
          <select
            name={option}
            id={option}
            className='caption-s border-none decoration-none items-center'
          >
            <option value={RESPONSES.created}>{RESPONSES.created} </option>
            <option value={RESPONSES.unauthorized}>
              {RESPONSES.unauthorized}
            </option>
          </select>
        }
        id1={snipId.success}
        id2={snipId.failed}
        className='!bg-white `'
      />

      <h6 className='header-6 my-5'>Important Note</h6>

      <ul className='paragraph-2 space-y-5  my-6'>
        <li>
          <code>1</code> The <code className='text-sec-700'>coin</code> field
          must either be “BUSD”, “DAI”, “USDT”, or “USDC”.
        </li>
        <li>
          <code>2</code>It’s ideal to generate a unique{' '}
          <code className='text-sec-700'>reference</code>
          from your system for every transaction to avoid <br />
          duplicate attempts.
        </li>
        <li>
          <code>3</code> The{' '}
          <code className='text-sec-700'>accept_partial_payment</code>field is
          used to enforce payment completion by your customers. <br />
          {''}A scenario is when a customer is trying to pay for a service worth
          a fixed <code className='text-sec-700'>amount</code>of $100 USD.{' '}
          <br />
          {''} When <code className='text-sec-700'>accept_partial_payment</code>
          is set to true, the customer must pay the exact amount <br />
          {''}before the funds will be sent to you. Read more about Partial
          Payments here.
        </li>
        <li>
          <code>4</code> The <code className='text-sec-700'>amount</code> field
          should be in your fiat currency. The currencies we support are USD,
          AED, <br /> GBP, EUR and NGN. Please reach out to{''}
          <i className='underline text-pri-300'>support@lazerpay.finance</i> if
          you would want us to <br /> support a currency.
        </li>
        <li>
          <code>5</code> The <code className='text-sec-700'>amount</code> during
          initialization is converted to the{' '}
          <code className='text-sec-700'>coin</code> equivalent of the currency{' '}
          <br /> specified.
        </li>
      </ul>
      <LzAlert
        status='warning'
        content='Never call the Lazerpay API directly from your frontend to avoid exposing your secret key on the frontend. All requests to the Lazerpay API should be initiated from your server, and your frontend gets the response from your server.'
      />
    </>
  )
}

export default PaymentAPI
