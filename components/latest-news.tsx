"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  "Green Building Congress 2025 | 27 - 29 Nov | Save the Date",
  "Green City Case Study: Metropolitan Sustainability Report",
  "Green Your School 2024 - National Initiative",
  "Green Education | Training Program & Webinars",
  "Founding Member of World Green Building Council",
  "Green Education Conclave 2024",
  "Fellow Award 2025 - Nominations Open",
  "Green Factory Building Version 2.0 Launched | Registrations Open",
  "WGBO & ESG Net Zero Program",
  "Green Impressions of Young Minds",
]

export function LatestNews() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Latest in <span className="text-primary">WGBO</span>
          </h2>
          <div className="h-1 flex-1 rounded bg-primary/20" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="group flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>
              <span className="flex-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {item}
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
