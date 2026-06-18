import type { ReactNode } from 'react'
import FadeIn from './FadeIn'

type SectionProps = {
  id?: string
  title: string
  subtitle?: string
  children: ReactNode
  variant?: 'default' | 'muted' | 'dark'
  className?: string
}

const variantStyles = {
  default: 'bg-white',
  muted: 'bg-brand-50',
  dark: 'bg-brand-950 text-white',
} as const

export default function Section({
  id,
  title,
  subtitle,
  children,
  variant = 'default',
  className = '',
}: SectionProps) {
  const isDark = variant === 'dark'

  return (
    <section id={id} className={`py-16 sm:py-20 ${variantStyles[variant]} ${className}`}>
      <div className="section-container">
        <FadeIn>
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <h2
              className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                isDark ? 'text-white' : 'text-brand-950'
              }`}
            >
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-3 text-lg ${isDark ? 'text-brand-200' : 'text-slate-600'}`}>
                {subtitle}
              </p>
            )}
          </header>
        </FadeIn>
        {children}
      </div>
    </section>
  )
}
