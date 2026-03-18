"use client"

import { CalendarClock } from "lucide-react"

export function CertificateValidity() {
 return (
 <section className="bg-background py-20 md:py-28">
 <div className="mx-auto max-w-4xl px-4">
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
 Validity
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl">
 WGBO Certificates Validity
 </h2>
 </div>

 <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center md:p-10">
 <CalendarClock className="mx-auto mb-4 h-12 w-12 text-primary" />
 <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground">
 WGBO certificates are valid for <strong>one (1) year</strong> from the date of issuance and may be renewed for a period of <strong>one (1) year</strong> thereafter. Further there is no extension of validity period.
 </p>
 </div>
 </div>
 </section>
 )
}
