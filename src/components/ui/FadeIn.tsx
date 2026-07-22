import { useRef } from 'react'
import { motion, useInView, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeIn, fadeUp, scaleIn, slideFromLeft, slideFromRight, transition } from '../../lib/motion'

type FadeInProps = {
  children: ReactNode
  variant?: 'fade' | 'up' | 'left' | 'right' | 'scale'
  delay?: number
  className?: string
  /** Anima imediatamente ao montar, sem esperar scroll */
  onMount?: boolean
} & Omit<HTMLMotionProps<'div'>, 'children'>

const variants = {
  fade: fadeIn,
  up: fadeUp,
  left: slideFromLeft,
  right: slideFromRight,
  scale: scaleIn,
} as const

export default function FadeIn({
  children,
  variant = 'up',
  delay = 0,
  className,
  onMount = false,
  ...props
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const shouldReduceMotion = useReducedMotion()
  const selectedVariant = variants[variant]
  const isVisible = onMount || isInView

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={['min-w-0 max-w-full', className].filter(Boolean).join(' ')}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={selectedVariant}
      transition={{ ...transition.default, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
