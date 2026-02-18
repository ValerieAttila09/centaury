import Link from 'next/link'
import React from 'react'

const NavbarWidget = () => {

  const dateNow = new Date();
  const getHourTime = dateNow.getHours();
  const getMinuteTime = dateNow.getMinutes();

  return (
    <div className='fixed top-0 w-full inset-x-0 z-50'>
      <nav className='flex items-center justify-between p-4'>
        <div className=''>
          <h1 className="text-lg font-medium text-black">CENTAURY</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className=''>
            <span className="">Home</span>
          </Link>
          <Link href="/" className=''>
            <span className="">Work</span>
          </Link>
          <Link href="/" className=''>
            <span className="">Show</span>
            cases</Link>
          <Link href="/" className=''>
            <span className="">Contact</span>
          </Link>
        </div>
        <div className="">
          <span className="">JAKARTA | {getHourTime.toLocaleString()}:{getMinuteTime.toLocaleString()}</span>
        </div>
      </nav>
    </div>
  )
}

export default NavbarWidget