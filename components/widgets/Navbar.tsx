import Link from 'next/link'
import React from 'react'

const NavbarWidget = () => {
  return (
    <div className='fixed top-0 w-full inset-x-0'>
      <nav className='flex items-center justify-between p-4'>
        <div className=''>
          <h1 className="text-lg font-medium text-black">CENTAURY</h1>
        </div>
        <div className="flex items-center gap-2">
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
          <span className="">JAKARTA | 16:37</span>
        </div>
      </nav>
    </div>
  )
}

export default NavbarWidget