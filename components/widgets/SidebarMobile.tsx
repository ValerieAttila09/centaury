
import React from 'react'

interface SidebarMobileProps {
  isOpen: boolean
  onClose: () => void
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-[#F9F5EF] p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">&times;</button>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li><a href="#" className="hover:underline" onClick={onClose}>Work</a></li>
            <li><a href="#" className="hover:underline" onClick={onClose}>Studio</a></li>
            <li><a href="#" className="hover:underline" onClick={onClose}>Journal</a></li>
            <li><a href="#" className="hover:underline" onClick={onClose}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SidebarMobile
