import { Link } from 'react-router-dom'
import SEO from '../components/layout/SEO'
import Section from '../components/ui/Section'
import MemberCard from '../components/ui/MemberCard'
import FadeIn from '../components/ui/FadeIn'
import { Stagger, StaggerItem } from '../components/ui/Stagger'
import {
  aboutContent,
  eventPreview,
  members,
  siteConfig,
} from '../data/content'

export default function HomePage() {
  const description =
    'Conheça O Quarteto de Segurança e Saúde do Trabalho: especialistas em SST, história do grupo, integrantes e o Encontro de SST anual.'

  return (
    <>
      <SEO title={siteConfig.name} description={description} path="/" />

      {/* Hero — primeira impressão e proposta de valor */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-700 text-white"
      >
        <div className="section-container grid min-h-[70vh] items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <Stagger onMount>
            <StaggerItem>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-200">
                Segurança e Saúde do Trabalho
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-balance break-words text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {siteConfig.fullName}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 max-w-xl text-lg text-brand-100">{siteConfig.tagline}</p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#sobre"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50 hover:scale-105 active:scale-95"
                >
                  Conheça o Quarteto
                </a>
                <Link
                  to={eventPreview.ctaPath}
                  className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:scale-105 active:scale-95"
                >
                  {eventPreview.ctaLabel}
                </Link>
              </div>
            </StaggerItem>
          </Stagger>

          <FadeIn variant="scale" onMount delay={0.2}>
            <figure className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <img
                src="/images/final.webp"
                alt="O Quarteto de Segurança e Saúde do Trabalho"
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
              />
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Sobre — história e missão do grupo */}
      <Section id="sobre" title={aboutContent.title} subtitle={aboutContent.subtitle}>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn variant="left">
            <div className="space-y-4 text-slate-600">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn variant="right" delay={0.1}>
            <figure className="group overflow-hidden rounded-2xl border border-brand-100 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <img
                src={aboutContent.image.src}
                alt="Imagem ilustrativa da história do Quarteto"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={600}
              />
            </figure>
          </FadeIn>
        </div>
      </Section>

      {/* Integrantes — perfil objetivo de cada membro */}
      <Section
        id="integrantes"
        title="Integrantes"
        subtitle="Profissionais que compõem o Quarteto"
        variant="muted"
      >
        <div className="space-y-16 sm:space-y-20">
          {members.map((member, index) => (
            <MemberCard key={member.id} member={member} reversed={index % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* Encontro de SST — destaque do evento anual com link para página dedicada */}
      <Section
        id="encontro"
        title={eventPreview.title}
        subtitle={eventPreview.subtitle}
        variant="dark"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn variant="left">
            <figure className="group overflow-hidden rounded-2xl border border-brand-700 transition-shadow duration-300 hover:shadow-lg">
              <img
                src={eventPreview.image.src}
                alt={eventPreview.image.alt}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={450}
              />
            </figure>
          </FadeIn>

          <FadeIn variant="right" delay={0.1}>
            <div>
              <p className="leading-relaxed text-brand-100">{eventPreview.description}</p>
              <Link
                to={eventPreview.ctaPath}
                className="mt-8 inline-flex rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-600 hover:scale-105 active:scale-95"
              >
                {eventPreview.ctaLabel}
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
