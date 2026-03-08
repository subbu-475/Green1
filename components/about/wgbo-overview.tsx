"use client"

import {
    Building2,
    Star,
    GraduationCap,
    Megaphone,
    Eye,
} from "lucide-react"

const pillars = [
    {
        icon: Star,
        title: "We Rate",
        desc: "We rate the sustainability of buildings, fitouts and communities through largest national, voluntary, holistic rating system.",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        icon: GraduationCap,
        title: "We Educate",
        desc: "We educate industry, practitioners and decision-makers, and promote green building programs, technologies, design practices and operations.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: Megaphone,
        title: "We Advocate",
        desc: "We advocate policies and programs that support our vision and purpose.",
        gradient: "from-cyan-500 to-blue-500",
    },
]

export function WGBOOverview() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-28">
            {/* Decorative gradient blob */}
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        About WGBO
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Our Overview
                    </h2>
                </div>

                {/* Overview Content */}
                <div className="mx-auto mb-16 max-w-4xl">
                    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">World Green Building Organization</h3>
                                <p className="text-sm text-muted-foreground">Part of WSO India &bull; Est. 2022</p>
                            </div>
                        </div>

                        <p className="text-base leading-[1.8] text-muted-foreground">
                            The <strong className="text-foreground">World Green Building Organization (WGBO)</strong>, part of the
                            World Safety Organization (WSO) India was formed in the year{" "}
                            <strong className="text-foreground">2022</strong>, our purpose is to lead the sustainable transformation of the built environment.
                        </p>
                    </div>
                </div>

                {/* Pillars: We Rate, We Educate, We Advocate */}
                <div className="grid gap-8 md:grid-cols-3">
                    {pillars.map((p, i) => (
                        <div
                            key={p.title}
                            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Top gradient accent */}
                            <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${p.gradient}`} />

                            {/* Icon */}
                            <div
                                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-lg`}
                            >
                                <p.icon className="h-8 w-8" />
                            </div>

                            {/* Number */}
                            <span className="absolute right-6 top-8 text-7xl font-black text-primary/[0.04]">
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            <h3 className="mb-3 text-xl font-bold text-foreground">{p.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
