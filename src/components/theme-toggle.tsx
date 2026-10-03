"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="icon"
      className="theme-toggle"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="sun-icon" aria-hidden="true" />
      <Moon className="moon-icon" aria-hidden="true" />
    </Button>
  )
}
