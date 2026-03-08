"use client"

import { Leaf, Zap, Recycle, ShieldCheck, TrendingUp, Heart, CloudSun, TreePine } from "lucide-react"

const aims = [
    { icon: ShieldCheck, text: "Driving resiliency in buildings, fit outs, and communities" },
    { icon: TrendingUp, text: "Contributing to market transformation and a sustainable economy" },
    { icon: Heart, text: "Enhancing our health and quality of life" },
    { icon: CloudSun, text: "Reducing the impact of climate change" },
    { icon: TreePine, text: "Restoring and protecting our planet's biodiversity and ecosystems" },
]

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
        desc: "Promote efficiency – it can reduce construction and ongoing performance costs significantly.",
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
        <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
            {/* Background pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(circle, hsl(145 63% 32%) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        What is WGBO?
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        What is World Green Building Organization (WGBO)?
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
                        World Green Building Organization (WGBO) meets the needs of the present without compromising the future
                    </p>
                </div>

                <div className="grid items-start gap-12 lg:grid-cols-5">
                    {/* Content — 3 cols */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 to-background p-8 shadow-sm md:p-10">
                            <p className="mb-5 text-base leading-[1.8] text-muted-foreground">
                                World Green Building Organization (WGBO) is an{" "}
                                <strong className="text-foreground">national recognised rating system</strong> setting the standard
                                for healthy, resilient, positive buildings and places. Developed for the national environment of sustainable
                                fit outs, buildings, homes and communities right across the country.
                            </p>
                            <p className="mb-5 text-base leading-[1.8] text-muted-foreground">
                                World Green Building Organization (WGBO) has a team of national and international{" "}
                                <strong className="text-foreground">Environmental, Social, and Governance professionals</strong> who have
                                academic knowledge and many years of practical experience in Environmental, Social, and Governance fields.
                            </p>
                        </div>

                        {/* Principles Cards */}
                        <div className="mt-8">
                            <h3 className="mb-6 font-heading text-xl font-bold text-foreground">
                                Buildings that are designed based on this principle:
                            </h3>
                            <div className="grid gap-6 md:grid-cols-3">
                                {principles.map((p, i) => (
                                    <div
                                        key={p.title}
                                        className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    >
                                        {/* Top gradient accent */}
                                        <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${p.gradient}`} />

                                        {/* Icon */}
                                        <div
                                            className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-lg`}
                                        >
                                            <p.icon className="h-7 w-7" />
                                        </div>

                                        <h4 className="mb-2 text-lg font-bold text-foreground">{p.title}</h4>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Aims — 2 cols */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                            <h3 className="mb-6 text-center font-heading text-xl font-bold text-foreground">Our Aims</h3>
                            <div className="space-y-4">
                                {aims.map((aim, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-start gap-4 rounded-xl bg-background p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <aim.icon className="h-5 w-5" />
                                        </div>
                                        <p className="text-sm leading-relaxed text-foreground">{aim.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
