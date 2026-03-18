"use client"

import { ChevronRight, Trophy } from "lucide-react"
import Link from "next/link"

export function AwardsHero() {
 return (
 <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(145,63%,22%)] via-[hsl(145,63%,28%)] to-[hsl(38,92%,35%)] py-24 md:py-32">
 {/* Decorative */}
 <div className="pointer-events-none absolute inset-0">
 <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
 <div className="absolute -bottom-10 right-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
 <div
 className="absolute inset-0 opacity-[0.04]"
 style={{
 backgroundImage:"radial-gradient(circle, #fff 1px, transparent 1px)",
 backgroundSize:"32px 32px",
 }}
 />
 </div>

 <div className="relative mx-auto max-w-7xl px-4 text-center">
 {/* Breadcrumb */}
 <nav className="mb-8 flex items-center justify-center gap-2 text-sm text-white/60">
 <Link href="/" className="transition-colors hover:text-white/90">Home</Link>
 <ChevronRight className="h-3.5 w-3.5" />
 <span className="text-white/90">Awards</span>
 </nav>

 <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
 <Trophy className="h-10 w-10 text-amber-300" />
 </div>

 <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
 WGBO{""}
 <span className="bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
 Awards
 </span>
 </h1>
 <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
 Recognising the successes and hard work of those who have tackled the sustainability challenges we face today.
 </p>
 </div>
 </section>
 )
}
