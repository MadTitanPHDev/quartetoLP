export const easeOut = [0.22, 1, 0.36, 1] as const

export const transition = {
  default: { duration: 0.55, ease: easeOut },
  fast: { duration: 0.35, ease: easeOut },
  slow: { duration: 0.75, ease: easeOut },
} as const

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const viewport = { once: true, margin: '-60px' as const }
