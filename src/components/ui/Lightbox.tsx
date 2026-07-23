import { useCallback, useEffect, useId, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import ResponsiveImage from './ResponsiveImage'

type LightboxItem = {
  src: string
  alt: string
}

type LightboxProps = {
  items: readonly LightboxItem[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

export default function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const titleId = useId()
  const shouldReduceMotion = useReducedMotion()
  const isOpen = index !== null
  const current = isOpen ? items[index] : null

  const showPrevious = useCallback(() => {
    if (index === null || items.length === 0) return
    onChange((index - 1 + items.length) % items.length)
  }, [index, items.length, onChange])

  const showNext = useCallback(() => {
    if (index === null || items.length === 0) return
    onChange((index + 1) % items.length)
  }, [index, items.length, onChange])

  useEffect(() => {
    if (!isOpen) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 0)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPrevious()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNext()
      }
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused.current?.focus()
    }
  }, [isOpen, onClose, showNext, showPrevious])

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-950/90 p-4 backdrop-blur-sm"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          onClick={onClose}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 text-white">
              <p id={titleId} className="min-w-0 flex-1 truncate text-sm sm:text-base">
                {current.alt}
              </p>
              <p className="shrink-0 text-sm text-brand-200" aria-live="polite">
                {index! + 1} / {items.length}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="rounded-lg bg-white/10 px-3 py-2 text-sm font-medium transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Fechar
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Imagem anterior"
                className="absolute left-0 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <motion.div
                key={current.src}
                className="max-h-[75vh] w-full overflow-hidden rounded-xl"
                initial={shouldReduceMotion ? false : { opacity: 0.4, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ResponsiveImage
                  src={current.src}
                  alt={current.alt}
                  width={1600}
                  height={1067}
                  sizes="(max-width: 1024px) 92vw, 960px"
                  className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
                  loading="eager"
                />
              </motion.div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Próxima imagem"
                className="absolute right-0 z-10 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
