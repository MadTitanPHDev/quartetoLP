import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from '../../data/content'

const TIP_VISIBLE_MS = 5000
const TIP_INTERVAL_MS = 28000
const TIP_FIRST_DELAY_MS = 4000

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  )
}

export default function InstagramFloatButton() {
  const [showTip, setShowTip] = useState(false)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined

    const revealTip = () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
      setShowTip(true)
      hideTimeoutRef.current = setTimeout(() => setShowTip(false), TIP_VISIBLE_MS)
    }

    const firstTimeout = setTimeout(() => {
      revealTip()
      intervalId = setInterval(revealTip, TIP_INTERVAL_MS)
    }, TIP_FIRST_DELAY_MS)

    return () => {
      clearTimeout(firstTimeout)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showTip && (
          <motion.div
            role="status"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto relative mr-1 max-w-[16rem] rounded-2xl bg-white px-4 py-3 text-sm text-brand-950 shadow-lg ring-1 ring-brand-100"
          >
            <p className="font-semibold">Siga o Quarteto no Instagram</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              Acompanhe novidades, conteúdos de SST e o Encontro de SST em{' '}
              <span className="font-medium text-brand-700">{siteConfig.instagram.handle}</span>
            </p>
            <span
              className="absolute bottom-[-6px] right-6 h-3 w-3 rotate-45 border-b border-r border-brand-100 bg-white"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={siteConfig.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Siga o Quarteto no Instagram ${siteConfig.instagram.handle}`}
        className="pointer-events-auto relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition hover:scale-105 hover:bg-brand-600 active:scale-95"
      >
        <InstagramIcon className="h-7 w-7" />
        <span className="absolute right-1 top-1 flex h-3 w-3">
          {showTip && !shouldReduceMotion && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
          )}
          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-500" />
        </span>
      </a>
    </div>
  )
}

export { InstagramIcon }
