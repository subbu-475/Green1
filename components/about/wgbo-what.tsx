"use client"

import { Leaf, Zap, Recycle } from "lucide-react"

const principles = [
    {
        icon: Leaf,
        title: "Sustainable Design",
        desc: "Use design, construction and operational practices that significantly reduce or eliminate its negative impact on the environment and its occupants.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: Zap,
        title: "Promote Efficiency",
        desc: "It can reduce construction and ongoing performance costs significantly, promoting efficiency across all building operations.",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        icon: Recycle,
        title: "Resource Effectiveness",
        desc: "Use resources effectively and creates healthier environments for people to live and work in.",
        gradient: "from-cyan-500 to-blue-500",
    },
]

export function WGBOWhat() {
    return (
        <section className="relative bg-gradient-to-b from-background to-secondary py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        What is WGBO?
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Meets the Needs of the Present
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
                        Without compromising the future — buildings designed based on this principle.
                    </p>
                </div>

                {/* Principle Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {principles.map((p, i) => (
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
