"use client"

import { useState } from "react"
import { useLanguage } from "@/app/context/language-context"
import { MagicCard } from "@/components/ui/magic-card"

export function ContentTabs() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("airdrop")

  const cards = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: i,
      title: t.cards.title,
      content: t.cards.content,
      date: "2025-02-18",
    }))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8 border-b">
        <button
          className={`px-8 py-4 text-lg font-medium relative ${
            activeTab === "airdrop" ? "text-foreground" : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("airdrop")}
        >
          {t.tabs.airdrop}
          {activeTab === "airdrop" && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>}
        </button>
        <button
          className={`px-8 py-4 text-lg font-medium relative ${
            activeTab === "message" ? "text-foreground" : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("message")}
        >
          {t.tabs.message}
          {activeTab === "message" && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <MagicCard
            key={card.id}
            className="bg-white p-4 shadow-sm cursor-pointer"
            spotlightColor="rgba(120, 0, 255, 0.15)"
            borderColor="rgba(120, 0, 255, 0.7)"
          >
            <div className="flex flex-row items-center justify-between mb-2">
              <h3 className="text-base font-medium">{card.title}</h3>
              <span className="text-sm">{card.date}</span>
            </div>
            <div>
              <p className="text-sm">{card.content}</p>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  )
}

