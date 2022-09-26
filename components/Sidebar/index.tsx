import classNames from 'classnames';
import { isEmpty } from 'ramda';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { LzLink, LzButton } from 'components';
import { LogoFull } from 'public/icons';
import sidebar, { SidebarItem } from 'sidebar.config';
import { useMediaQuery } from 'lib/use-mediaQuery';
import Styles from './Sidebar.module.scss';

interface IProps {
  isOpen: boolean
  toggleSidebar: Function
}

const Sidebar = ({ isOpen }: IProps): JSX.Element => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <motion.aside
      animate={(isMobile ? { left: isOpen ? 0 : -384 } : {})}
      transition={{ duration: .5 }}
      className={classNames(
        Styles.Sidebar,
        'float-left pb-20 pl-6 xl:pl-10 py-6 lg:sticky top-0 w-[285px] overflow-y-scroll transform lg:overflow-hidden -left-96 lg:left-0 lg:w-1/5 h-screen fixed lg:block'
      )}>
      <div className='flex items-center space-x-3 xl:space-x-4'>
        <LzLink to='/'>
          <LogoFull className='w-24 xl:w-full' />
        </LzLink>
        <LzLink to='/docs' className='p-2 px-2 py-1 rounded-8 bg-neu-50'>
          <h3 className='heading-6-s-sm'>Docs</h3>
        </LzLink>
      </div>

      <div className='mt-16'>
        <ul className='space-y-4'>
          {
            sidebar.map(({ label, id, redirect, icon, children }: SidebarItem) => {
              const splitPath = router.asPath.split('/');
              const isActive = splitPath[2] === id;

              return (
                <li key={id}>
                  <LzLink to={redirect || id} className={classNames('flex items-center py-2 space-x-5 paragraph-2-s', {
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
                            const isActive = splitPath[splitPath.length - 1] === child.id;
                            return (
                              <li
                                className={classNames(
                                  "py-2 border-l pl-5 paragraph-1 text-neu-800 border-pri-50 first-letter:capitalize",
                                  { 'text-pri-500 paragraph-1-s border-l-pri-500': isActive }
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

          <div className='pr-6 !mt-14'>
            <LzButton className='w-full mr-12 sm:hidden' size='lg' asLink='/'> Dashboard</LzButton>
          </div>
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidebar
