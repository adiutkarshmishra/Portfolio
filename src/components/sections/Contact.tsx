import { motion } from 'motion/react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Mail01Icon } from '@hugeicons/core-free-icons'
import CopyConfirm from '@/components/copy-confirm'
import { SpinningText } from '@/components/motion-primitives/spinning-text'
import { profile } from '@/data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-12 text-center sm:py-16 md:pt-2 md:pb-4">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[26.25rem] w-[26.25rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, var(--primary), var(--accent) 60%, transparent 75%)' }}
      />

      <div className="mx-auto mb-6 hidden size-24 items-center justify-center sm:flex">
        <SpinningText duration={16} radius={5} fontSize={0.6} className="font-mono-label text-muted-foreground">
          {'LET’S BUILD • LET’S BUILD • '}
        </SpinningText>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Let's work together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 text-muted-foreground"
      >
        Engineering gig, a track, or just want to talk shop — my inbox is open.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 flex justify-center"
      >
        <CopyConfirm
          title={profile.email}
          icon={<HugeiconsIcon icon={Mail01Icon} size={16} />}
          valueToCopy={profile.email}
          copyText="Copy email"
          copiedText="Copied!"
          showSettings={false}
        />
      </motion.div>
    </section>
  )
}
