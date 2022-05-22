import classNames from 'classnames';
import { LzButton, LzLink } from 'src/components';
import { headerLinks } from './data';
import Styles from './Header.module.scss';

const Header = ()=> {

  return (
    <header className={classNames(Styles.Header, 'py-3 pr-4 sticky top-0 bg-white z-10')}>
      <div className="flex items-center w-full px-4 pl-20 space-x-20">
        <input placeholder='Quick search' className="flex-1 w-3/6 bg-white border shadow-sm lz-input-sm lz-input rounded-5 border-neu-100" />
        <div className='flex items-center justify-between space-x-10'>
          <ul className='flex items-center space-x-6'>
            {headerLinks.map(({ title, route })=> (
              <li className='paragraph-1-s text-neu-800' key={title}>
                <LzLink to={route}>{title}</LzLink>
              </li>
            ))}
          </ul>
          <LzButton size='md'>Dashboard</LzButton>
        </div>
      </div>
    </header>
  );
};

export default Header;