'use client';

import { works_data } from '@/lib/constants'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import GlareHover from '../GlareHover';

gsap.registerPlugin(ScrollTrigger);

const SelectedWorks = () => {

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const works = gsap.utils.toArray(".work-item");
    gsap.from(works, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="my-16 md:my-32 container-wrapper">
      <h2 className="text-center text-sm mb-8">SELECTED WORKS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {works_data.map((work) => (
          <div key={work.id} className="work-item">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <Image src={work.image} alt={work.title} height={720} width={480} className="h-full w-full object-cover" />
            </GlareHover>
            <div className="mt-2 text-xs">
              <p>{work.id} &nbsp; {work.title}</p>
              <p className="text-gray-500">{work.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="#" className="hover:underline text-sm">Explore projects...</Link>
      </div>
    </section>
  )
}

export default SelectedWorks