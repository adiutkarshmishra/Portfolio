import { Navigate, useParams } from 'react-router-dom'
import { musicReleases } from '@/data/portfolio'
import { SongPage } from '@/pages/SongPage'
import { BandPage } from '@/pages/BandPage'
import { ChannelPage } from '@/pages/ChannelPage'

export function MusicReleasePage() {
  const { slug } = useParams()
  const release = musicReleases.find((r) => r.slug === slug)

  if (!release) return <Navigate to="/" replace />

  if (release.kind === 'song') return <SongPage release={release} />
  if (release.kind === 'band') return <BandPage release={release} />
  return <ChannelPage release={release} />
}
