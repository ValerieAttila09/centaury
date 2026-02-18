
import { works_data } from '@/lib/constants'
import React from 'react'
import Image from 'next/image'

const SelectedWorks = () => {
  return (
    <section className="my-16 md:my-32 container-wrapper">
      <h2 className="text-center text-sm mb-8">SELECTED WORKS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {works_data.map((work) => (
          <div key={work.id}>
            <div className={`w-full h-64 sm:h-72 overflow-hidden md:h-100 relative ${work.color}`}>
              <Image src={work.image} alt={work.title} height={720} width={480} className="h-full w-full object-cover" />
            </div>
            <div className="mt-2 text-xs">
              <p>{work.id} &nbsp; {work.title}</p>
              <p className="text-gray-500">{work.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="hover:underline text-sm">Explore projects...</a>
      </div>
    </section>
  )
}

export default SelectedWorks
