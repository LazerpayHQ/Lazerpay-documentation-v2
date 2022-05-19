import classNames from 'classnames';
import { LzLink } from 'components';
import { LogoFull } from 'public/icons';
import Styles from './Sidebar.module.scss';

const Sidebar = ()=> {
    
  return (
    <aside className={classNames(Styles.Sidebar,'float-left pl-10 py-6 sticky top-0 w-1/5 h-screen')}>
      <div className='flex items-center space-x-4'>
        <LzLink to='/'>
          <LogoFull />
        </LzLink>
        <LzLink to='/docs' className='p-2 px-2 py-1 rounded-8 bg-neu-50'>
          <h3 className='heading-6-s-sm'>Docs</h3>
        </LzLink>
      </div>
    </aside>
  );
};

export default Sidebar;