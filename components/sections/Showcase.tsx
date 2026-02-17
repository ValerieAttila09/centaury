
import Image from 'next/image'
import React from 'react'
import ShowcaseImage from "../../assets/images/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg"

const Showcase = () => {
  return (
    <section className="my-16 md:my-32">
      <div className="w-full h-auto">
        <Image src={ShowcaseImage} alt="" height={720} width={1080} className='w-full h-auto object-cover'/>
      </div>
    </section>
  )
}

export default Showcase
