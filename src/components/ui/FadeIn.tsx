import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeIn, fadeUp, scaleIn, slideFromLeft, slideFromRight, transition, viewport } from '../../lib/motion'

type FadeInProps = {
  children: ReactNode
  variant?: 'fade' | 'up' | 'left' | 'right' | 'scale'
  delay?: number
  className?: string
  /** Anima ao entrar na viewport (padrão) ou ao montar o componente */
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
  const shouldReduceMotion = useReducedMotion()
  const selectedVariant = variants[variant]

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={onMount ? 'visible' : undefined}
      whileInView={onMount ? undefined : 'visible'}
      viewport={onMount ? undefined : viewport}
      variants={selectedVariant}
      transition={{ ...transition.default, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
