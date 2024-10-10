'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { Button } from './button'

interface ThemeModeToggleProps {
  className?: string
}

export function ThemeModeToggle({ className }: ThemeModeToggleProps) {

  const { setTheme, theme } = useTheme()

  return (
    <Button
      className={cn("hover:bg-background-secondary", className)}
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="w-[2.5rem] h-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-[1.2rem] h-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
