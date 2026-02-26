"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function RatingHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(145,63%,22%)] via-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] py-24 md:py-32">
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
                    <span className="text-white/90">Rating System</span>
                </nav>

                <h1 className="mx-auto max-w-4xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    WGBO{" "}
                    <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                        Rating System
                    </span>
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
                    The WGBO certification scheme advances the built environment to one that is greener and more carbon-efficient while facilitating sustainable procurement.
                </p>
            </div>
        </section>
    )
}
