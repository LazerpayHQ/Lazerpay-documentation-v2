import React from 'react'
import { LzButton, LzLink } from 'components'
import { LogoFull, SearchIcon } from 'public/icons'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { headerLinks } from './data'
import Styles from './Header.module.scss'
import classNames from 'classnames'
interface IProps {
  toggleSidebar: Function
}

const Header = ({ toggleSidebar }: IProps) => {
  const headerStyles =
    'pb-3 md:py-3 flex items-top lg:items-center justify-between xl:pr-4 sticky top-0 z-10 '
  return (
    <header
      className={classNames(
        Styles.Header,
        'py-5 pb-4 md:py-6 lg:pb-4 lg:py-3 xl:pr-4 sticky top-0 bg-white z-10 w-full',
      )}
    >
      <div className='flex items-center justify-between px-4 lg:hidden'>
        <div className='flex items-center space-x-6 md:space-x-8 lg:hidden flex-nowrap'>
          <div
            onClick={() => toggleSidebar((prev: boolean) => !prev)}
            className='text-lg'
            tabIndex={0}
          >
            <FaBars />
          </div>
          <div className='flex items-center space-x-2'>
            <LzLink>
              <LogoFull />
            </LzLink>
            <LzLink to='/docs' className='p-2 px-2 py-1 rounded-8 bg-neu-50'>
              <h3 className='heading-6-s-sm'>Docs</h3>
            </LzLink>
            <div role='button' tabIndex={0} className='text-neu-500'>
              <FaChevronDown />
            </div>
          </div>
        </div>

        <div className='md:px-4 md:pt-3 lg:hidden' tabIndex={0}>
          <SearchIcon />
        </div>
      </div>
      <div className='items-center hidden w-full pr-4 md:space-x-7 lg:space-x-20 lg:flex lg:px-6 xl:pl-20'>
        {/* TODO - create a standalone component search bar */}
        <div className='flex-1' />
        {/* <input
          placeholder='Quick search'
          className='flex-1 w-3/6 bg-white lg:border lg:shadow-sm lz-input-sm lz-input rounded-5 border-neu-100'
        /> */}

        <div className='flex items-center justify-between space-x-10'>
          <ul className='items-center hidden space-x-6 lg:flex'>
            {headerLinks.map(({ title, route }) => (
              <li className='paragraph-1-s text-neu-800' key={title}>
                <LzLink to={route}>{title}</LzLink>
              </li>
            ))}
          </ul>
          <LzButton size='md'>Dashboard</LzButton>
        </div>
      </div>
    </header>
  )
}

export default Header
