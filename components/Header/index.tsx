import React, { useState } from 'react'
// import classNames from 'classnames'
import { LzButton, LzLink } from 'components'
import { LogoFull, SearchIcon } from 'public/icons'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { headerLinks } from './data'
import Styles from './Header.module.scss'
import CancleIcon from 'public/icons/cancle-icon'
import SidebarMobile from 'components/Sidebar/SidebarMobile'

import classNames from 'classnames'
import { useRouter } from 'next/router'

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(true)
  const sideBarHandler = (e) => {
    e.preventDefault()
    return setShowSideBar(!showSideBar)
  }
  const { query } = useRouter()

  const headerStyles = ''
  return (
    <header
      className={classNames(
        Styles.Header,
        !showSideBar
          ? 'pb-3 lg:py-3 flex items-top lg:items-center justify-between xl:pr-4 sticky top-0 lg:bg-white z-10 backdrop-blur-[1px] sm:backdrop-blur-none sm:w-full'
          : 'pb-3 lg:py-3 flex items-top sm:items-center justify-between xl:pr-4 sticky top-0 bg-white z-10 w-full',
      )}
    >
      <div className='flex items-center pt-10 bg-white w-[75%] justify-between px-4 lg:hidden'>
        <div>
          {showSideBar ? (
            <div className='flex items-center space-x-4 lg:hidden flex-nowrap'>
              <button onClick={sideBarHandler} tabIndex={0}>
                <FaBars />
              </button>

              <div className='flex items-center space-x-2'>
                <LzLink>
                  <LogoFull />
                </LzLink>
                <LzLink
                  to='/docs'
                  className='p-2 px-2 py-1 rounded-8 bg-neu-50'
                >
                  <h3 className='heading-6-s-sm'>Docs</h3>
                </LzLink>
                <div role='button' tabIndex={0} className='text-neu-500'>
                  <FaChevronDown />
                </div>
              </div>
            </div>
          ) : (
            <>
              <button onClick={sideBarHandler} tabIndex={0}>
                <CancleIcon />
              </button>
              <SidebarMobile />
            </>
          )}
        </div>
      </div>

      <div className='px-4 pt-10 lg:pt-0' tabIndex={0}>
        <SearchIcon />
      </div>
      <div className='items-center hidden w-full px-4 space-x-20 lg:flex lg:px-6 xl:pl-20'>
        {/* TODO - create a standalone component search bar */}
        <input
          placeholder='Quick search'
          className='flex-1 w-3/6 bg-white lg:border lg:shadow-sm lz-input-sm lz-input rounded-5 border-neu-100'
        />

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
