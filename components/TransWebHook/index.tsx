import CodeBlock from 'components/CodeBlock'
import Divider from 'components/Divider'
import LzAlert from 'components/UI/alert'
import DashboardScreenshot from 'public/icons/dashboardScreenshot'
import React from 'react'

const TransferWebHook = () => {
  return (
    <>
      <div>
        <text className='paragraph-2'>
          Here are some sample webhook paylods for deposit transactions{' '}
        </text>
        <div className='my-8'>
          <CodeBlock req='' id='webHookPayload' className='h-[492px] ' />
          <Divider className='w-20 mt-3' />
        </div>
        <section>
          <h5 className='heading-5-s mt-7'>Enabling WebHooks</h5>
          <p className='paragraph-2 my-7'>
            You can specify your webhook URL on <code>your dashboard</code> and
            where we will send <code>POST</code> request whenever an event
            occurs
            <p className='my-4'>
              Here is how to setup a webhooks on your Lazerpay account
            </p>
            <ul className='flex flex-col mt-6 space-y-4'>
              <li>
                <code>1</code> Login to your <code>dashboard</code> and on{' '}
                <b>settings</b>
              </li>
              <li>
                <code>2</code> Navigate to the <b>API Keys and WeebHooks tab</b>
              </li>
              <li>
                <code>3</code> Specify your webhook url and click on{' '}
                <b>Update</b>
              </li>
            </ul>
          </p>
          <DashboardScreenshot />
          <LzAlert
            className='my-7'
            status='info'
            content={`When testing, you can get an instant webhook URL by visiting <code>webhook.site.</code> This will allow you
             to inspect the received payload without having to write any code or set up a server.`}
          />
          <Divider className='w-20 mt-3' />
        </section>
        <section className='my-12'>
          <h5 className='heading-5-s'>Validating WebHook Signature</h5>
          <p className='paragraph-2 my-5'>
            Every webhook event payload will contain a hashed authentication
            signature in the header which is computed by generating a hash from
            concatenating your API key and request body, using the HMAC SHA256
            hash algorithm.{' '}
            <p className='my-8'>
              In order to verify this signature came from Lazerpay, you simply
              have to generate the HMAC SHA256 hash and compare it with the
              signature received.
            </p>
          </p>
          <CodeBlock req='' id='webHookPayload2' className='h-[492px]' />
          <Divider className='w-20 mt-3' />
        </section>
        <section className='mb-12'>
          <h5 className='heading-5-s'>Responding to WebHooks Request</h5>
          <p className='paragraph-2 my-7'>
            You must respond with a <code>200 ok</code> status code. Any other
            response code outside of the <code>2xx</code> range, will be
            considered as a failure including <code>3xx</code> codes.{' '}
            <b>We don't care about the response body or header</b>
          </p>
          <LzAlert
            status='info'
            className='mt-16'
            content="If we don't get a 200 OK status code, we will retry the webhook every one minute for the next 24hrs"
          />
          <Divider className='w-20 mt-3' />
        </section>

        <div className='my-4'>
          <h5 className='heading-5-s'>Supported Webhook Types</h5>
          <p className='paragraph-2 my-7'>
            Here are the webhook request type that we support. We will add more
            as we keep making webhook support for differnt API operations in the
            future.
          </p>
        </div>
      </div>
    </>
  )
}

export default TransferWebHook
