'use client';

import React from 'react';

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  isOpen: boolean;
}

const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, ...props }) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-180' : ''}`}>

      <path
        d={isOpen ? "M6 18L18 6" : "M4 6h16"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'd 0.3s ease-in-out',
        }}
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'opacity 0.3s ease-in-out',
          opacity: isOpen ? 0 : 1
        }}
      />
      <path
        d={isOpen ? "M6 6l12 12" : "M4 18h16"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'd 0.3s ease-in-out',
        }}
      />
    </svg>
  );
};

export default MenuIcon