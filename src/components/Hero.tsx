import { FaLocationArrow } from 'react-icons/fa6'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'
import { Meteors } from './ui/meteors'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center font-inter-sans">
      <div className='hidden md:block'>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#F29F05"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#F24405"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#F24405" />
      </div>

      <div
        className="h-screen w-full dark:bg-[#fde8a9] bg-white dark:bg-grid-white/20 bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#fde8a9]
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <section className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className='flex items-center justify-center gap-2'>
            <p className="uppercase tracking-widest text-xs text-center text-[#8C1C03] max-w-80">
              Bienvenido a <span className='text-[#F24405] font-bold'>Viking Devs</span>
            </p>
            <Image src="/logo-viking-devs.webp" alt="Viking Devs" width={35} height={35} />
          </div>

          <TextGenerateEffect
            words="Innovación web con la fuerza de un vikingo."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider my-3 text-sm md:text-lg lg:text-2xl text-[#8C1C03]">
            En <span className='text-[#F24405] font-bold'>Viking Devs</span>, creamos tecnología que impulsa tu éxito empresarial.
          </p>

          <Link href="#">
            <button className="flex justify-center w-60 mt-10 items-center gap-2 px-4 py-3 rounded-md border border-[#8C1C03] bg-[#F24405] text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Solicitar una reunión
              <FaLocationArrow />
            </button>
          </Link>
        </div>
      </section>
      <Meteors number={10} />
    </section>
  )
}

export default Hero
