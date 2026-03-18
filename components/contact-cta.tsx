"use client"

import { ArrowRight, Phone, Download } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
 return (
 <section id="contact" className="py-8">
 <div className="mx-auto max-w-7xl px-4">
 <div className="overflow-hidden rounded-2xl bg-primary p-10 text-center md:p-16">
 <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
 Making Green Go a Way of Life… Worldwide
 </h2>
 <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80">
 Whether you are looking to certify your building, join our membership, or learn about green construction standards, the WGBO team is here to help.
 </p>
 <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
 <Link
 href="/contact"
 className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
 >
 Contact Us
 <ArrowRight className="h-4 w-4" />
 </Link>
 <a
 href="/images/WGBO Membership Form.docx"
 download
 className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
 >
 <Download className="h-4 w-4" />
 Download Membership Form
 </a>
 <a
 href="tel:+917200193771"
 className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
 >
 <Phone className="h-4 w-4" />
 +91-7200193771
 </a>
 </div>
 </div>
 </div>
 </section>
 )
}

