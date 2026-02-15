import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import SelectedWorks from '@/components/sections/SelectedWorks'
import Services from '@/components/sections/Services'
import Showcase from '@/components/sections/Showcase'
import Footer from '@/components/sections/Footer'

const servicesData = [
  {
    number: '01',
    title: 'Clarity',
    description: 'A distilled visual world that expresses your essence with clarity.',
    color: 'bg-gray-300', 
  },
  {
    number: '02',
    title: 'Poetics',
    description: 'A defined point of view that elevates your place in the luxury space.',
    color: 'bg-gray-400',
  },
  {
    number: '03',
    title: 'Artistry',
    description: 'Enduring beauty shaped through restraint, detail, and intention.',
    color: 'bg-gray-500',
  },
  {
    number: '04',
    title: 'Desire',
    description: 'Atmosphere and narrative crafted to create desire and connection.',
    color: 'bg-yellow-300',
  },
  {
    number: '05',
    title: 'Poise',
    description: 'A unified experience that carries your brand with quiet confidence.',
    color: 'bg-gray-200',
  },
]

export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <Hero />
      <Intro />
      <SelectedWorks />
      <div className="mt-16 md:mt-32 space-y-16">
        {servicesData.map((service) => (
          <Services
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            color={service.color}
          />
        ))}
      </div>
      <Showcase />
      <Footer />
    </div>
  )
}
