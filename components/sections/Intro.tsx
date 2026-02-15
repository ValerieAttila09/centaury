
import React from 'react'

const Intro = () => {
  return (
    <section className="my-16 md:my-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="grid grid-cols-3 gap-4 md:w-2/3">
          <div className="w-full h-68 sm:h-80 flex flex-col items-start justify-start gap-2">
            <div className="">
              <span className="">[1]</span>
            </div>
            <div className="w-full h-full bg-gray-300"></div>
          </div>
          <div className="w-full h-68 sm:h-80 flex flex-col items-start justify-start gap-2">
            <div className="">
              <span className="">[2]</span>
            </div>
            <div className="w-full h-full bg-gray-400"></div>
          </div>
          <div className="w-full h-68 sm:h-80 flex flex-col items-start justify-start gap-2">
            <div className="">
              <span className="">[3]</span>
            </div>
            <div className="w-full h-full bg-gray-500"></div>
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
      <div className="mt-8 md:mt-16 md:max-w-7xl mx-auto block">
        <div className="">
          <p className="ms-24 text-2xl md:text-3xl leading-relaxed">
            I shape identities and guide art direction for ambitious clients seeking 
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed">
            timeless sophistication with a modern edge. Through editorial sensibility and narrative depth,
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed">
            my work turns vision into immersive experiences that resonate and endure.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
