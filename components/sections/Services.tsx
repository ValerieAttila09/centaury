
import React from 'react'

interface ServicesProps {
  number: string
  title: string
  description: string
  color: string
}

const Services: React.FC<ServicesProps> = ({ number, title, description, color }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 items-start gap-8 border-t border-border container-wrapper">
      <div className="flex items-start text-xs py-2">
        <span className="mr-4">{number}</span>
        <span>{title}</span>
      </div>
      <div className="text-lg md:text-xl py-2">
        <p>{description}</p>
      </div>
      <div className={`w-full h-56 sm:h-64 md:h-72 ${color}`}></div>
    </section>
  )
}

export default Services
