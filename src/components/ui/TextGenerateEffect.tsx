'use client'

import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
  words,
  className
}: {
  words: string
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1
      },
      {
        duration: 2,
        delay: stagger(0.2)
      }
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` ${idx > 3 ? 'text-[#fb7d19] font-extrabold italic' : 'dark:text-[#171717] text-black'
                } opacity-0`}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-none tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
