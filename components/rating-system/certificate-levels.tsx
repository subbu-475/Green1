"use client"

import { Star, Award } from "lucide-react"

const levels = [
 { stars: 1, level:"Certificate", points:"30–40", recognition:"Good Performance", color:"from-sky-400 to-sky-500" },
 { stars: 2, level:"Bronze", points:"41–50", recognition:"Very Good Performance", color:"from-amber-600 to-amber-700" },
 { stars: 3, level:"Silver", points:"51–70", recognition:"Outstanding Performance", color:"from-gray-400 to-gray-500" },
 { stars: 4, level:"Gold", points:"71–90", recognition:"National Excellence", color:"from-yellow-400 to-amber-500" },
 { stars: 5, level:"Platinum", points:"91–100", recognition:"National Leadership", color:"from-violet-400 to-purple-500" },
]

const processSteps = [
"Invoice Issued and Payment",
"Submit Application",
"Evaluation",
"Peer Review",
"Acknowledgement of Points and Certificate Level",
"User Agreement",
"Issuance of Certificate",
]

export function CertificateLevels() {
 return (
 <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
 <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

 <div className="relative mx-auto max-w-7xl px-4">
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
 Levels
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
 WGBO Certificates Scheme and Levels
 </h2>
 <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
 The WGBO Certification Scheme is a certification for green building product, and evaluates the sustainability performance of these products based on scientific and engineering principles. It is a voluntary certification scheme with a tiered rating system of one of Five levels, where a higher rating indicates better sustainability performance.
 </p>
 </div>

 {/* Level Cards */}
 <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
 {levels.map((lvl) => (
 <div
 key={lvl.level}
 className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
 >
 <div className={`h-2 w-full bg-gradient-to-r ${lvl.color}`} />
 <div className="p-6 text-center">
 {/* Stars */}
 <div className="mb-3 flex items-center justify-center gap-0.5">
 {Array.from({ length: lvl.stars }).map((_, i) => (
 <Star key={i} className={`h-5 w-5 fill-current bg-gradient-to-r ${lvl.color} bg-clip-text text-amber-400`} />
 ))}
 </div>
 <h3 className="mb-1 text-lg font-bold text-foreground">{lvl.level}</h3>
 <p className="mb-2 text-2xl font-black text-primary">{lvl.points}</p>
 <p className="text-xs font-medium text-muted-foreground">{lvl.recognition}</p>
 </div>
 </div>
 ))}
 </div>

 {/* Certification Process */}
 <div className="mx-auto mt-14 max-w-4xl">
 <h3 className="mb-6 text-center font-heading text-xl font-bold text-foreground">WGBO Certificates Process</h3>
 <div className="flex flex-wrap items-center justify-center gap-2">
 {processSteps.map((step, i) => (
 <div key={step} className="flex items-center gap-2">
 <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
 {i + 1}
 </span>
 <span className="text-xs font-medium text-foreground">{step}</span>
 </div>
 {i < processSteps.length - 1 && (
 <span className="text-muted-foreground">→</span>
 )}
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 )
}
