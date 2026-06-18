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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.src}
          className="overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
            width={640}
            height={360}
          />
          {item.caption && (
            <figcaption className="px-4 py-3 text-sm text-slate-600">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}
