import classNames from 'classnames'
import CodeBlock from 'components/CodeBlock'
import LzButton from 'components/UI/button'
import LzLink from 'components/UI/link'
import Styles from './index.module.scss'
import { DataProp, ItemType, RequestData } from 'components/CodeBlock/types'

export default function AcceptPayments(): JSX.Element {
  const codeObject: { type: any; item: RequestData } = {
    type: 'request',
    item: {
      requestData: {
        name: ['cURL'],
        snippet: ['getStartedAcceptPaymentPostCURL'],
        lang: ['curl'],
      },
      //   responseData: {
      //     name: ['201: Created'],
      //     snippet: ['nodeSDKSampleResponse'],
      //     lang: ['json'],
      //   },
    },
  }
  return (
    <section
      className={classNames(
        Styles.AcceptPayments,
        'flex flex-col lg:flex-row w-full lg:space-y-0 lg:space-x-6',
      )}
    >
      <div className='flex flex-col justify-between px-4 pt-4 pb-4 md:pt-14 rounded-t-8 lg:rounded-8 lg:w-56'>
        <div className='!pr-8 mb-8 lg:mb-0'>
          <h3 className='heading-6-s whitespace-nowrap'>To get started</h3>
          <p className='mt-5 paragraph-1 mb-6'>
            Authenticate all Lazerpay API calls using your secret keys.
          </p>
        </div>
        <LzButton
          className='w-full mt-24 paragraph-1 md:mt-0'
          size='md'
          rightIcon={'chevron'}
        >
          Let's go
        </LzButton>
      </div>
      <div className='lg:max-w-lg xl:max-w-xl xl:w-4/6'>
        <CodeBlock
          //   codeClassName='lg:min-h-[320px]'
          responseTheme='default'
          responseTitle='Response JSON'
          data={codeObject}
        />
        {/* <CodeBlock id="api" /> */}
      </div>
    </section>
  )
}
