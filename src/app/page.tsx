import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
// import { Pricing } from '@/components/Pricing'
// import { CTA } from '@/components/Cta'

export default function Home () {
  return (
    <main className="relative bg-[#ffffff] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <section className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <Features />
        {/* <Pricing /> */}
        {/* <CTA /> */}

        {/* <Grid /> */}
        {/* <RecentProjects /> */}
        {/* <Clients /> */}
        {/* <Experience /> */}
        {/* <Approach /> */}
        <Footer />
      </section>
    </main>
  )
}
