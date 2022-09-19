import classNames from 'classnames'
import Styles from './index.module.scss'
import LinkedCard from './Cards'
import {
  completeYourIntegrationData,
  startIntegratingData,
  testAndGoData,
} from './data'

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
        return (
          <LinkedCard key={route} title={title} desc={desc} route={route} />
        )
      })}
    </section>
  )
}
