
import Image from 'next/image'
import React from 'react'
import ShowcaseImage from "../../assets/images/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg"

const Showcase = () => {
  return (
    <section className="my-16 md:my-32 p-4">
      <div className="w-full h-[110vh] relative">
        <Image src={ShowcaseImage} alt="" height={720} width={1080} className='absolute inset-0 z-5 w-full sm:h-[110vh] h-full object-cover' />
        <div className="absolute w-full h-full inset-0 z-10 bg-transparent flex items-center justify-center text-black">
          <span className="text-2xl font-medium">JAKARTA</span>
          <span className="text-7xl font-thin ms-20">[</span>
          <h1 className="text-center text-sm font-medium flex flex-col justify-center items-center">
            <span className="">Transform your brand</span>
            <span className="">presence with timeless</span>
            <span className="">visual storytelling</span>
          </h1>
          <span className="text-7xl font-thin me-20">]</span>
          <span className="text-2xl font-medium">INDONESIA</span>
        </div>
      </div>
    </section>
  )
}

export default Showcase
