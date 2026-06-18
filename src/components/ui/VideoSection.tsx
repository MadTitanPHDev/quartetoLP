type VideoItem = {
  title: string
  description: string
  embedUrl: string
  thumbnail: string
}

type VideoSectionProps = {
  videos: VideoItem[]
}

export default function VideoSection({ videos }: VideoSectionProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {videos.map((video) => (
        <article
          key={video.title}
          className="overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm"
        >
          {video.embedUrl ? (
            <div className="aspect-video">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="relative aspect-video bg-brand-100">
              <img
                src={video.thumbnail}
                alt={`Miniatura do vídeo: ${video.title}`}
                className="h-full w-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-brand-800 shadow">
                  Vídeo em breve
                </div>
              </div>
            </div>
          )}

          <div className="p-5">
            <h3 className="text-lg font-semibold text-brand-950">{video.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{video.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
