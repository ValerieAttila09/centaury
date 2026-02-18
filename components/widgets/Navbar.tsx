'use client';

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const NavbarWidget = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formatTime = (unit: number) => {
    return unit < 10 ? "0" + unit : unit;
  }

  const getHourTime = formatTime(time.getHours());
  const getMinuteTime = formatTime(time.getMinutes());

  return (
    <div className='fixed top-0 w-full inset-x-0 z-50'>
      <nav className='flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm'>
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
            <span className="">Showcases</span>
          </Link>
          <Link href="/" className=''>
            <span className="">Contact</span>
          </Link>
        </div>
        <div className="">
          <span className="">JAKARTA | {getHourTime}:{getMinuteTime}</span>
        </div>
      </nav>
    </div>
  )
}

export default NavbarWidget