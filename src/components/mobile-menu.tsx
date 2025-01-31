'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { NAV_LINKS } from '@/constants/links'
import Link from 'next/link'
import { IoMenu } from 'react-icons/io5'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'
import { IoLogoFacebook } from 'react-icons/io'
import { FaInstagram, FaTiktok } from 'react-icons/fa6'

const MobileMenu = () => {
  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <button className="lg:hidden">
          <div className='text-2xl'>
            <IoMenu className="text-[#171717]" />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[300px] pt-12 bg-[#ffffff] font-inter-sans">
        <div
          className="h-full w-full dark:bg-[#ffffff] bg-white dark:bg-grid-white/20 bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center -z-50"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#ffffff] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <SheetHeader className="mb-8">
          <SheetTitle className="text-left text-xl text-[#171717] font-bold">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {NAV_LINKS.map((link, index) => (
            <SheetPrimitive.Close key={index}>
              <div
                className="text-base text-left text-[#171717] font-medium transition-colors hover:text-[#fb7d19]"
                onClick={() => { router.push(link.href) }}
              >
                {link.name}
              </div>
            </SheetPrimitive.Close>
          ))}
          <div className="pt-4 mt-4 border-t border-[#171717]">
            <div className="flex items-center justify-center md:gap-4 gap-6 mb-5">
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
            <div className='w-full flex justify-center mt-2'>
              <a
                href="https://wa.me/+573228372899"
                target="_blank"
                rel="noopener noreferrer"
                className="group items-center justify-center bg-[#fb7d19] text-white p-3 rounded-lg transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg hover:shadow-xl w-full flex"
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
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
