import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { staggerContainer, transition, viewport } from '../../lib/motion'

type StaggerProps = {
  children: ReactNode
  className?: string
  onMount?: boolean
}

export function Stagger({ children, className, onMount = false }: StaggerProps) {
  const shouldReduceMotion = useReducedMotion()

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
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: transition.default },
      }}
    >
      {children}
    </motion.div>
  )
}
