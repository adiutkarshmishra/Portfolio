import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon, YoutubeIcon } from '@hugeicons/core-free-icons'
import { DetailShell } from '@/pages/DetailShell'
import type { ChannelRelease } from '@/data/portfolio'

export function ChannelPage({ release }: { release: ChannelRelease }) {
  return (
    <DetailShell accent="music">
      <span className="font-mono-label text-xs text-accent uppercase">{release.subtitle}</span>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{release.title}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A live-ish recreation of the channel, built from the real page. Everything below is clickable and opens the
        real video or channel on YouTube.
      </p>

      {/* Faux browser frame around a recreation of the channel page — every element below links out to the real YouTube page. */}
      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-[#0f0f0f]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#181818] px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <a
            href={release.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-label ml-3 flex-1 truncate rounded bg-black/30 px-3 py-1 text-[11px] text-white/50 hover:text-white/80"
          >
            youtube.com/@AdiutkarshMishra
          </a>
        </div>

        <a href={release.channelUrl} target="_blank" rel="noreferrer" className="block">
          <img src={release.banner} alt="" className="aspect-[6/1] w-full object-cover" />
        </a>

        <div className="flex flex-wrap items-center gap-4 px-6 py-5">
          <a href={release.channelUrl} target="_blank" rel="noreferrer">
            <img src={release.avatar} alt={release.title} className="size-20 rounded-full" />
          </a>
          <div className="flex-1">
            <a href={release.channelUrl} target="_blank" rel="noreferrer" className="text-xl font-medium text-white hover:underline">
              Adiutkarsh Mishra
            </a>
            <p className="font-mono-label mt-1 text-xs text-white/50 uppercase">
              @AdiutkarshMishra · {release.subscribers} · {release.videoCount}
            </p>
          </div>
          <a
            href={release.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            Subscribe
          </a>
        </div>

        <div className="border-t border-white/10 px-6 py-5">
          <h2 className="text-sm font-medium text-white/70">Releases</h2>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {release.featuredReleases.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-lg"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mt-1.5 truncate text-xs text-white/70 group-hover:text-white">{item.title}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-5">
          <h2 className="text-sm font-medium text-white/70">Videos</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {release.featuredVideos.map((video) => (
              <a
                key={video.title}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-lg"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute right-1 bottom-1 rounded bg-black/80 px-1 py-0.5 text-[10px] text-white">
                    {video.duration}
                  </span>
                </div>
                <p className="mt-1.5 truncate text-xs text-white/70 group-hover:text-white">{video.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href={release.channelUrl}
        target="_blank"
        rel="noreferrer"
        className="font-mono-label mt-4 inline-flex items-center gap-1.5 text-xs text-primary uppercase hover:underline"
      >
        <HugeiconsIcon icon={YoutubeIcon} size={14} />
        Open the real channel
        <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
      </a>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">My FL Studio Journey</h2>
        <div className="mt-4 space-y-4">
          {release.journey.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </DetailShell>
  )
}
