'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, { y: '0%', duration: 0.5, ease: 'power2.out' });
      gsap.fromTo('.sidebar-link', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, delay: 0.3, duration: 0.4, ease: 'power2.out' }
      );
    } else {
      gsap.to(sidebarRef.current, { y: '-100%', duration: 0.5, ease: 'power2.in' });
    }
  }, [isOpen]);

  return (
    <div 
      ref={sidebarRef} 
      className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center"
      style={{ transform: 'translateY(-100%)' }}
    >
      <div ref={linksRef} className="flex flex-col items-center gap-8">
        <Link href="/" className="sidebar-link text-3xl font-medium" onClick={onClose}>Home</Link>
        <Link href="/work" className="sidebar-link text-3xl font-medium" onClick={onClose}>Work</Link>
        <Link href="/showcases" className="sidebar-link text-3xl font-medium" onClick={onClose}>Showcases</Link>
        <Link href="/contact" className="sidebar-link text-3xl font-medium" onClick={onClose}>Contact</Link>
      </div>
    </div>
  );
};

export default SidebarMobile