import localFont from 'next/font/local'

export const norse = localFont({
  src: [
    {
      path: '../../public/fonts/Norse.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Norsebold.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-norse'
})
