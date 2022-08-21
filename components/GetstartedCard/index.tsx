import classNames from 'classnames'
import Styles from './index.module.scss'
import { PlainCard, LinkedCard } from './Cards'
import {
  completeYourIntegrationData,
  startIntegratingData,
  testAndGoData,
} from './data'
import LzLink from 'components/UI/link'
import LinkIcon from 'public/icons/link-icon'
import ArrowRightIcon from 'public/icons/arrow-right-icon'

interface MyProps {
  desc: string
  title: string
  route: string
  icon?: boolean
}

// card with Icon component
export const LinkedCard = ({ icon, desc, title, route }: MyProps) => {
 
  const frameStyle =
    'bg-white mb-2 p-6 md:pt-9 h-[210px] drop-shadow-xs rounded-8 lg:rounded-8 lg:w-92 z-10'

  return (
    <div key={route}>
      <LzLink className='my-2' to={route}>
        <div
          key={route}
          className={
            icon
              ? frameStyle
              : 'bg-white mb-2 p-6 drop-shadow-xs rounded-8 h-[185px] lg:rounded-8 lg:w-92 z-10'
          }
        >
          {icon ? <LinkIcon /> : ''}
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
        return (
          <LinkedCard
            icon={true}
            key={route}
            title={title}
            desc={desc}
            route={route}
          />
        )
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
        return (
          <LinkedCard key={route} title={title} desc={desc} route={route} />
        )
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
        return <LinkedCard key={route} title={title} desc={desc} route={route} />
      })}
    </section>
  )
}
