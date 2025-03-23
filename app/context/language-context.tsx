"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { type Locale, locales, type LocaleContent } from "../i18n"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: LocaleContent
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const t = locales[locale]

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

