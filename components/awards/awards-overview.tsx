"use client"

import { Trophy, Quote, CalendarDays, Eye, MessageSquare } from "lucide-react"

export function AwardsOverview() {
 return (
 <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
 <div
 className="pointer-events-none absolute inset-0 opacity-[0.02]"
 style={{
 backgroundImage:"radial-gradient(circle, hsl(145 63% 32%) 1px, transparent 1px)",
 backgroundSize:"24px 24px",
 }}
 />

 <div className="relative mx-auto max-w-7xl px-4">
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-600">
 More
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl">
 Awards Overview &amp; More
 </h2>
 </div>

 {/* Three Feature Cards */}
 <div className="grid gap-8 md:grid-cols-3">
 {/* Awards Overview */}
 <div className="group overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
 <div className="flex h-44 items-center justify-center bg-gradient-to-br from-amber-500/10 to-amber-500/5">
 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 transition-transform group-hover:scale-110">
 <Eye className="h-10 w-10 text-amber-500" />
 </div>
 </div>
 <div className="p-6 text-center">
 <h3 className="mb-2 text-lg font-bold text-foreground">Awards Overview</h3>
 <p className="text-sm text-muted-foreground">
 Discover the categories, judging criteria, and the impact of WGBO Awards on the sustainable building industry.
 </p>
 </div>
 </div>

 {/* Testimonials */}
 <div className="group overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
 <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
 <MessageSquare className="h-10 w-10 text-primary" />
 </div>
 </div>
 <div className="p-6 text-center">
 <h3 className="mb-2 text-lg font-bold text-foreground">Testimonials</h3>
 <p className="text-sm text-muted-foreground">
 Hear from past winners and sponsors about how the WGBO Awards have impacted their organisations and careers.
 </p>
 </div>
 </div>

 {/* Past Events */}
 <div className="group overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
 <div className="flex h-44 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-cyan-500/5">
 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10 transition-transform group-hover:scale-110">
 <CalendarDays className="h-10 w-10 text-cyan-600" />
 </div>
 </div>
 <div className="p-6 text-center">
 <h3 className="mb-2 text-lg font-bold text-foreground">Past Events</h3>
 <p className="text-sm text-muted-foreground">
 Browse our gallery of past award ceremonies and events celebrating sustainability excellence.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 )
}
