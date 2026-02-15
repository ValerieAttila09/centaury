
import React from 'react'

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-xs">
      <div>
        <h3 className="font-bold">CENTAURY</h3>
        <p>STUDIO</p>
      </div>
      <div>
        <ul>
          <li><a href="#" className="hover:underline">Work</a></li>
          <li><a href="#" className="hover:underline">Studio</a></li>
          <li><a href="#" className="hover:underline">Journal</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="#" className="hover:underline">BEHANCE</a></li>
          <li><a href="#" className="hover:underline">INSTAGRAM</a></li>
          <li><a href="#" className="hover:underline">LINKEDIN</a></li>
        </ul>
      </div>
      <div>
        <p>centaury.studio@gmail.com</p>
        <p>+34 834 734 230</p>
      </div>
    </footer>
  )
}

export default Footer
