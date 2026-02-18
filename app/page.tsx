import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import SelectedWorks from '@/components/sections/SelectedWorks'
import Services from '@/components/sections/Services'
import Showcase from '@/components/sections/Showcase'
import Footer from '@/components/sections/Footer'
import { services_data } from '@/lib/constants'

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Intro />
      <SelectedWorks />
      <div className="mt-16 md:mt-32 space-y-16">
        {services_data.map((service) => (
          <Services
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            color={service.color}
            image={service.image}
          />
        ))}
      </div>
      <Showcase />
      <Footer />
    </div>
  )
}
