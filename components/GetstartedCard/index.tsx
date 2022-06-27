import classNames from 'classnames'
import Styles from './index.module.scss'
import {
  completeYourIntegrationData,
  startIntegratingData,
  testAndGoData,
} from './data'
import LzLink from 'components/UI/link'
import LinkIcon from 'public/icons/link-icon'
import ArrowRightIcon from 'public/icons/arrow-right-icon'

interface MyProps {
  desc: string,
  title: string,
  route: string,
}

// card with Icon component
export const LinkedCard = ({ desc, title, route }: MyProps) => {
  return (
    <div key={route}>
      <LzLink className='my-2' to={route}>
        <div
          key={route}
          className='bg-white mb-2 p-6 md:pt-9 drop-shadow-xs rounded-8 lg:rounded-8 h-[210px] lg:w-92 z-10'
        >
          <LinkIcon />
          <h5 className='py-2 text-pri-500 md:py-4 paragraph-2 md:paragraph-3-s'>
            {title}
          </h5>
          <p className='mr-6 paragraph-1'>{desc} </p>
          <span className='flex justify-end pt-3'>
            <ArrowRightIcon />
          </span>
        </div>
      </LzLink>
    </div>
  )
}

// card without Icon component
export const PlainCard = ({ desc, title, route }: MyProps) => {
  return (
    <div key={route}>
      <LzLink className='my-2' to={route}>
        <div
          key={route}
          className='z-10 px-5 mb-2 bg-white md:pt-4 drop-shadow-xs rounded-8 lg:rounded-8 sm:w-auto lg:w-92'
        >
          <h5 className='py-2 text-pri-500 md:py-4 paragraph-2 md:paragraph-3-s'>
            {title}
          </h5>
          <p className='h-12 mr-6 paragraph-1'>{desc} </p>
          <span className='flex justify-end py-5 pb-5'>
            <ArrowRightIcon />
          </span>
        </div>
      </LzLink>
    </div>
  )
}

// the difference the 1st function with the rest is it has an icon on the top

// 1 Start integrating
export default function GetStarted(): JSX.Element {
  return (
    <section
      className={classNames(
        Styles.GetStarted,
        'grid md:grid-cols-2 items-center lg:flex-row w-full lg:space-y-1 w-full md:space-x-6',
      )}
    >
      {startIntegratingData.map(({ title, desc, route }) => {
        return <LinkedCard key={route} title={title} desc={desc} route={route} />
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
        'grid md:grid-cols-2 items-center lg:flex-row w-full md:space-y-1 w-full md:gap-x-6 z-10',
      )}
    >
      {completeYourIntegrationData.map(({ title, desc, route }) => {
        return <PlainCard key={route} title={title} desc={desc} route={route} />
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
        'grid md:grid-cols-2 items-center md:space-y-2 w-full md:gap-x-6',
      )}
    >
      {testAndGoData.map(({ title, desc, route }) => {
        return <PlainCard key={route} title={title} desc={desc} route={route} />
      })}
    </section>
  )
}
