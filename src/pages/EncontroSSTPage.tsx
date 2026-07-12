import { Link } from 'react-router-dom'
import SEO from '../components/layout/SEO'
import Section from '../components/ui/Section'
import MediaGallery from '../components/ui/MediaGallery'
import VideoSection from '../components/ui/VideoSection'
import FadeIn from '../components/ui/FadeIn'
import { Stagger, StaggerItem } from '../components/ui/Stagger'
import { eventPageContent, siteConfig } from '../data/content'

export default function EncontroSSTPage() {
  const description =
    '7º Encontro de SST em Presidente Prudente (SP), em 25/07/2026. Conheça o evento organizado pelo Quarteto de Saúde e Segurança do Trabalho.'

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: eventPageContent.title,
    description,
    startDate: '2026-07-25',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Salão de festas Limoeiro — UNOESTE Campus II',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rodovia Raposo Tavares, Km 572, bairro Limoeiro',
        postalCode: '19067-175',
        addressLocality: 'Presidente Prudente',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  }

  return (
    <>
      <SEO
        title={eventPageContent.title}
        description={description}
        path="/encontro-sst"
        image="/images/event-preview.svg"
        type="event"
        jsonLd={eventJsonLd}
      />

      {/* Cabeçalho da página do evento */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-16 text-white sm:py-20">
        <div className="section-container max-w-3xl">
          <Stagger onMount>
            <StaggerItem>
              <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-200">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link to="/" className="transition hover:text-white">
                      Início
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-white">{eventPageContent.title}</li>
                </ol>
              </nav>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl font-bold sm:text-5xl">{eventPageContent.title}</h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 text-lg text-brand-100">{eventPageContent.subtitle}</p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Sobre o evento */}
      <Section title={eventPageContent.purpose.title}>
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-4 text-slate-600">
            {eventPageContent.purpose.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {eventPageContent.highlights.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-xl border border-brand-100 bg-brand-50 p-6 transition-shadow duration-300 hover:shadow-md">
                <h3 className="font-semibold text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Galeria — espaço para fotos das edições */}
      <Section
        title="Galeria"
        subtitle="Imagens das edições do Encontro de SST"
        variant="muted"
      >
        <MediaGallery items={eventPageContent.gallery} />
      </Section>

      {/* Vídeos — embeds ou placeholders */}
      <Section title="Vídeos" subtitle="Conteúdos em vídeo sobre o evento">
        <VideoSection videos={[...eventPageContent.videos]} />
      </Section>

      {/* Informações adicionais — data, local e inscrições */}
      <Section title={eventPageContent.additionalText.title} variant="muted">
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 text-slate-600">
            {eventPageContent.additionalText.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <dl className="grid gap-4 rounded-xl border border-brand-100 bg-white p-6 sm:grid-cols-2">
              {eventPageContent.additionalText.details.map((item) => (
                <div key={item.label} className={item.label === 'Endereço' ? 'sm:col-span-2' : ''}>
                  <dt className="text-sm font-semibold text-brand-800">{item.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>

            <p>
              <a
                href={eventPageContent.additionalText.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 hover:scale-105 active:scale-95"
              >
                {eventPageContent.additionalText.registration.label}
              </a>
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
