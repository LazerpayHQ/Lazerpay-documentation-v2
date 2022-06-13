import classNames from 'classnames';
import { isEmpty } from 'ramda';
import { useRouter } from 'next/router';
import { LzLink } from 'components';
import { LogoFull } from 'public/icons';
import sidebar, { SidebarItem } from 'sidebar.config';
import Styles from './Sidebar.module.scss';

const Sidebar = (): JSX.Element => {
  const { query } = useRouter();

  return (
    <aside className={classNames(Styles.Sidebar, 'float-left pl-6 xl:pl-10 py-6 sticky top-0 w-1/5 h-screen hidden lg:block')}>
     
      <div className='flex items-center space-x-3 xl:space-x-4'>
        <LzLink to='/'>
          <LogoFull className="w-24 xl:w-full" />
        </LzLink>
        <LzLink to='/docs' className='p-2 px-2 py-1 rounded-8 bg-neu-50'>
          <h3 className='heading-6-s-sm'>Docs</h3>
        </LzLink>
      </div>

      <div className='mt-16'>
        <ul className='space-y-4'>
          {
            sidebar.map(({ label, id, icon, children }: SidebarItem) => {
              const isActive = query.slug === id;
              console.log(id)
              return (
                <li key={id}>
                  <LzLink to={id} className={classNames('flex items-center py-2 space-x-5 paragraph-2-s', {
                    'text-pri-500': isActive
                  })}>
                    <span>{icon}</span>
                    <span>{label}</span>
                  </LzLink>
                  {
                    (children && !isEmpty(children)) && (
                      <ul className={classNames('my-3 ml-6', {
                        'hidden': !isActive
                      })}>
                        {
                          children.map(child => {
                            const isActive = query.id === child.id;
                            console.log(child)

                            return (
                              <li
                                className={classNames(
                                  "py-2 border-l pl-5 paragraph-1 text-neu-800 border-pri-50 first-letter:capitalize",
                                  {'text-pri-500 paragraph-1-s border-l-pri-500': isActive }
                                )}
                                key={child.id}>
                                <LzLink to={`${id}/${child.id}`}>{child.label}</LzLink>
                              </li>
                            )
                          })
                        }
                      </ul>
                    )
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;