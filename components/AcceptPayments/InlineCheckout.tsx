import CodeBlock from 'components/CodeBlock'
import { ResCodeBlock } from 'components/CodeBlock/ResCodeBlock'
import Divider from 'components/Divider'
import LzTable from 'components/UI/table'
import React from 'react'

const InlineCheckout = () => {
  return (
    <>
      <div>
        <h5 className='heading-6-s'>1. Add the inline Checkout</h5>
        <p className='paragraph-2 my-6'>
          Add the inline checkout to your website using a script tag, it is
          delivered through a reliable CDN.
        </p>
        <p className='bg-neu-50 p-2'>
          {'<script>'}
          <code>
            https://cdn.jsdelivr.net/gh/Lazerpay-Finance/checkout-build@main/
            <br /> checkout@1.0.1/dist/index.min.js{' '}
          </code>
          {'</script>'}
        </p>
      </div>
      <div className='my-6'>
        <h5 className='heading-6-s'>1. Collect user Date</h5>
        <p className='paragraph-2 my-6'>
          To receive payments you will need to pass some parameters which
          include some functions and <br /> optional customer information. They
          include:
        </p>
        <Divider className='max-w-100 mb-4' />

        <LzTable
          head={['Props', 'FUNCTIONALITY', 'Priority', 'Type']}
          body={[
            ['name', 'Customers Name', 'optional', `<code>Strings</code>`],
            ['email', 'Customer email', 'optional', `<code>String</code>`],
            [
              'amount',
              'Customers amount to pay (in USD, AED, GBP, EUR, NGN)',
              'required',
              `<code>Strings | Number</code>`,
            ],
            [
              'reference',
              'Unique case sensitive transaction reference. If you do not pass this parameter, Lazerpay will generate a unique reference for you',
              'optional',
              `<code>Strings | Number</code>`,
            ],
            [
              'acceptPartial Payment',
              "If you want accept partial payment from customers, By default it's false",
              'optional',
              `<code>Boolean</code>`,
            ],
            [
              'key',
              'Lazerpay key. Get you public key from your Lazerpay dashboard. Testnet public keys begin with "pk_test_" and mainnet keys begin with "pk_live_".',
              'required',
              `<code>Strings</code>`,
            ],
            [
              'currency',
              `The currency <code>amount</code> is denominated in. Can be USD, GBP, EUR, AED or NGN`,
              'required',
              `<code>Strings</code>`,
            ],
            [
              'onClose',
              'The function called when the payment modal closes',
              'optional',
              `<code>Function</code>`,
            ],
            [
              'onSuccess',
              'The function called after the payment is confirmed',
              'optional',
              `<code>Function</code>`,
            ],
            [
              'onError',
              'The function that is called if an error occurs during payment confirmation',
              'optional',
              `<code>Function</code>`,
            ],
          ]}
        />
        <text className='paragraph-2 my-9'>
          <p className='my-14'>
            The function that is called if an error occurs during payment
            confirmation <code>LazerCheckout</code> <br />
            function. Pass the information you get in step 2 to the function in
            an object inside the <br /> <code>payWithLazer</code>function
          </p>
          <p>
            The customer information can be retrieved from your database if you
            already have it stored, or <br /> from a form like in the example
            below:
          </p>
        </text>
        <ResCodeBlock
          lang='html'
          options
          req1='HTML'
          req2='JSX'
          id1='acceptPaymentsHTML'
          id2='nodeJsSdkSample'
        />
        <p className='paragraph-1 my-6'>In this sample, notice how:</p>
        <ul className='space-y-5 paragraph-2'>
          <li>
            <code>1</code> The Lazerpay inline javascript is included using a{' '}
            <code>script</code>tag. This is how you import <br />
            Lazerpay into your code.
          </li>
          <li>
            <code>2</code> The <code>script</code> and <code>email</code> here
            <br />
            can be optional. The PopUp will provide those fields to the
            customers
          </li>
          <li>
            <code>3</code> The <code>Pay With Lazerpay</code> button has been
            tied to an <code>onClick</code> function called <br />{' '}
            <code>pay With Lazerpay </code>. This is the action that causes the
            Lazerpay popup to load.
          </li>
        </ul>
      </div>
    </>
  )
}

export default InlineCheckout
