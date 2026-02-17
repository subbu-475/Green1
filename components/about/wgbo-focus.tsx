"use client"

import { Hospital, Factory, GraduationCap, Building2, Eye } from "lucide-react"

const focusAreas = [
    {
        icon: Hospital,
        title: "Healthcare Infrastructure",
        desc: "Hospitals and health facilities benefiting from green building certification for healthier environments.",
    },
    {
        icon: Factory,
        title: "Industrial Facilities",
        desc: "Factories and industrial complexes adopting sustainable practices for energy efficiency and reduced emissions.",
    },
    {
        icon: GraduationCap,
        title: "Universities",
        desc: "Educational institutions embracing green building standards for better learning environments.",
    },
    {
        icon: Building2,
        title: "Apartments",
        desc: "Residential complexes designed with sustainable materials and energy-efficient systems for modern living.",
    },
]

export function WGBOFocus() {
    return (
        <section className="relative bg-background py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        In Focus
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        WGBO in Focus
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
                        From healthcare infrastructure to industrial facilities, universities and apartments, the WGBO
                        &ldquo;in focus&rdquo; series takes an in-depth look at how different types of buildings are enjoying the
                        benefits of WGBO.
                    </p>
                </div>

                {/* Focus Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {focusAreas.map((area) => (
                        <div
                            key={area.title}
                            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Gradient header */}
                            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <area.icon className="h-10 w-10 text-primary" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-lg font-bold text-foreground">{area.title}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">{area.desc}</p>
                            </div>

                            {/* Hover reveal */}
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center overflow-hidden">
                                <div className="flex h-0 w-full items-center justify-center bg-primary transition-all duration-300 group-hover:h-10">
                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Eye className="h-3.5 w-3.5" /> Explore More
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
