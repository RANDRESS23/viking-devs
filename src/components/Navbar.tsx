import { NAV_LINKS } from '@/constants/links'
import Link from 'next/link'
import Wrapper from './global/wrapper'
import { RiWhatsappFill } from 'react-icons/ri'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-16 bg-[#ffffff]/80 backdrop-blur-xl z-50 border-b border-[#171717]/20 font-inter-sans">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-viking-devs.webp" alt="Viking Devs" width={30} height={30} />
              <span className="text-3xl tracking-widest font-bold text-[#fb7d19] font-norse-sans">
                VIKING DEVS
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <li key={index} className="text-sm font-semibold -1 link text-[#171717]">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-12 md:w-48">
            <a
              href="https://wa.me/message/JE3JHGELREIUP1"
              target="_blank"
              rel="noopener noreferrer"
              className="group items-center justify-center bg-[#fb7d19] text-white p-2 rounded-lg transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg hover:shadow-xl hidden lg:flex"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-20 transform -skew-x-12"></div>
                <RiWhatsappFill size={24} className="relative z-10" />
              </div>
              <span className="ml-2 font-medium text-sm group-hover:tracking-wider transition-all duration-300">
                Chatear
              </span>
              <div className="absolute top-0 right-0 h-2 w-2 bg-white rounded-full transform translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 h-2 w-2 bg-white rounded-full transform -translate-x-1 translate-y-1"></div>
            </a>
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}
