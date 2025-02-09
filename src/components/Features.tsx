import { FEATURES } from '@/constants/features'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Container from './global/container'
import { MagicCard } from './ui/magic-card'

export const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 font-inter-sans" id='features'>
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mt-6 text-[#171717]">
            Impulsamos tu negocio con{' '}
            <span className="text-[#ff5500] font-bold italic">tecnología de vanguardia</span>
          </h2>
          <p className="text-base md:text-lg text-center mt-6 text-[#474747] italic">
            Transformamos tus ideas en soluciones digitales que generan impacto.
          </p>
        </div>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible p-2">
        {FEATURES.map((feature, index) => (
          <Container
            key={feature.title}
            delay={0.1 + index * 0.1}
            className={cn(
              'relative flex flex-col rounded-2xl lg:rounded-3xl bg-[#ff5500] transition-colors',
              index === 3 && 'lg:col-span-2',
              index === 2 && 'md:col-span-2 lg:col-span-1'
            )}
          >
            <MagicCard
              gradientFrom="#ff5500"
              gradientTo="#e77213"
              className="p-4 lg:p-6 lg:rounded-3xl"
              gradientColor="#fb7f1978"
            >
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-[#171717]">
                  <feature.icon className="size-5 text-[#ff5500]" />
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-[#474747]">
                {feature.description}
              </p>

              <div className="mt-6 w-full bg-[#ffffff]/50 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </MagicCard>
          </Container>
        ))}
      </div>
    </div>
  )
}
