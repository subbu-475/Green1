"use client"

import { ArrowRight, MessageSquare, Handshake, Lightbulb, GraduationCap, Target } from "lucide-react"

const objectives = [
 {
 icon: MessageSquare,
 title:"Exchange of Information",
 desc:"To encourage the effective exchange of information and experiences between members of the WSO.",
 },
 {
 icon: Handshake,
 title:"International Collaboration",
 desc:"Collaborate with other international organizations in areas of mutual concern.",
 },
 {
 icon: Lightbulb,
 title:"Advancement of Technology",
 desc:"Promote the continuous advancement of safety and accident prevention technology.",
 },
 {
 icon: GraduationCap,
 title:"Professionalism & Competence",
 desc:"Strive for a universal level of professionalism and competence among its members and all professionals and practitioners in the multi-discipline of occupational and environmental safety, health, and accident prevention.",
 },
]

export function WSOObjectives() {
 return (
 <section className="relative bg-gradient-to-b from-secondary to-background py-20 md:py-28">
 <div className="mx-auto max-w-7xl px-4">
 {/* Section Header */}
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
 Our Objectives
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
 WSO Core Objectives
 </h2>
 <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
 Guided by the WSO&apos;s overall theme of{""}
 <em className="font-semibold text-primary">&ldquo;Making Safety a Way of Life . . . Worldwide.&rdquo;</em>
 </p>
 </div>

 {/* Objectives Grid */}
 <div className="grid gap-6 md:grid-cols-2">
 {objectives.map((obj, i) => (
 <div
 key={obj.title}
 className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
 >
 {/* Number */}
 <span className="absolute right-6 top-6 text-6xl font-black text-primary/5 transition-colors group-hover:text-primary/10">
 {String(i + 1).padStart(2,"0")}
 </span>

 <div className="relative">
 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
 <obj.icon className="h-6 w-6" />
 </div>
 <h3 className="mb-3 text-lg font-bold text-foreground">{obj.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{obj.desc}</p>
 </div>

 {/* Bottom accent */}
 <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-emerald-400 transition-all duration-500 group-hover:w-full" />
 </div>
 ))}
 </div>

 {/* Theme Banner */}
 <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] p-8 text-center shadow-xl md:p-12">
 <Target className="mx-auto mb-4 h-10 w-10 text-white/40" />
 <blockquote className="font-heading text-xl font-bold italic text-white md:text-2xl">
 &ldquo;Making Safety a Way of Life . . . Worldwide.&rdquo;
 </blockquote>
 <p className="mt-3 text-sm font-medium text-white/60">— The WSO&apos;s Overall Theme</p>
 </div>
 </div>
 </section>
 )
}
