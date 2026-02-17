"use client"

import { ChevronRight, Briefcase } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(145,63%,22%)] via-[hsl(145,63%,28%)] to-[hsl(197,37%,24%)] py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-10 right-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 text-center">
                <nav className="mb-8 flex items-center justify-center gap-2 text-sm text-white/60">
                    <Link href="/" className="transition-colors hover:text-white/90">Home</Link>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span className="text-white/90">Our Services</span>
                </nav>

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Briefcase className="h-10 w-10 text-emerald-300" />
                </div>

                <h1 className="mx-auto max-w-4xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    Our{" "}
                    <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                        Services
                    </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                    Training, Certification, Membership, and Professional Accreditation for green building excellence.
                </p>

                {/* Quick Nav */}
                <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
                    {[
                        { label: "Training", href: "#training" },
                        { label: "Membership", href: "#membership" },
                        { label: "Certification", href: "#certification" },
                        { label: "Accreditation", href: "#accreditation" },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
