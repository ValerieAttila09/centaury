'use client';

import Image from "next/image";
import SplitText from "../widgets/SplitText";
import React from 'react'
import IntroImage1 from "../../assets/images/pascal-m-4PchFKrUw84-unsplash.jpg"
import IntroImage2 from "../../assets/images/kate-laine-KvX6DQsOKrc-unsplash.jpg"
import IntroImage3 from "../../assets/images/courtney-smith-AihDkhGvnO8-unsplash.jpg"

const Intro = () => {
  return (
    <section className="my-16 md:my-32 container-wrapper">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="grid grid-cols-3 gap-4 md:w-2/3">
          <div className="w-full h-68 sm:h-80 md:h-92 flex flex-col items-start justify-start gap-2">
            <div className="">
              <span className="">[1]</span>
            </div>
            <div className="w-full h-full relative overflow-hidden bg-gray-300">
              <Image src={IntroImage1} alt={"Image 1"} height={720} width={480} className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="w-full h-68 sm:h-80 md:h-92 flex flex-col items-start justify-start gap-2">
            <div className="">
              <span className="">[2]</span>
            </div>
            <div className="w-full h-full relative overflow-hidden bg-gray-400">
              <Image src={IntroImage2} alt={"Image 2"} height={720} width={480} className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="w-full h-68 sm:h-80 md:h-92 flex flex-col items-start justify-start gap-2">
            <div className="">
              <span className="">[3]</span>
            </div>
            <div className="w-full h-full relative overflow-hidden bg-gray-500">
              <Image src={IntroImage3} alt={"Image 3"} height={720} width={480} className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex items-end justify-end">
          <div className="text-sm">
            <p>Visual Identity</p>
            <p>Art and Scenography</p>
            <p>Packaging</p>
            <p>Photography</p>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-16 py-12 md:max-w-7xl mx-auto block">
        <div className="">
          <p className="">

          </p>
          <SplitText
            text={`I shape identities and guide art direction for ambitious clients seeking 
timeless sophistication with a modern edge. Through editorial sensibility and narrative depth,
my work turns vision into immersive experiences that resonate and endure.`}
            className="text-start text-2xl md:text-3xl leading-relaxed"
            delay={25}
            duration={1}
            textAlign={"start"}
            ease="power2.out"
            splitType={"words"}
            from={{ opacity: 0, y: 40, scale: 0.7 }}
            to={{ opacity: 1, y: 0, scale: 1 }}
            threshold={0.1}
            rootMargin="-100px"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro
