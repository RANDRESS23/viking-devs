import Link from 'next/link'
import { FaInstagram, FaLocationArrow, FaTiktok } from 'react-icons/fa6'
import { IoLogoFacebook } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col pt-20 pb-10 font-inter-sans">
      <div className="w-full absolute left-0 bottom-0 h-[980px] md:h-[680px]">
        <img
          src="/images/footer-grid.svg"
          alt="grid"
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h2 className="heading lg:max-w-[45vw]">
          ¿Listo para llevar tu negocio al <span className='text-[#fb7d19] font-extrabold italic'>siguiente nivel</span> ?
        </h2>
        <p className="text-[#474747] md:mt-9 my-5 text-center italic">
          Contáctanos y conversemos sobre cómo podemos transformar tus ideas en soluciones digitales que impulsen tu éxito.
        </p>
        <button className="flex justify-center w-72 mt-5 items-center gap-2 px-4 py-3 rounded-md border border-[#171717] bg-[#fb7d19] text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 font-semibold text-sm">
          Agendar una reunión
          <div className='text-lg'>
            <FaLocationArrow />
          </div>
        </button>
      </div>
      <div className="flex mt-[85px] md:mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2025 <span className='font-norse-sans tracking-widest'>VIKING DEVS</span> | Derechos Reservados.
        </p>

        <div className="flex items-center md:gap-4 gap-6 mt-7 md:mt-0">
          <Link href='https://www.facebook.com/share/19ubPprnrv/?mibextid=wwXIfr' target='_blank' className='text-[#171717] hover:text-[#fb7d19] text-4xl transition-all duration-200'>
            <IoLogoFacebook />
          </Link>
          <Link href='https://www.instagram.com/vikingdevs?igsh=MTBtN2xxZDMwNzBiYQ==' target='_blank' className='text-[#171717] hover:text-[#fb7d19] text-3xl transition-all duration-200'>
            <FaInstagram />
          </Link>
          <Link href='http://www.tiktok.com/@VikingDevs0' target='_blank' className='text-[#171717] hover:text-[#fb7d19] text-[27px] transition-all duration-200'>
            <FaTiktok />
          </Link>
        </div>
      </div>
    </footer>
  )
}
