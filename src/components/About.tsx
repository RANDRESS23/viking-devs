import Image from 'next/image'
import Container from './global/container'
import { Button } from './ui/MovingBorders'

export const workExperience = [
  {
    id: 1,
    title: '¿Quienes somos?',
    desc: 'Somos una empresa apasionada por la tecnología y el desarrollo digital, dedicada a empoderar a negocios y emprendedores locales a través de soluciones personalizadas que transformen sus ideas en realidades digitales. Nuestro objetivo es facilitar el acceso a herramientas tecnológicas mediante la creación de sitios web y software adaptados a las necesidades específicas de cada cliente, ayudándolos a conectar con nuevas oportunidades y a crecer de manera sostenible.',
    className: 'md:col-span-2',
    image: '/images/exp3.svg'
  },
  {
    id: 2,
    title: 'Misión',
    desc: 'Facilitar el acceso a la tecnología para negocios y emprendedores locales mediante el desarrollo de sitios web y software personalizados, que potencien sus operaciones y los conecten con nuevas oportunidades. Nos esforzamos por ofrecer soluciones accesibles y efectivas, entendiendo las necesidades de cada cliente para proporcionar productos que realmente marquen una diferencia en su crecimiento. Trabajamos con pasión, dedicación y un enfoque colaborativo, para convertir las ideas de nuestros clientes en realidades digitales que beneficien tanto a ellos como a nuestra comunidad local.',
    className: 'md:col-span-2',
    image: '/images/exp1.svg'
  },
  {
    id: 3,
    title: 'Visión',
    desc: 'Ser el aliado tecnológico de referencia para pequeños y medianos negocios en nuestra región, ofreciendo soluciones digitales personalizadas que impulsen su transformación y crecimiento. Buscamos convertirnos en un pilar esencial para emprendedores locales, ayudándolos a aprovechar las oportunidades del mundo digital con servicios accesibles, innovadores y adaptados a sus necesidades específicas. Aspiramos a construir relaciones sólidas y de confianza, destacándonos por nuestro compromiso con la calidad, la cercanía y el impacto positivo en la comunidad.',
    className: 'md:col-span-2',
    image: '/images/exp2.svg'
  }
]

