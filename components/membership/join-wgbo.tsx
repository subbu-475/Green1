"use client"

import { Mail } from "lucide-react"

export function JoinWGBO() {
 return (
 <section className="bg-background py-20 md:py-28">
 <div className="mx-auto max-w-4xl px-4">
 <div className="mb-14 text-center">
 <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
 Join Us
 </span>
 <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
 Join World Green Building Organization (WGBO)
 </h2>
 </div>

 <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
 <div className="space-y-5 text-sm text-muted-foreground">
 <p>
 World Green Building Organization (WGBO) can assist you in an application process. You can contact at{""}
 <a href="mailto:enquiry@wgbo.org.in" className="font-semibold text-primary hover:underline">enquiry@wgbo.org.in</a>{""}
 for further assistance.
 </p>
 <p>
 Please note that <strong className="text-foreground">ONLY full-time practitioners</strong> in the Environment, Social and Sustainability and allied fields are eligible for the World Green Building Organization (WGBO) Affiliate Membership. Please briefly describe your present employment or enclose your resume for evaluation.
 </p>
 </div>

 {/* Apply CTA */}
 <div className="mt-8 rounded-xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] p-6 text-center shadow-lg">
 <p className="text-sm font-bold text-white">Apply for the membership</p>
 <p className="mt-1 text-xs text-white/70">Just mail us to get the application form and fee details</p>
 <a
 href="mailto:enquiry@wgbo.org.in"
 className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[hsl(145,63%,28%)] transition-transform hover:scale-105"
 >
 <Mail className="h-4 w-4" /> enquiry@wgbo.org.in
 </a>
 </div>
 </div>
 </div>
 </section>
 )
}
