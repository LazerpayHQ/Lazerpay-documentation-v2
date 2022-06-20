import classNames from 'classnames'
import { isEmpty } from 'ramda'
import { useRouter } from 'next/router'
import { LzLink, LzButton } from 'components'
import { LogoFull } from 'public/icons'
import sidebar, { SidebarItem } from 'sidebar.config'
import Styles from './Sidebar.module.scss'

const SidebarMobile = (): JSX.Element => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-start justify-between space-x-10'>
      <ul className='h-[34rem] space-y-4 mb-2'>
        {sidebar.map(({ label, id, icon, children }: SidebarItem) => {
          const splitPath = router.asPath.split('/')
          const isActive = splitPath[2] === id
          // console.log(id)
          return (
            <li className='' key={id}>
              <LzLink
                to={id}
                className={classNames(
                  'flex items-center py-2 space-x-5 paragraph-2-s ',
                  {
                    'text-pri-500': isActive,
                  },
                )}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </LzLink>
              {children && !isEmpty(children) && (
                <ul
                  className={classNames('my-3 ml-6', {
                    hidden: !isActive,
                  })}
                >
                  {children.map((child) => {
                    const isActive = splitPath[splitPath.length - 1] === child.id
                    // console.log(child)

                    return (
                      <li
                        className={classNames(
                          'py-2 border-l pl-5 paragraph-1 text-neu-800 border-pri-50 first-letter:capitalize',
                          {
                            'text-pri-500 paragraph-1-s border-l-pri-500':
                              isActive,
                          },
                        )}
                        key={child.id}
                      >
                        <LzLink to={`${id}/${child.id}`}>{child.label}</LzLink>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
      <LzButton size='md'>Dashboard</LzButton>
    </div>
  )
}

export default SidebarMobile
