import { Link } from 'react-router-dom'
import { navigation, siteConfig } from '../../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-100 bg-brand-950 text-brand-100">
      <div className="section-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.fullName}</p>
          <p className="mt-2 text-sm text-brand-200">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-300">
            Navegação
          </p>
          <ul className="space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href.startsWith('/#') ? `/${item.href.slice(1)}` : item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-300">
            Contato
          </p>
          <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-white">
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <p className="section-container py-4 text-center text-xs text-brand-300">
          © {currentYear} {siteConfig.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
