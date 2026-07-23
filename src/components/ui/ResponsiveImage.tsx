type ResponsiveImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'auto' | 'sync'
  /** Densidades opcionais para o mesmo arquivo (útil até haver variantes -w) */
  densities?: readonly number[]
}

/**
 * Imagem com sizes e srcSet declarativos para orientar o browser
 * a escolher a melhor largura de exibição em cada viewport.
 */
export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  densities = [1, 2],
}: ResponsiveImageProps) {
  const srcSet = densities.map((d) => `${src} ${Math.round(width * d)}w`).join(', ')

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={decoding}
    />
  )
}
