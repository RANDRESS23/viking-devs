import { NAV_LINKS } from '@/constants/links'
import Link from 'next/link'
import Wrapper from './global/wrapper'
import { RiWhatsappFill } from 'react-icons/ri'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-16 bg-[#ffeebd]/80 backdrop-blur-xl z-50 border-b border-[#8C1C03]/20 font-inter-sans">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-viking-devs.webp" alt="Viking Devs" width={30} height={30} />
              <span className="text-3xl tracking-widest font-bold text-[#F24405] font-norse-sans">
                VIKING DEVS
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <li key={index} className="text-sm font-semibold -1 link text-[#8C1C03]">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="hidden lg:block">
              <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-md border border-[#8C1C03] bg-[#F24405] text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                Solicitar información
                <RiWhatsappFill />
              </button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}
