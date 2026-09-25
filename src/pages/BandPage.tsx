import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowUpRight01Icon,
  Calendar03Icon,
  Clock01Icon,
  Location01Icon,
  InstagramIcon,
  SpotifyIcon,
  MusicNote01Icon,
  SoundcloudIcon,
} from '@hugeicons/core-free-icons'
import { DetailShell } from '@/pages/DetailShell'
import { BorderTrail } from '@/components/motion-primitives/border-trail'
import type { BandRelease } from '@/data/portfolio'
import { withBase } from '@/lib/utils'

const MEMBER_ICONS: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  Spotify: SpotifyIcon,
  'YouTube Music': MusicNote01Icon,
  SoundCloud: SoundcloudIcon,
}

function toYouTubeEmbedUrl(url: string) {
  const id = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]+)/)?.[1] ?? ''
  return `https://www.youtube.com/embed/${id}`
}

export function BandPage({ release }: { release: BandRelease }) {
  const { nextPerformance, pastPerformances } = release

  return (
    <DetailShell accent="music" cyclingLogoSrc={withBase('/images/5to9-logo-circle-blue.png')} headerTitle="5 to 9">
      <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-[17.5rem_1fr] sm:gap-10">
        <div className="relative overflow-hidden rounded-xl border border-border">
          <BorderTrail className="bg-accent/70" size={100} />
          <img src={release.cover} alt={release.title} className="aspect-[3/4] w-full object-cover" />
        </div>

        <div>
          <h1 className="sr-only">{release.title}</h1>
          <span className="font-mono-label text-xs text-accent uppercase">{release.subtitle}</span>
          <img
            src={withBase('/images/5to9-logo-circle.png')}
            alt=""
            className="mt-2 size-20 rounded-full border border-border sm:size-24"
          />
          <div className="mt-4 space-y-4">
            {release.description.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {release.members && release.members.length > 0 && (
        <div className="mt-6">
          <span className="font-mono-label text-xs text-accent uppercase">Band Members</span>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {release.members.map((member) => (
              <div key={member.name} className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-foreground">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                {member.links && member.links.length > 0 && (
                  <div className="flex shrink-0 items-center gap-2.5">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on ${link.label}`}
                        className="text-muted-foreground transition-colors hover:text-accent"
                      >
                        <HugeiconsIcon icon={MEMBER_ICONS[link.label] ?? InstagramIcon} size={24} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Performances</h2>

        {nextPerformance && (
          <div className="mt-6">
            <span className="font-mono-label text-xs text-accent uppercase">Next Performance</span>
            <div className="mt-3 flex flex-col gap-3 rounded-xl border border-accent/30 bg-accent/5 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <HugeiconsIcon icon={Calendar03Icon} size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-bold text-foreground">{nextPerformance.title}</h3>

                  {nextPerformance.mapsUrl ? (
                    <a
                      href={nextPerformance.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent hover:underline"
                    >
                      <HugeiconsIcon icon={Location01Icon} size={14} className="shrink-0" />
                      {nextPerformance.venue}
                      {nextPerformance.location ? ` · ${nextPerformance.location}` : ''}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {nextPerformance.venue}
                      {nextPerformance.location ? ` · ${nextPerformance.location}` : ''}
                    </p>
                  )}

                  {nextPerformance.time && (
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <HugeiconsIcon icon={Clock01Icon} size={14} className="shrink-0" />
                      {nextPerformance.time}
                    </p>
                  )}

                  {nextPerformance.note && <p className="mt-1 text-sm text-muted-foreground">{nextPerformance.note}</p>}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-4 pl-9 sm:pl-0">
                <span className="font-mono-label text-xs text-accent uppercase">{nextPerformance.date}</span>
                {nextPerformance.ticketUrl && (
                  <a
                    href={nextPerformance.ticketUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-label inline-flex items-center gap-1.5 text-xs text-primary uppercase hover:underline"
                  >
                    Tickets
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-10">
          <span className="font-mono-label text-xs text-muted-foreground uppercase">Past Performances</span>
          {pastPerformances && pastPerformances.length > 0 ? (
            <div className="mt-3 space-y-8">
              {pastPerformances.map((show) => (
                <div key={`${show.title}-${show.date}`} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
                  <div>
                    <h3 className="font-medium text-foreground">{show.date}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {show.venue}
                      {show.location ? ` · ${show.location}` : ''}
                    </p>
                    {show.guestArtists && show.guestArtists.length > 0 && (
                      <p className="mt-1 text-sm text-muted-foreground">With {show.guestArtists.join(', ')}</p>
                    )}
                  </div>

                  {((show.photos && show.photos.length > 0) || (show.videoUrls && show.videoUrls.length > 0)) && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {show.photos?.map((photo) => (
                        <div key={photo} className="overflow-hidden rounded-xl border border-border">
                          <div className="aspect-video">
                            <img
                              src={photo}
                              alt={`${show.title} at ${show.venue}`}
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                      {show.videoUrls?.map((url) => (
                        <div key={url} className="overflow-hidden rounded-xl border border-border bg-black">
                          <div className="aspect-video">
                            <iframe
                              src={toYouTubeEmbedUrl(url)}
                              title={`${show.title} clip`}
                              className="size-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">No past shows yet — check back after the first one.</p>
          )}
        </div>
      </div>
    </DetailShell>
  )
}
