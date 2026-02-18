'use client';

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useMobile } from '../../hooks/use-mobile';
import MenuIcon from '../icons/MenuIcon';
import SidebarMobile from './SidebarMobile';

const NavbarWidget = () => {

  const [time, setTime] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useMobile();

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='fixed top-0 w-full inset-x-0 z-50'>
        <nav className='flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm'>
          <div className=''>
            <Link href="/">
              <h1 className="text-lg font-medium text-black">CENTAURY</h1>
            </Link>
          </div>

          {isMobile ? (
            <MenuIcon isOpen={isSidebarOpen} onClick={toggleSidebar} />
          ) : (
            <>
              <div className="flex items-center gap-4">
                <Link href="/" className=''>
                  <span className="">Home</span>
                </Link>
                <Link href="/work" className=''>
                  <span className="">Work</span>
                </Link>
                <Link href="/showcases" className=''>
                  <span className="">Showcases</span>
                </Link>
                <Link href="/contact" className=''>
                  <span className="">Contact</span>
                </Link>
              </div>
              <div className="">
                <span className="">JAKARTA | {getHourTime}:{getMinuteTime}</span>
              </div>
            </>
          )}
        </nav>
      </div>
      {isMobile && <SidebarMobile isOpen={isSidebarOpen} onClose={toggleSidebar} />}
    </>
  )
}

export default NavbarWidget