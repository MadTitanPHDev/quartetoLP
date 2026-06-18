import type { Member } from '../../data/content'

type MemberCardProps = {
  member: Member
  reversed?: boolean
}

export default function MemberCard({ member, reversed = false }: MemberCardProps) {
  return (
    <article
      id={member.id}
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <figure className="overflow-hidden rounded-2xl border border-brand-100 bg-brand-50 shadow-sm">
        <img
          src={member.image.src}
          alt={member.image.alt}
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
          width={480}
          height={600}
        />
      </figure>

      <div>
        <h3 className="text-2xl font-bold text-brand-950">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-600">
          {member.role}
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">{member.bio}</p>
      </div>
    </article>
  )
}
