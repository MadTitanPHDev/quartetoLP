import { Link } from 'react-router-dom'
import SEO from '../components/layout/SEO'
import Section from '../components/ui/Section'
import MediaGallery from '../components/ui/MediaGallery'
import VideoSection from '../components/ui/VideoSection'
import { eventPageContent, siteConfig } from '../data/content'

export default function EncontroSSTPage() {
  const description =
    'Saiba mais sobre o Encontro de SST: propósito do evento, galeria de imagens, vídeos e informações organizadas pelo Quarteto.'

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: eventPageContent.title,
    description,
    organizer: {
      '@type': 'Organization',
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
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
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{eventPageContent.title}</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold sm:text-5xl">{eventPageContent.title}</h1>
          <p className="mt-4 text-lg text-brand-100">{eventPageContent.subtitle}</p>
        </div>
      </section>

      {/* Propósito — intuito da criação do evento */}
      <Section title={eventPageContent.purpose.title}>
        <div className="mx-auto max-w-3xl space-y-4 text-slate-600">
          {eventPageContent.purpose.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {eventPageContent.highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-brand-100 bg-brand-50 p-6"
            >
              <h3 className="font-semibold text-brand-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </li>
          ))}
        </ul>
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

      {/* Textos adicionais — inscrições, datas, patrocínios etc. */}
      <Section
        title={eventPageContent.additionalText.title}
        variant="muted"
      >
        <div className="mx-auto max-w-3xl space-y-4 text-slate-600">
          {eventPageContent.additionalText.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>
    </>
  )
}
