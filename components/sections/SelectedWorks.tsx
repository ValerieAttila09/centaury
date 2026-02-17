
import React from 'react'

const works = [
  { id: '01', title: 'Saison', category: 'Brand Identity', color: 'bg-red-200' },
  { id: '02', title: 'Ben&An', category: 'Brand Scenography', color: 'bg-yellow-200' },
  { id: '03', title: 'OF.G', category: 'Visual Identity', color: 'bg-gray-300' },
  { id: '04', title: 'Auguste & Claire', category: 'Visual Identity', color: 'bg-red-300' },
  { id: '05', title: 'OF.G', category: 'Photography', color: 'bg-green-200' },
  { id: '06', title: 'Auguste & Claire', category: 'Brand Scenography', color: 'bg-purple-200' },
  { id: '07', title: 'Saison', category: 'Brand Identity', color: 'bg-blue-200' },
  { id: '08', title: 'Ben&An', category: 'Photography', color: 'bg-gray-400' },
  { id: '09', title: 'Saison', category: 'Visual Identity', color: 'bg-gray-500' },
  { id: '10', title: 'Ben&An', category: 'Photography', color: 'bg-gray-300' },
]

const SelectedWorks = () => {
  return (
    <section className="my-16 md:my-32 container-wrapper">
      <h2 className="text-center text-sm mb-8">SELECTED WORKS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {works.map((work) => (
          <div key={work.id}>
            <div className={`w-full h-56 md:h-80 ${work.color}`}></div>
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
