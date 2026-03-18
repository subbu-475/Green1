"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, Award, Users } from "lucide-react"

const highlights = [
 {
 icon: Briefcase,
 title:"Our Services",
 description:
"From project certification and energy audits to sustainability consulting and corporate training — WGBO provides end-to-end green building solutions for a sustainable future.",
 href:"/services",
 image:"/images/project-1-v3.jpg",
 gradient:"from-emerald-900/80 to-emerald-600/60",
 accent:"bg-emerald-500",
 },
 {
 icon: Award,
 title:"Awards & Recognition",
 description:
"Celebrating excellence in sustainable construction. The WGBO Green Building Awards honour outstanding projects and leaders driving the green building movement worldwide.",
 href:"/awards",
 image:"/images/project-2-v3.jpg",
 gradient:"from-amber-900/80 to-amber-600/60",
 accent:"bg-amber-500",
 },
 {
 icon: Users,
 title:"Membership",
 description:
"Join a thriving community of professionals, organisations, and chapters. Gain access to training, certification, industry events, and global networking opportunities.",
 href:"/membership",
 image:"/images/project-4-v3.jpg",
 gradient:"from-sky-900/80 to-sky-600/60",
 accent:"bg-sky-500",
 },
]

export function Highlights() {
 return (
 <section className="py-20">
 <div className="mx-auto max-w-7xl px-4">
 <div className="mb-12 text-center">
 <p className="text-sm font-semibold uppercase tracking-widest text-primary">
 What We Offer
 </p>
 <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
 Empowering Sustainable <span className="text-primary">Construction</span>
 </h2>
 <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
 Discover how WGBO drives the green building movement through world-class services, prestigious awards, and a vibrant global community.
 </p>
 </div>

 <div className="grid gap-8 md:grid-cols-3">
 {highlights.map((item) => (
 <Link
 key={item.title}
 href={item.href}
 className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
 >
 {/* Image */}
 <div className="relative h-56 overflow-hidden">
 <Image
 src={item.image}
 alt={item.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-110"
 />
 <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`} />
 {/* Icon badge */}
 <div className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.accent} shadow-lg`}>
 <item.icon className="h-6 w-6 text-white" />
 </div>
 </div>

 {/* Content */}
 <div className="flex flex-1 flex-col bg-background p-6">
 <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
 {item.title}
 </h3>
 <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
 {item.description}
 </p>
 <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
 Know More
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
 </span>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 )
}
