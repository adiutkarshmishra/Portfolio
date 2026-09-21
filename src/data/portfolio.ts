// Edit this file with your real info. Nothing else needs to change.

export const profile = {
  name: 'Adiutkarsh Mishra',
  roles: ['Mechanical Engineer', 'Music Producer', 'Composer'],
  tagline:
    'I design mechanisms by day and build tracks by night. Same brain, different tolerances.',
  location: 'Remote',
  email: 'contact@adiutkarsh.com',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { label: 'Years in engineering', value: 3, suffix: '+' },
  { label: 'Automobile Projects released', value: 3, suffix: '+' },
  { label: 'Tracks released', value: 25, suffix: '+' },
  { label: 'Plays across platforms', value: 35, suffix: 'K+' },
]

// --- Day Job: the mechanical engineering work ---

export const dayJob = {
  summary:
    'I design, simulate, and validate mechanical systems — from concept sketch to a part that survives production tolerances.',
  tools: [
    'Catia V5 Modeling',    
    'Catia V5 CAE',
    'Abaqus',
    'SolidWorks',
    'FEA',
    'FMEA',
    'CNC Programming',
  ],
  roles: [
    {
      company: 'Daihatsu Motor Co., Ltd.',
      title: 'Chassis & Aluminium Extrusion Parts Design — BEV',
      period: 'Apr 2026 — Present',
      description:
        'Design chassis components and energy-absorbing structures for a new BEV program — clearance calculations and CAE analysis alongside suppliers.',
    },
    {
      company: 'Daihatsu Motor Co., Ltd.',
      title: 'Sheet Metal Parts Design — HEV',
      period: 'May 2024 — Mar 2026',
      description:
        'Designed battery pack mounting structures and surrounding sheet-metal/plastic parts in CATIA V5, iterating with suppliers from prototype through mass-production validation.',
    },
    {
      company: 'Daihatsu Motor Co., Ltd.',
      title: 'HVAC Piping Design',
      period: 'Dec 2023 — Apr 2024',
      description:
        'Designed and optimized vehicle A/C piping layouts, calculating routing and clearance constraints in a compact engine bay.',
    },
    {
      company: 'Persol Cross Technology',
      title: 'Mechanical Engineer — New Graduate Training',
      period: 'Apr 2023 — Nov 2023',
      description: 'Trained in CATIA V5 solid/surface modeling and core mechanical design fundamentals.',
    },
  ],
  highlights: [
    {
      title: 'Battery Pack Mounting Structure',
      description: 'Designed HEV battery pack mounting structures in CATIA V5, running CAE analysis to validate strength and durability across the layout.',
      tag: 'CAD / FEA',
    },
    {
      title: 'BEV Energy-Absorbing Structure',
      description: 'Designed energy-absorbing chassis structures and ran clearance/structural calculations to protect the battery pack from shock and collision loads.',
      tag: 'Simulation',
    },
    {
      title: 'Mass-Production Formability Review',
      description: 'Worked with suppliers to assess part formability, cutting cost and weight, and validated designs through mass-production prototypes.',
      tag: 'DFM',
    },
  ],
}

// --- Education ---

export const education = {
  summary:
    'Educated in Japan on a MEXT scholarship — a year of intensive Japanese first, then a mechanical engineering degree at Kyoto University.',
  schools: [
    {
      school: 'Kyoto University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Kyoto_University_emblem.svg',
      degree: 'Bachelor of Engineering, Mechanical Engineering',
      location: 'Kyoto, Japan',
      period: 'Apr 2019 — Mar 2023',
      description:
        'Undergraduate thesis on aluminum corrosion behavior in ionic liquid electrolytes for lithium secondary batteries — researching flame-retardant, Li[FSA]-based electrolytes to improve li-ion battery safety, analyzing the effects of temperature and lithium salt concentration through electrochemical and surface characterization techniques.',
    },
    {
      school: 'Osaka University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/University_of_Osaka_symbol.svg',
      degree: 'Japanese Language Extensive Course',
      location: 'Osaka, Japan',
      period: 'Apr 2018 — Mar 2019',
      description: 'A year of intensive Japanese language study ahead of starting the engineering degree at Kyoto University.',
    },
  ],
  certificates: [
    { name: 'JLPT N1', issuer: 'The Japan Foundation and Japan Educational Exchanges and Services', date: 'Jul 2021' },
    { name: 'TOEIC 920', issuer: 'ETS', date: 'Aug 2023' },
  ],
  achievements: [
    {
      title: 'MEXT Scholarship recipient',
      description: 'One of only five students selected nationwide for overseas study in Japan (2018–23).',
    },
  ],
}

// --- Music: producer / composer work ---

