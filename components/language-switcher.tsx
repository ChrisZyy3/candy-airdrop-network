"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/context/language-context"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "zh" : "en")
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="fixed top-4 right-4 z-50">
      {locale === "en" ? "中文" : "English"}
    </Button>
  )
}

