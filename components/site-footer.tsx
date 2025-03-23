"use client"

import { useLanguage } from "@/app/context/language-context"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      <div className="mb-1">{t.footer.title}</div>
      <div>{t.footer.foundation}</div>
    </footer>
  )
}

