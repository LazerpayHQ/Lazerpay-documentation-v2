import classNames from 'classnames'
import Styles from './index.module.scss'
import {
  completeYourIntegrationData,
  startIntegratingData,
  testAndGoData,
} from './data'
import LzLink from 'components/UI/Link'
import LinkIcon from 'public/icons/link-icon'
import ArrowRightIcon from 'public/icons/arrow-right-icon'

// card with Icon
export const LinkedCard = ({ desc, title, route }) => {
  return (
    <>
      <LzLink className='my-2' to={route}>
        <div className='bg-white text-sm mb-2 p-6 md:pt-9 drop-shadow-xs rounded-8 lg:rounded-8 lg:w-92'>
          <LinkIcon />
          <h5 className='text-pri-500 py-2 md:py-4 paragraph-2 md:text-md font-bold'>
            {title}
          </h5>
          <p className=' paragaph-1 mr-6'>{desc} </p>
          <span className='pt-3 flex text-xl justify-end'>
            <ArrowRightIcon />
          </span>
        </div>
      </LzLink>
    </>
  )
}

// card without Icon
export const PlainCard = ({ desc, title, route }) => {
  return (
    <>
      <LzLink className='my-2' to={route}>
        <div className='bg-white text-sm mb-2 px-5 md:pt-4 drop-shadow-xs rounded-8 lg:rounded-8 lg:w-92'>
          <h5 className='text-pri-500 py-2 md:py-4 paragraph-2 md:text-md font-bold'>
            {title}
          </h5>
          <p className='h-12 paragraph-1 mr-6'>{desc} </p>
          <span className='py-5 pb-5 flex text-xl justify-end'>
            <ArrowRightIcon />
          </span>
        </div>
      </LzLink>
    </>
  )
}

// the difference the 1st function with the rest is it has an icon on the top

// 1 Start integrating
export default function GetStarted(): JSX.Element {
  return (
    <section
      className={classNames(
        Styles.GetStarted,
        'grid md:grid-cols-2 lg:flex-row w-full lg:space-y-1 w-full lg:space-x-6',
      )}
    >
      {startIntegratingData.map(({ title, desc, route }) => {
        return <LinkedCard title={title} desc={desc} route={route} />
      })}
    </section>
  )
}

// 2 Complet your integration
export function CompleteIntegration(): JSX.Element {
  return (
    <section
      className={classNames(
        Styles.GetStarted,
        'grid md:grid-cols-2 lg:flex-row w-full lg:space-y-1 w-full lg:gap-x-6',
      )}
    >
      {completeYourIntegrationData.map(({ title, desc, route }) => {
        return <PlainCard title={title} desc={desc} route={route} />
      })}
    </section>
  )
}

// 3 Test and Go Live
export function TestAndGoLive(): JSX.Element {
  return (
    <section
      className={classNames(
        Styles.GetStarted,
        'grid md:grid-cols-2 lg:space-y-2 w-full lg:gap-x-6',
      )}
    >
      {testAndGoData.map(({ title, desc, route }) => {
        return <PlainCard title={title} desc={desc} route={route} />
      })}
    </section>
  )
}
