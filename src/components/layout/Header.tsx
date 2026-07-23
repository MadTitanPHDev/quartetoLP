import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, siteConfig } from '../../data/content'
import { fadeDown, transition } from '../../lib/motion'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const shouldReduceMotion = useReducedMotion()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }

      if (event.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
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
    const firstLink = menuRef.current?.querySelector<HTMLElement>('a[href]')
    firstLink?.focus()

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  const resolveHref = (href: string) => {
    if (href.startsWith('/#') && !isHome) {
      return `/${href.slice(1)}`
    }
    return href
  }

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur-sm"
      initial={false}
      animate={{
        boxShadow: scrolled ? '0 4px 24px rgba(4, 61, 24, 0.08)' : '0 0px 0px rgba(0,0,0,0)',
      }}
      transition={shouldReduceMotion ? { duration: 0 } : transition.fast}
    >
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:gap-3"
          aria-label={`${siteConfig.fullName} — página inicial`}
          onClick={handleNavClick}
        >
          <img
            src={siteConfig.logo}
            alt=""
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
            width={44}
            height={44}
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-lg font-bold text-brand-950 transition-colors group-hover:text-brand-700">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-slate-500 sm:block">
              Segurança e Saúde do Trabalho
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={resolveHref(item.href)}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
                  isActive && item.href === '/encontro-sst'
                    ? 'bg-brand-50 text-brand-800'
                    : 'text-slate-600 hover:bg-brand-50 hover:text-brand-800',
                ].join(' ')
              }
              onClick={handleNavClick}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-brand-200 p-2 text-brand-800 transition hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={menuRef}
            id={menuId}
            className="overflow-hidden border-t border-brand-100 bg-white md:hidden"
            aria-label="Navegação mobile"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            exit="hidden"
            variants={fadeDown}
            transition={transition.fast}
          >
            <ul className="section-container flex flex-col gap-1 py-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={resolveHref(item.href)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
