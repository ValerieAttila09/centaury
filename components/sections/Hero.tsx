'use client';

import React from 'react'
import BlurText from '../widgets/BlurText'

const Hero = () => {
  return (
    <section className="my-16 md:my-26 container-wrapper">
      <div className="grid grid-cols-12">
        <div className="col-span-4"></div>
        <div className="col-span-8">
          <BlurText
            text={`Brands are more than identities, they are
atmospheres, narratives, and sensorial experiences.
My work turns vision into visual worlds that feel
timeless, editorial, and alive.`}
            delay={100}
            animateBy={"words"}
            direction={"top"}
            className="text-start text-3xl sm:text-4xl md:text-5xl leading-tight"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
