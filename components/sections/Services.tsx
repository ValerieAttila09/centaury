
import Image from 'next/image'
import React from 'react'

interface ServicesProps {
  number: string
  title: string
  description: string
  color: string
  image: any
}

const Services: React.FC<ServicesProps> = ({ number, title, description, color, image }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 items-start gap-8 border-t border-border container-wrapper">
      <div className="flex items-center text-xs py-2">
        <span className="mr-4">{number}</span>
        <span className='text-lg'>{title}</span>
      </div>
      <div className="text-2xl md:text-3xl py-2">
        <p>{description}</p>
      </div>
      <div className={`w-full h-56 sm:h-64 md:h-72 ${color} overflow-hidden relative`}>
        <Image src={image} alt={title} height={480} width={720} className='w-full h-full object-cover'/>
      </div>
    </section>
  )
}

export default Services