export const About = () => {
  return (
    <div className="w-full py-20 font-inter-sans" id='about'>
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mt-6 text-[#171717]">
            Acerca de <span className="text-[#ff5500] font-bold italic">nosotros</span>
          </h2>
          <p className="text-base md:text-lg text-center mt-6 text-[#474747] italic">
            Nos dedicamos a crear experiencias personalizadas que impulsen el crecimiento y la conexión con nuevas oportunidades en el mundo digital.
          </p>
        </div>
      </Container>

      <div className="w-full max-w-5xl mx-auto mt-12 grid grid-cols-1 gap-10 md:gap-16">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: 'rgb(255, 255, 255)',
            backgroundColor:
              'linear-gradient(90deg, #f78e39 0%, #ff5500 100%)',
            borderRadius: 'calc(1.75rem* 0.96)'
          }}
          className="text-[#171717] border-foreground/20 cursor-default flex items-center justify-between px-7 py-11 gap-14"
        >
          {
            workExperience[0].title !== 'Misión' && (
              <div className='justify-center items-center w-[350px] hidden md:flex'>
                <Image
                  src={workExperience[0].image}
                  alt={workExperience[0].title}
                  width={50}
                  height={50}
                  className='w-full h-full'
                />
              </div>
            )
          }
          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="lg:ms-5">
              <h3 className="text-start text-xl md:text-2xl font-bold text-[#171717]">
                ¿Quienes <span className='text-[#ff5500]'>somos?</span>
              </h3>
              <p className="text-start text-[#474747] mt-3 leading-6 italic">
                Somos una empresa apasionada por la <span className='text-[#ff5500] font-semibold'>tecnología</span> y el <span className='text-[#ff5500] font-semibold'>desarrollo digital</span>, dedicada a <span className='text-[#ff5500] font-semibold'>empoderar</span> a <span className='text-[#ff5500] font-semibold'>negocios</span> y <span className='text-[#ff5500] font-semibold'>emprendedores locales</span> a través de <span className='text-[#ff5500] font-semibold'>soluciones personalizadas</span> que transformen sus ideas en realidades digitales. Nuestro objetivo es facilitar el acceso a herramientas tecnológicas mediante la creación de <span className='text-[#ff5500] font-semibold'>sitios web</span> y <span className='text-[#ff5500] font-semibold'>software adaptados</span> a las necesidades específicas de cada cliente, ayudándolos a conectar con nuevas oportunidades y a crecer de manera <span className='text-[#ff5500] font-semibold'>sostenible</span>.
              </p>
            </div>
          </div>
          {
            workExperience[0].title === 'Misión' && (
              <div className='justify-center items-center w-[350px] hidden md:flex'>
                <Image
                  src={workExperience[0].image}
                  alt={workExperience[0].title}
                  width={50}
                  height={50}
                  className='w-full h-full'
                />
              </div>
            )
          }
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: 'rgb(255, 255, 255)',
            backgroundColor:
              'linear-gradient(90deg, #f78e39 0%, #ff5500 100%)',
            borderRadius: 'calc(1.75rem* 0.96)'
          }}
          className="text-[#171717] border-foreground/20 cursor-default flex items-center justify-between px-7 py-11 gap-14"
        >
          {
            workExperience[1].title !== 'Misión' && (
              <div className='justify-center items-center w-[350px] hidden md:flex'>
                <Image
                  src={workExperience[1].image}
                  alt={workExperience[1].title}
                  width={50}
                  height={50}
                  className='w-full h-full'
                />
              </div>
            )
          }
          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="lg:ms-5">
              <h3 className="text-start text-xl md:text-2xl font-bold text-[#171717]">
                Nuestra <span className='text-[#ff5500]'>{workExperience[1].title}</span>
              </h3>
              <p className="text-start text-[#474747] mt-3 leading-6 italic">
              Facilitar el acceso a la <span className='text-[#ff5500] font-semibold'>tecnología</span> para <span className='text-[#ff5500] font-semibold'>negocios</span> y <span className='text-[#ff5500] font-semibold'>emprendedores locales</span> mediante el desarrollo de <span className='text-[#ff5500] font-semibold'>sitios web</span> y <span className='text-[#ff5500] font-semibold'>software personalizados</span>, que potencien sus operaciones y los conecten con nuevas oportunidades. Nos esforzamos por ofrecer soluciones <span className='text-[#ff5500] font-semibold'>accesibles</span> y <span className='text-[#ff5500] font-semibold'>efectivas</span>, entendiendo las necesidades de cada cliente para proporcionar productos que realmente marquen una diferencia en su crecimiento. Trabajamos con pasión, dedicación y un enfoque colaborativo, para convertir las ideas de nuestros clientes en <span className='text-[#ff5500] font-semibold'>realidades digitales</span> que beneficien tanto a ellos como a nuestra <span className='text-[#ff5500] font-semibold'>comunidad local</span>.
              </p>
            </div>
          </div>
          {
            workExperience[1].title === 'Misión' && (
              <div className='justify-center items-center w-[350px] hidden md:flex'>
                <Image
                  src={workExperience[1].image}
                  alt={workExperience[1].title}
                  width={50}
                  height={50}
                  className='w-full h-full'
                />
              </div>
            )
          }
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: 'rgb(255, 255, 255)',
            backgroundColor:
              'linear-gradient(90deg, #f78e39 0%, #ff5500 100%)',
            borderRadius: 'calc(1.75rem* 0.96)'
          }}
          className="text-[#171717] border-foreground/20 cursor-default flex items-center justify-between px-7 py-11 gap-14"
        >
          {
            workExperience[2].title !== 'Misión' && (
              <div className='justify-center items-center w-[350px] hidden md:flex'>
                <Image
                  src={workExperience[2].image}
                  alt={workExperience[2].title}
                  width={50}
                  height={50}
                  className='w-full h-full'
                />
              </div>
            )
          }
          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="lg:ms-5">
              <h3 className="text-start text-xl md:text-2xl font-bold text-[#171717]">
                Nuestra <span className='text-[#ff5500]'>{workExperience[2].title}</span>
              </h3>
              <p className="text-start text-[#474747] mt-3 leading-6 italic">
                Ser el <span className='text-[#ff5500] font-semibold'>aliado tecnológico</span> de referencia para <span className='text-[#ff5500] font-semibold'>pequeños</span> y <span className='text-[#ff5500] font-semibold'>medianos negocios</span> en nuestra región, ofreciendo soluciones digitales personalizadas que impulsen su transformación y crecimiento. Buscamos convertirnos en un <span className='text-[#ff5500] font-semibold'>pilar esencial</span> para <span className='text-[#ff5500] font-semibold'>emprendedores locales</span>, ayudándolos a aprovechar las oportunidades del mundo digital con servicios accesibles, innovadores y adaptados a sus <span className='text-[#ff5500] font-semibold'>necesidades específicas</span>. Aspiramos a construir relaciones sólidas y de confianza, destacándonos por nuestro compromiso con la calidad, la cercanía y el impacto positivo en la <span className='text-[#ff5500] font-semibold'>comunidad</span>.
              </p>
            </div>
          </div>
          {
            workExperience[2].title === 'Misión' && (
              <div className='justify-center items-center w-[350px] hidden md:flex'>
                <Image
                  src={workExperience[2].image}
                  alt={workExperience[2].title}
                  width={50}
                  height={50}
                  className='w-full h-full'
                />
              </div>
            )
          }
        </Button>
      </div>
    </div>
  )
}
