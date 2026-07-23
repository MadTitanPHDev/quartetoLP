import type { Member } from '../../data/content'
import FadeIn from './FadeIn'
import ResponsiveImage from './ResponsiveImage'

type MemberCardProps = {
  member: Member
  reversed?: boolean
}

export default function MemberCard({ member, reversed = false }: MemberCardProps) {
  return (
    <article
      id={member.id}
      className={`grid min-w-0 items-center gap-8 overflow-x-clip md:grid-cols-2 md:gap-12 ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <FadeIn variant={reversed ? 'right' : 'left'}>
        <figure className="group overflow-hidden rounded-2xl border border-brand-100 bg-brand-50 shadow-sm transition-shadow duration-300 hover:shadow-md">
          <ResponsiveImage
            src={member.image.src}
            alt={member.image.alt}
            width={480}
            height={600}
            sizes="(max-width: 768px) 100vw, 480px"
            className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>
      </FadeIn>

      <FadeIn variant={reversed ? 'left' : 'right'} delay={0.1}>
        <div>
          <h3 className="text-2xl font-bold text-brand-950">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-600">
            {member.role}
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">{member.bio}</p>
        </div>
      </FadeIn>
    </article>
  )
}
