import { DetailShell } from '@/pages/DetailShell'
import { education } from '@/data/portfolio'

export function EducationPage() {
  return (
    <DetailShell>
      <span className="font-mono-label text-xs text-primary uppercase">Education</span>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Education</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{education.summary}</p>

      <div className="mt-12 space-y-10 border-l border-border pl-6">
        {education.schools.map((school) => (
          <div key={school.school} className="relative">
            <span className="absolute -left-[1.8125rem] top-1.5 size-2.5 rounded-full border-2 border-background bg-primary" />
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-white p-2">
                <img src={school.logo} alt={`${school.school} logo`} className="size-full object-contain" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 className="font-medium text-foreground">{school.school}</h2>
                  <span className="font-mono-label text-xs text-muted-foreground">{school.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {school.degree} · {school.location}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{school.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-mono-label text-xs text-primary uppercase">Certificates</h2>
          <div className="mt-4 space-y-3">
            {education.certificates.map((cert) => (
              <div key={cert.name} className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
                <span className="font-mono-label shrink-0 text-xs text-muted-foreground">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-mono-label text-xs text-primary uppercase">Achievements</h2>
          <div className="mt-4 space-y-3">
            {education.achievements.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DetailShell>
  )
}
