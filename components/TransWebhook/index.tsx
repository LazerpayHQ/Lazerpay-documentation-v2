import CodeBlock from 'components/CodeBlock'
import Divider from 'components/Divider'
import LzAlert from 'components/UI/alert'
import LzTable from 'components/UI/table'
import DashboardScreenshot from 'public/icons/dashboardScreenshot'
import React from 'react'

const TransferWebHook = () => {
  return (
    <>
      <div>
        <section className='my-8'>
          <div className='paragraph-2 my-7'>
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
          </div>
          <DashboardScreenshot />
          <LzAlert
            className='my-7'
            status='info'
            content={`When testing, you can get an instant webhook URL by visiting <code>webhook.site.</code> This will allow you
             to inspect the received payload without having to write any code or set up a server.`}
          />
        </section>
      </div>
    </>
  )
}

export default TransferWebHook
