"use client"

import { HeroCarousel } from "@/components/hero-carousel"
import { ContentTabs } from "@/components/content-tabs"
import { SiteFooter } from "@/components/site-footer"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <LanguageSwitcher />
      <HeroCarousel />
      <ContentTabs />
      <div className="flex-grow"></div>
      <SiteFooter />
    </main>
  )
}

