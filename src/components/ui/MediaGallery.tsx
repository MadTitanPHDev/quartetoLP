import { useState } from 'react'
import { Stagger, StaggerItem } from './Stagger'
import ResponsiveImage from './ResponsiveImage'
import Lightbox from './Lightbox'

type GalleryItem = {
  src: string
  alt: string
  caption?: string
}

type MediaGalleryProps = {
  items: readonly GalleryItem[]
}

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const lastItemSpansFull = items.length % 2 !== 0

  return (
    <>
      <Stagger className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
        {items.map((item, index) => {
          const isLastFullWidth = lastItemSpansFull && index === items.length - 1

          return (
            <StaggerItem
              key={item.src}
              className={isLastFullWidth ? 'md:col-span-2' : undefined}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group block w-full overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                aria-label={`Ampliar imagem: ${item.alt}`}
              >
                <figure className="overflow-hidden">
                  <ResponsiveImage
                    src={item.src}
                    alt={item.alt}
                    width={isLastFullWidth ? 1400 : 900}
                    height={isLastFullWidth ? 700 : 600}
                    sizes={
                      isLastFullWidth
                        ? '(max-width: 768px) 100vw, min(1280px, 100vw)'
                        : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px'
                    }
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                      isLastFullWidth
                        ? 'aspect-[21/9] md:aspect-[2/1]'
                        : 'aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10]'
                    }`}
                  />
                </figure>
              </button>
            </StaggerItem>
          )
        })}
      </Stagger>

      <Lightbox
        items={items}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </>
  )
}