export const music = {
  summary:
    'I write, produce, and mix my own tracks, and score for short films on the side.',
  tools: [
    'FL Studio',
    'Vital',
    'Kontakt',
    'Neural DSP',
    'Home Studio',
    'Recording',
  ],
  genres: ['Rock', 'J-Pop', 'Metal', 'Cinematic/Movie', 'Orchestral'],
}

// --- Music releases: real songs pulled from YouTube Music, plus the band and channel cards ---
// Edit descriptions/placeholders freely — covers, embeds and links are live data.

export type SongRelease = {
  kind: 'song'
  slug: string
  title: string
  releaseType: 'Album' | 'Single'
  year: string
  trackCount?: string
  cover: string
  musicUrl: string
  embedUrl: string
  description: string
}

export type BandRelease = {
  kind: 'band'
  slug: string
  title: string
  subtitle: string
  cover: string
  description: string[]
}

export type ChannelRelease = {
  kind: 'channel'
  slug: string
  title: string
  subtitle: string
  cover: string
  channelUrl: string
  subscribers: string
  videoCount: string
  banner: string
  avatar: string
  featuredVideos: { title: string; thumbnail: string; url: string; duration: string }[]
  featuredReleases: { title: string; cover: string; url: string }[]
  journey: string[]
}

export type MusicRelease = SongRelease | BandRelease | ChannelRelease

export const musicReleases: MusicRelease[] = [
  {
    kind: 'song',
    slug: 'catastrophe',
    title: 'Catastrophe',
    releaseType: 'Album',
    year: '2026',
    trackCount: '9 songs',
    cover:
      'https://yt3.googleusercontent.com/7Zgl9aKL6_xXaV743uoqxR90CRLzfQY-S3FkqpVCWu_1pcRFlhEp-Sjd1eZ8OurK2eRVKSaNn0nwkew=w1425-h1425-l90-rj',
    musicUrl: 'https://music.youtube.com/browse/MPREb_BJ1Ilz0tgVF',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=OLAK5uy_k4M4OaPRLPVKkGcB0xVK3jTonrqQWbCoM',
    description:
      'A 9-track concept album about hitting bottom and finding a way back up — written, produced, and mixed start to finish.',
  },
  {
    kind: 'song',
    slug: 'makkurona-rifujin-koi',
    title: '真っ黒な理不尽恋',
    releaseType: 'Single',
    year: '2025',
    cover:
      'https://yt3.googleusercontent.com/f94OZ4cORuYt0CeGSwRyeBd1ItmXXk7WBRcph8ZcGIWmA9sMgo5F_rqu0WTkBUlP0a5cHLh_NO1NBWM=w1425-h1425-l90-rj',
    musicUrl: 'https://music.youtube.com/browse/MPREb_hjLsw5d4g9F',
    embedUrl: 'https://www.youtube.com/embed/vv_legpEjP8',
    description:
      'A single written and produced entirely in Japanese — pitch-black synths under a melody about a love that doesn’t make sense.',
  },
  {
    kind: 'song',
    slug: 'whats-up-people',
    title: 'What’s Up, People?! (Anime Ver.)',
    releaseType: 'Single',
    year: '2025',
    cover:
      'https://yt3.googleusercontent.com/bH8ySh0-XeRpVwmuBfa9WqjYLab6cKba1wVCu8A3GSpaZwEfjbNOh6FyBn7JOlyWzLE4nxQ5bsPC0H8PMw=w1425-h1425-l90-rj',
    musicUrl: 'https://music.youtube.com/browse/MPREb_ii9assfR5oc',
    embedUrl: 'https://www.youtube.com/embed/SKjAX2dqOmA',
    description: 'A high-energy, anime-opening-style single — loud, fast, and built to be sung along to.',
  },
  {
    kind: 'band',
    slug: '5to9',
    title: '5to9',
    subtitle: 'Band',
    cover: '/images/5to9-band.webp',
    description: [
      'This page is a placeholder — real photos and a real description are coming soon.',
      '5to9 is a band project. More on the lineup, the sound, and where to hear us will go here.',
    ],
  },
  {
    kind: 'channel',
    slug: 'channel',
    title: 'The YouTube Channel',
    subtitle: 'Covers, originals & build logs',
    cover:
      'https://yt3.googleusercontent.com/c0nHSgeAg7GbVPUiedDEhk7eObZAoFELg9MnFEySBpjWo3z_eP_UK751sdGlrmJx3TH4LGAzhw=s900-c-k-c0x00ffffff-no-rj',
    channelUrl: 'https://www.youtube.com/@AdiutkarshMishra',
    subscribers: '242 subscribers',
    videoCount: '42 videos',
    banner:
      'https://yt3.googleusercontent.com/FeuPvWOjPlKsFklDBHt_fr72xMk66ksd9zjqNMoJ-U3r-5pRAxLuQ-v70MYGbp-k8Sta0S-n5T8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    avatar:
      'https://yt3.googleusercontent.com/c0nHSgeAg7GbVPUiedDEhk7eObZAoFELg9MnFEySBpjWo3z_eP_UK751sdGlrmJx3TH4LGAzhw=s900-c-k-c0x00ffffff-no-rj',
    featuredVideos: [
      {
        title: '真っ黒な理不尽恋',
        thumbnail: 'https://i.ytimg.com/vi/OE0Er0lkpdQ/hq720.jpg',
        url: 'https://www.youtube.com/watch?v=OE0Er0lkpdQ',
        duration: '4:13',
      },
      {
        title: '「おはよう」/ DEZERT【cover】',
        thumbnail: 'https://i.ytimg.com/vi/tVi_eJap0Lc/hq720.jpg',
        url: 'https://www.youtube.com/watch?v=tVi_eJap0Lc',
        duration: '3:35',
      },
      {
        title: 'By Your Side',
        thumbnail: 'https://i.ytimg.com/vi/SZa4Q8q0sZU/hq720.jpg',
        url: 'https://www.youtube.com/watch?v=SZa4Q8q0sZU',
        duration: '3:04',
      },
      {
        title: 'Sumeru Battle Theme — Guitar Cover',
        thumbnail: 'https://i.ytimg.com/vi/Id94yYxCmD8/hq720.jpg',
        url: 'https://www.youtube.com/watch?v=Id94yYxCmD8',
        duration: '1:58',
      },
    ],
    featuredReleases: [
      {
        title: 'Catastrophe',
        cover:
          'https://yt3.googleusercontent.com/7Zgl9aKL6_xXaV743uoqxR90CRLzfQY-S3FkqpVCWu_1pcRFlhEp-Sjd1eZ8OurK2eRVKSaNn0nwkew=w544-h544-l90-rj',
        url: 'https://music.youtube.com/browse/MPREb_BJ1Ilz0tgVF',
      },
      {
        title: '真っ黒な理不尽恋',
        cover:
          'https://yt3.googleusercontent.com/f94OZ4cORuYt0CeGSwRyeBd1ItmXXk7WBRcph8ZcGIWmA9sMgo5F_rqu0WTkBUlP0a5cHLh_NO1NBWM=w544-h544-l90-rj',
        url: 'https://music.youtube.com/browse/MPREb_hjLsw5d4g9F',
      },
      {
        title: 'What’s Up, People?! (Anime Ver.)',
        cover:
          'https://yt3.googleusercontent.com/bH8ySh0-XeRpVwmuBfa9WqjYLab6cKba1wVCu8A3GSpaZwEfjbNOh6FyBn7JOlyWzLE4nxQ5bsPC0H8PMw=w544-h544-l90-rj',
        url: 'https://music.youtube.com/browse/MPREb_ii9assfR5oc',
      },
    ],
    journey: [
      'It started on FL Studio Mobile, on a phone, programming drum patterns during downtime — no plugins, no real instruments, just the step sequencer and a lot of trial and error.',
      'That turned into a full FL Studio setup on PC, and drum programming turned into full arrangements. From there it was a short step to recording covers — anime openings, band songs, whatever I was into that month.',
      'Covers taught me how other people build a track. Eventually that turned into writing and producing my own — first singles, then a full album. Still the same FL Studio project window, just a lot more tracks in it.',
    ],
  },
]

