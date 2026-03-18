"use client"

import { Sparkles, Target, Megaphone, Users } from "lucide-react"

const reasons = [
 {
 icon: Target,
 title:"Brand Alignment",
 desc:"Align your brand with awards that truly recognise the successes and hard work of those who have tackled the challenges we face today.",
 },
 {
 icon: Sparkles,
 title:"Profile Your Organisation",
 desc:"Demonstrate your commitment to the vital role risk excellence plays in strategy development, operational performance and organisational resilience.",
 },
 {
 icon: Megaphone,
 title:"Marketing & PR",
 desc:"Exceptional marketing and PR opportunities to amplify your brand across multiple channels and platforms.",
 },
 {
 icon: Users,
 title:"Network & Connect",
 desc:"Network and make new contacts and friends with judges, finalists and awards guests, whilst entertaining clients and supporting current and future talent.",
 },
]

export function SponsorshipSection() {
 return (
 <section className="bg-background py-20 md:py-28">
 <div className="mx-auto max-w-7xl px-4">
 {/* Section Header */}
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-600">
 Sponsorship
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
 Sponsorship Opportunities
 </h2>
 <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
 Why support World Green Building Organization (State) Level Awards?
 </p>
 </div>

 {/* Reason Cards */}
 <div className="grid gap-6 md:grid-cols-2">
 {reasons.map((r, i) => (
 <div
 key={r.title}
 className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:shadow-lg"
 >
 <span className="absolute right-6 top-6 text-6xl font-black text-amber-500/5 transition-colors group-hover:text-amber-500/10">
 {String(i + 1).padStart(2,"0")}
 </span>

 <div className="relative">
 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
 <r.icon className="h-6 w-6" />
 </div>
 <h3 className="mb-3 text-lg font-bold text-foreground">{r.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
 </div>

 <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-500 group-hover:w-full" />
 </div>
 ))}
 </div>
 </div>
 </section>
 )
}
