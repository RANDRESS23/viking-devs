/* eslint-disable @typescript-eslint/no-redeclare */
'use client'

import { PLANS } from '@/constants/plans'
import { type PLAN } from '@/constants/plans'
import { cn } from '@/lib/utils'
import NumberFlow from '@number-flow/react'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import Container from './global/container'

type Plan = 'monthly' | 'annually'

export const Pricing = () => {
  const [billPlan, setBillPlan] = useState<Plan>('monthly') // eslint-disable-line

  return (
    <div className="relative flex flex-col items-center justify-center max-w-7xl py-20 mx-auto font-inter-sans" id='pricing'>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <Container>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mt-6 text-[#171717]">
              Encuentra el plan ideal para tus <span className="text-[#fb7d19] font-bold italic">proyectos digitales</span>
            </h2>
            <p className="text-base md:text-lg text-center mt-6 text-[#474747] italic">
              Diseñamos soluciones web que se adaptan a tus necesidades. Desde páginas de aterrizaje atractivas hasta sitios web dinámicos y funcionales.
            </p>
          </div>
        </Container>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-3 pt-8 lg:pt-12 gap-4 lg:gap-6 mx-auto">
        {PLANS.map((plan, idx) => (
          <Container key={idx} delay={0.1 * idx + 0.2}>
            <Plan key={plan.id} plan={plan} billPlan={billPlan} />
          </Container>
        ))}
      </div>
    </div>
  )
}

const Plan = ({ plan, billPlan }: { plan: PLAN, billPlan: Plan }) => {
  return (
    <div
      className={cn(
        'flex flex-col relative rounded-2xl lg:rounded-3xl transition-all bg-background/ items-start w-full border border-foreground/20 overflow-hidden',
        plan.title === 'Páginas Web' && 'border-[#fb7d19]'
      )}
    >
      {plan.title === 'Páginas Web' && (
        <div className="absolute top-1/2 inset-x-0 mx-auto h-10 md:h-16 -rotate-45 w-full bg-[#fb7d19] rounded-2xl lg:rounded-3xl blur-[8rem] z-10"></div>
      )}

      {plan.title === 'Páginas Web' && (
        <span className="absolute top-6 -right-11 text-xs py-1 px-12 text-white font-semibold rotate-45 bg-[#fb7d19] z-10">POPULAR</span>
      )}

      <div className="p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative">
        <h2 className="font-medium text-xl text-foreground pt-5">
          {plan.title}
        </h2>
        <h3 className="relative mt-3 text-3xl font-medium md:text-5xl">
          <NumberFlow
            value={
              billPlan === 'monthly' ? plan.monthlyPrice : plan.annuallyPrice
            }
            prefix='$ '
          />
          {plan.title === 'Sitios Web Dinámicos' && (
            <span className='absolute -bottom-3 md:-bottom-1 -right-12 -rotate-[15deg] px-3 py-1 rounded-md font-light text-xs bg-[#fb7d19] text-white'>Apartir de:</span>
          )}
        </h3>
        <p className={`text-sm md:text-base text-[#474747] ${plan.title === 'Sitios Web Dinámicos' ? 'mt-9 md:mt-7' : 'mt-3 md:mt-2'}`}>
          {plan.desc}
        </p>
      </div>
      <div className="flex flex-col items-start w-full p-5 mb-4 ml-1 gap-y-2 -mt-5 md:-mt-7">
        <span className="text-base text-left mb-2">Incluye:</span>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center">
              <CheckIcon className="size-5 text-[#fb7d19]" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
