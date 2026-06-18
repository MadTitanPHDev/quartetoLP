import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, siteConfig } from '../../data/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleNavClick = () => setMenuOpen(false)

  const resolveHref = (href: string) => {
    if (href.startsWith('/#') && !isHome) {
      return `/${href.slice(1)}`
    }
    return href
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur-sm">
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="group flex flex-col leading-tight"
          aria-label={`${siteConfig.fullName} — página inicial`}
          onClick={handleNavClick}
        >
          <span className="text-lg font-bold text-brand-950 group-hover:text-brand-700">
            {siteConfig.name}
          </span>
          <span className="hidden text-xs text-slate-500 sm:block">
            Saúde e Segurança do Trabalho
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={resolveHref(item.href)}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
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
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-brand-200 p-2 text-brand-800 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-brand-100 bg-white md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="section-container flex flex-col gap-1 py-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={resolveHref(item.href)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50"
                  onClick={handleNavClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
