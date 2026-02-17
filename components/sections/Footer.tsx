'use client'

import Image from 'next/image'
import React from 'react'
import CentauryLabel from "../../assets/images/centaury-brand-lable.svg"

const Footer = () => {
  return (
    <footer className="container-wrapper border-t border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-xs ">
        <div>
          <h3 className="font-bold text-lg">CENTAURY</h3>
          <p className='text-md'>STUDIO</p>
        </div>
        <div>
          <ul>
            <li><a href="#" className="text-sm hover:underline">WORK</a></li>
            <li><a href="#" className="text-sm hover:underline">STUDIO</a></li>
            <li><a href="#" className="text-sm hover:underline">JOURNAL</a></li>
            <li><a href="#" className="text-sm hover:underline">CONTACT</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#" className="text-sm hover:underline">BEHANCE</a></li>
            <li><a href="#" className="text-sm hover:underline">INSTAGRAM</a></li>
            <li><a href="#" className="text-sm hover:underline">LINKEDIN</a></li>
          </ul>
        </div>
        <div>
          <p className='text-sm'>centaury.studio@gmail.com</p>
          <p className='text-sm'>+34 834 734 230</p>
        </div>
      </div>
      <div className="w-full relative">
        <Image src={CentauryLabel} alt="Centaury Label" width={1440} height={1080} className='w-full h-auto object-cover absolute inset-0 z-5'/>
      </div>
    </footer>
  )
}

export default Footer