// --- Know Me ---

export const knowMe = {
  bio: [
    "I'm a mechanical engineer who never stopped treating sound as a design material. Most of my week is CAD models, tolerance stacks, and simulation reports. Most nights it's a DAW.",
    "The two disciplines feed each other more than you'd think — both are about constraints, iteration, and getting a system to behave the way you intended.",
  ],
  facts: [
    { label: 'Based in', value: 'Osaka, JAPAN' },
    { label: 'Currently building', value: 'NAM AMP PLUGIN, Overdrive Pedal' },
    { label: 'Daily driver DAW', value: 'FL Studio' },
    { label: 'Daily driver CAD', value: 'Catia V4' },
  ],
  photo: '/images/know-me-portrait.png',
}

// --- All of my links ---

export const links = [
  { label: 'GitHub', href: 'https://github.com/yourhandle', category: 'Code' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adiutkarsh-mishra/', category: 'Work' },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/3sIk2BJUF5TSTnovigXLuz?si=qZuetw1QQ9e3pHezg23uWQ', category: 'Music' },
  { label: 'YouTube Music', href: 'https://music.youtube.com/@AdiutkarshMishra', category: 'Music' },
  { label: 'YouTube', href: 'https://www.youtube.com/@AdiutkarshMishra', category: 'Video' },
  { label: 'Instagram', href: 'https://www.instagram.com/adiutkarshm/?hl=e', category: 'Social' },
  { label: 'X / Twitter', href: 'https://x.com/yourhandle', category: 'Social' },
  { label: 'Resume', href: '/resume.pdf', category: 'Work' },
]
