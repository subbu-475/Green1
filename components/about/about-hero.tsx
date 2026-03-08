"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(145,63%,22%)] via-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] py-24 md:py-32">
            {/* Decorative Elements */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-10 right-10 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
                {/* Dot Grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 text-center">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center justify-center gap-2 text-sm text-white/60">
                    <Link href="/" className="transition-colors hover:text-white/90">Home</Link>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span className="text-white/90">About Us</span>
                </nav>

                <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    About{" "}
                    <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                        WGBO
                    </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                    Leading the sustainable transformation of the built environment through rating, education, and advocacy.
                </p>

                {/* Floating Stats */}
                <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                        { value: "2022", label: "WGBO Formed" },
                        { value: "WSO", label: "Part of WSO India" },
                        { value: "5★", label: "Rating System" },
                        { value: "100+", label: "Projects" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
                            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
