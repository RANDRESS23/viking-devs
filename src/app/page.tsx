import Hero from '@/components/Hero'

export default function Home () {
  return (
    <main className="relative bg-[#F2DC99] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <section className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        {/* <Grid /> */}
        {/* <RecentProjects /> */}
        {/* <Clients /> */}
        {/* <Experience /> */}
        {/* <Approach /> */}
        {/* <Footer /> */}
      </section>
    </main>
  )
}
