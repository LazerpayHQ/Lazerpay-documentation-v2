import classNames from 'classnames';
import { LzLink } from 'components';
import { useRouter } from 'next/router';
import { LogoFull } from 'public/icons';
import sidebar from 'sidebar.config';
import Styles from './Sidebar.module.scss';

const Sidebar = ():JSX.Element => {
  const router = useRouter();
  return (
    <aside className={classNames(Styles.Sidebar,'float-left pl-6 xl:pl-10 py-6 sticky top-0 w-1/5 h-screen')}>
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
            sidebar.map(({ label, route, icon }: any)=> {
              const isActive = router.asPath.includes(route);
              return (
                <li key={route}>
                  <LzLink to={route} className={classNames('flex items-center py-2 space-x-3 paragraph-2', {
                    'paragraph-2-s text-pri-500': isActive
                  })}>
                    <span>{icon()}</span>
                    <span>{label}</span>
                  </LzLink>
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