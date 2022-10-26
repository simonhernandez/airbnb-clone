import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* Left - Logo */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
          <Image
            src={'https://links.papareact.com/qd3'}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>

        {/* Center - Search Bar */}
        <div className='flex items-center border-2 rounded-full py-2 px-1 md:shadow-sm'>
          <input type="search" name="search" id="search" placeholder='Start your search' className='flex-1 mx-2 bg-transparent outline-none text-gray-600 text-sm' />
          <MagnifyingGlassIcon className='hidden md:inline-flex bg-red-400 h-8 text-white rounded-full p-2 cursor-pointer' />
        </div>

        {/* right */}
        <div>r</div>
    </header>
  )
}

export default Header