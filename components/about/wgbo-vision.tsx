"use client"

import { Target } from "lucide-react"

export function WGBOVision() {
 return (
 <section className="relative bg-gradient-to-b from-background to-secondary py-20 md:py-28">
 <div className="mx-auto max-w-7xl px-4">
 {/* Section Header */}
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
 Our Vision
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
 Our Vision
 </h2>
 </div>

 {/* Vision Statement */}
 <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] p-8 text-center shadow-xl md:p-12">
 <Target className="mx-auto mb-4 h-10 w-10 text-white/40" />
 <blockquote className="font-heading text-xl font-bold italic text-white md:text-2xl">
 &ldquo;At WGBO, our mission is to radically improve the sustainability of the built environment, by transforming the way it is planned, financed, designed, constructed, maintained, operated and repurposed.&rdquo;
 </blockquote>
 </div>
 </div>
 </section>
 )
}
