"use client"

import {
 Monitor,
 Video,
 Megaphone,
 CalendarDays,
 BookOpen,
 Mail,
 ArrowRight,
} from "lucide-react"

const services = [
 { icon: Monitor, title:"WGBO e-Learning", desc:"Self-paced online courses on green building fundamentals and sustainability." },
 { icon: Video, title:"WGBO Virtual Learning", desc:"Live instructor-led virtual sessions with interactive Q&A and case studies." },
 { icon: Megaphone, title:"WGBO Campaigns", desc:"Sustainability awareness campaigns driving industry-wide participation." },
 { icon: CalendarDays, title:"WGBO Diary / Calendar", desc:"Stay updated with upcoming events, deadlines, and industry milestones." },
 { icon: BookOpen, title:"WGBO Publication", desc:"Journals, newsletters, and tech-letters covering latest sustainability research." },
]

export function TrainingSection() {
 return (
 <section id="training" className="bg-background py-20 md:py-28">
 <div className="mx-auto max-w-7xl px-4">
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
 Training
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
 Training &amp; Learning
 </h2>
 <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
 Please contact World Green Building Organization (WGBO) for more details on our training programmes.
 </p>
 </div>

 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {services.map((s, i) => (
 <div
 key={s.title}
 className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
 >
 <span className="absolute right-6 top-6 text-6xl font-black text-primary/5 group-hover:text-primary/10">
 {String(i + 1).padStart(2,"0")}
 </span>
 <div className="relative">
 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
 <s.icon className="h-6 w-6" />
 </div>
 <h3 className="mb-3 text-lg font-bold text-foreground">{s.title}</h3>
 <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
 </div>
 <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-emerald-400 transition-all duration-500 group-hover:w-full" />
 </div>
 ))}

 {/* CTA Card */}
 <div className="group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center transition-colors hover:border-primary/50 hover:bg-primary/10">
 <Mail className="mb-4 h-8 w-8 text-primary" />
 <p className="mb-2 text-sm font-bold text-foreground">Get in Touch</p>
 <p className="mb-4 text-xs text-muted-foreground">Contact us for programme details and schedules</p>
 <a href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
 Contact Us <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
 </a>
 </div>
 </div>
 </div>
 </section>
 )
}
