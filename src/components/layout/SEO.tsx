import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/content'

type SEOProps = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article' | 'event'
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export default function SEO({
  title,
  description,
  path = '',
  image = '/images/logo4teto.svg',
  type = 'website',
  jsonLd,
}: SEOProps) {
  const canonicalUrl = `${siteConfig.url}${path}`
  const fullTitle = title === siteConfig.name ? `${siteConfig.fullName}` : `${title} | ${siteConfig.name}`
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.tagline,
    email: siteConfig.email,
  }

  const structuredData = jsonLd ?? defaultJsonLd

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={siteConfig.fullName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
