import ImageWork1 from "../../assets/images/adrianna-geo-1rBg5YSi00c-unsplash.jpg";
import ImageWork2 from "../../assets/images/boston-public-library-SvGzLn7y_sw-unsplash.jpg";
import ImageWork3 from "../../assets/images/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg";
import ImageWork4 from "../../assets/images/europeana--kUYkiWWM6E-unsplash.jpg";
import ImageWork5 from "../../assets/images/europeana-Agwv1mKDUnc-unsplash.jpg";
import ImageWork6 from "../../assets/images/europeana-TjegK_z-0j8-unsplash.jpg";
import ImageWork7 from "../../assets/images/europeana-HhMt_nUAIEc-unsplash.jpg";
import ImageWork8 from "../../assets/images/federico-di-dio-photography-2jZs2_Dsghg-unsplash.jpg";
import ImageWork9 from "../../assets/images/lachlan-gowen-RZ5TKFpdaWM-unsplash.jpg";
import ImageWork10 from "../../assets/images/luke-stackpoole-FA8HEWO9Vd8-unsplash.jpg";
import services_data_image1 from "../../assets/images/steve-johnson-eVaxJVA2zHI-unsplash.jpg"
import services_data_image2 from "../../assets/images/steve-johnson-5MTf9XyVVgM-unsplash.jpg"
import services_data_image3 from "../../assets/images/sijmen-van-hooff-E0yS34zGQRY-unsplash.jpg"
import services_data_image4 from "../../assets/images/birmingham-museums-trust-HEEvYhNzpEo-unsplash.jpg"
import services_data_image5 from "../../assets/images/daniele-levis-pelusi-l0iFviUyJg8-unsplash.jpg"

const works_data = [
    { id: '01', title: 'Saison', category: 'Brand Identity', color: 'bg-red-200', image: ImageWork1 },
    { id: '02', title: 'Ben&An', category: 'Brand Scenography', color: 'bg-yellow-200', image: ImageWork2 },
    { id: '03', title: 'OF.G', category: 'Visual Identity', color: 'bg-gray-300', image: ImageWork3 },
    { id: '04', title: 'Auguste & Claire', category: 'Visual Identity', color: 'bg-red-300', image: ImageWork4 },
    { id: '05', title: 'OF.G', category: 'Photography', color: 'bg-green-200', image: ImageWork5 },
    { id: '06', title: 'Auguste & Claire', category: 'Brand Scenography', color: 'bg-purple-200', image: ImageWork6 },
    { id: '07', title: 'Saison', category: 'Brand Identity', color: 'bg-blue-200', image: ImageWork7 },
    { id: '08', title: 'Ben&An', category: 'Photography', color: 'bg-gray-400', image: ImageWork8 },
    { id: '09', title: 'Saison', category: 'Visual Identity', color: 'bg-gray-500', image: ImageWork9 },
    { id: '10', title: 'Ben&An', category: 'Photography', color: 'bg-gray-300', image: ImageWork10 },
]

const services_data = [
    {
      number: '01',
      title: 'Clarity',
      description: 'A distilled visual world that expresses your essence with clarity.',
      color: 'bg-gray-300',
      image: services_data_image1 
    },
    {
      number: '02',
      title: 'Poetics',
      description: 'A defined point of view that elevates your place in the luxury space.',
      color: 'bg-gray-400',
      image: services_data_image2
    },
    {
      number: '03',
      title: 'Artistry',
      description: 'Enduring beauty shaped through restraint, detail, and intention.',
      color: 'bg-gray-500',
      image: services_data_image3
    },
    {
      number: '04',
      title: 'Desire',
      description: 'Atmosphere and narrative crafted to create desire and connection.',
      color: 'bg-yellow-300',
      image: services_data_image4
    },
    {
      number: '05',
      title: 'Poise',
      description: 'A unified experience that carries your brand with quiet confidence.',
      color: 'bg-gray-200',
      image: services_data_image5
    },
  ]
  

export { works_data, services_data };