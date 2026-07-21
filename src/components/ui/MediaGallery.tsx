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
  const lastItemSpansFull = items.length % 2 !== 0

  return (
    <Stagger className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
      {items.map((item, index) => {
        const isLastFullWidth = lastItemSpansFull && index === items.length - 1

        return (
          <StaggerItem
            key={item.src}
            className={isLastFullWidth ? 'md:col-span-2' : undefined}
          >
            <figure className="group overflow-hidden rounded-2xl">
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                  isLastFullWidth
                    ? 'aspect-[21/9] md:aspect-[2/1]'
                    : 'aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10]'
                }`}
                loading="lazy"
                width={1200}
                height={800}
              />
            </figure>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}
