import { Stagger, StaggerItem } from './Stagger'

type GalleryItem = {
  src: string
  alt: string
  caption?: string
}

type MediaGalleryProps = {
  items: readonly GalleryItem[]
}

export default function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StaggerItem key={item.src}>
          <figure className="group overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
            <img
              src={item.src}
              alt={item.alt}
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              width={640}
              height={360}
            />
            {item.caption && (
              <figcaption className="px-4 py-3 text-sm text-slate-600">{item.caption}</figcaption>
            )}
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
