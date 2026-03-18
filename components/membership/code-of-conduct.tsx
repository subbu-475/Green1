"use client"

import { Shield, Check } from "lucide-react"

const codePoints = [
"Members must be responsible for ethical and professional conduct in relationships with clients, employers, associates, and the public.",
"Members must be responsible for professional competence in performance of all their professional activities.",
"Members must be responsible for the protection of professional interest, reputation, and good name of any deserving World Green Building Organization (WGBO) member or member of other professional organization involved in Sustainability and Environment or associated disciplines.",
"Members must be dedicated to professional development of new members in the Sustainability and Environment profession and associated disciplines.",
"Members must be responsible for their complete sincerity in professional service to the world.",
"Members must be responsible for continuing improvement and development of professional competencies in Sustainability and Environment and associated disciplines.",
"Members must be responsible for their professional efforts to support the World Green Building Organization (WGBO) motto:",
]

export function CodeOfConduct() {
 return (
 <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
 <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

 <div className="relative mx-auto max-w-4xl px-4">
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
 Ethics
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl">
 Professional Code of Conduct
 </h2>
 <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
 Download, print, and sign the World Green Building Organization (WGBO) Code of Conduct, and submit with your Application for Membership.
 </p>
 </div>

 <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 shadow-sm md:p-10">
 <div className="mb-5 flex items-center gap-3">
 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
 <Shield className="h-5 w-5" />
 </div>
 <h3 className="font-heading text-xl font-bold text-foreground">Code of Ethics</h3>
 </div>
 <p className="mb-6 text-sm text-muted-foreground">
 Members of the World Green Building Organization (WGBO), by virtue of their acceptance of membership in the World Green Building Organization (WGBO), are bound to the following Code of Ethics regarding their activities associated with the World Green Building Organization (WGBO):
 </p>

 <ul className="space-y-3">
 {codePoints.map((point, i) => (
 <li key={i} className="flex items-start gap-3">
 <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
 <Check className="h-3 w-3 text-primary" />
 </div>
 <span className="text-sm leading-relaxed text-foreground">{point}</span>
 </li>
 ))}
 </ul>

 <div className="mt-6 rounded-xl bg-primary/10 p-5 text-center">
 <p className="font-heading text-lg font-bold italic text-primary">
 &ldquo;Making Go Green a Way of Life . . . Worldwide&rdquo;
 </p>
 </div>
 </div>
 </div>
 </section>
 )
}
