"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-2xl bg-primary p-10 text-center md:p-16">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            For more details, please get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80">
            Whether you are looking to certify your building, join our membership, or learn about green construction standards, our team is here to help.
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
          >
            Contact Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
