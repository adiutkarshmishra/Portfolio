import { HugeiconsIcon } from '@hugeicons/react'
import { Sun02Icon, Moon02Icon } from '@hugeicons/core-free-icons'
import { useTheme } from '@/lib/theme'

export function ThemeToggle({ className, iconSize = 16 }: { className?: string; iconSize?: number }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className={className}
    >
      <HugeiconsIcon icon={theme === 'dark' ? Sun02Icon : Moon02Icon} size={iconSize} />
    </button>
  )
}
