"use client"

import { Target, MapPin, Droplets, Zap, Recycle, Leaf, Lightbulb, Building2 } from "lucide-react"

const aspects = [
    { icon: Target, title: "Purpose", desc: "To promote sustainable, environmentally friendly, and energy-efficient building practices." },
    { icon: Building2, title: "Applicability", desc: "Applies to almost all project types, including new construction, interior fit-outs, existing building operations, homes, and neighborhoods." },
]

const categories = [
    { icon: MapPin, text: "Location and Transportation" },
    { icon: Building2, text: "Sustainable Sites" },
    { icon: Droplets, text: "Water Efficiency" },
    { icon: Zap, text: "Energy and Atmosphere" },
    { icon: Recycle, text: "Materials and Resources" },
    { icon: Leaf, text: "Indoor Environmental Quality" },
    { icon: Lightbulb, text: "Innovation" },
]

export function KeyAspects() {
    return (
        <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Key Aspects
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Key Aspects of WGBO Certification
                    </h2>
                </div>

                {/* Purpose & Applicability */}
                <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-2">
                    {aspects.map((a) => (
                        <div
                            key={a.title}
                            className="group rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                                <a.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-foreground">{a.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Categories Evaluated */}
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                        <h3 className="mb-6 text-center font-heading text-xl font-bold text-foreground">Categories Evaluated</h3>
                        <p className="mb-6 text-center text-sm text-muted-foreground">
                            Projects are assessed on the following categories:
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {categories.map((c) => (
                                <div
                                    key={c.text}
                                    className="flex items-center gap-3 rounded-xl bg-background p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                        <c.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{c.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
