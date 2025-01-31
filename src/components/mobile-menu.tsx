'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { NAV_LINKS } from '@/constants/links'
import Link from 'next/link'
import { IoMenu } from 'react-icons/io5'
import { RiWhatsappFill } from 'react-icons/ri'

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <button className="lg:hidden">
          <div className='text-2xl'>
            <IoMenu className="text-[#8C1C03]" />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[300px] pt-12 bg-[#ffeebd] font-inter-sans">
        <div
          className="h-full w-full dark:bg-[#ffeebd] bg-white dark:bg-grid-white/20 bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center -z-50"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#ffeebd] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <SheetHeader className="mb-8">
          <SheetTitle className="text-left text-xl text-[#8C1C03] font-bold">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-base text-[#8C1C03] font-medium transition-colors hover:text-[#F24405]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-[#8C1C03]">
            <Link href="#" className="w-full">
              <button className="flex justify-center w-full items-center gap-2 px-4 py-2 rounded-md border border-[#8C1C03] bg-[#F24405] text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                Solicitar información
                <RiWhatsappFill />
              </button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
