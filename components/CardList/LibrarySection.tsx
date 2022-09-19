import classNames from "classnames"
import LinkCard from "components/LinkCard"
import { libraryGetStarted } from './data';

export const GetStarted = () => {
  return (
    <section
      className={classNames(
        'grid md:grid-cols-2 items-center lg:flex-row w-full lg:space-y-1 w-full md:space-x-6',
      )}
    >
      {libraryGetStarted.map(({ title, desc, route }) => {
        return <LinkCard icon={true} key={route} title={title} desc={desc} route={route} />
      })}
    </section>
  )
}