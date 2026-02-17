"use client"

import {
    Building2,
    ShieldCheck,
    Heart,
    CloudSun,
    TreePine,
    TrendingUp,
} from "lucide-react"

const aims = [
    { icon: ShieldCheck, text: "Driving resiliency in buildings, fit outs, and communities" },
    { icon: TrendingUp, text: "Contributing to market transformation and a sustainable economy" },
    { icon: Heart, text: "Enhancing our health and quality of life" },
    { icon: CloudSun, text: "Reducing the impact of climate change" },
    { icon: TreePine, text: "Restoring and protecting our planet's biodiversity and ecosystems" },
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
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Our Overview
                    </h2>
                </div>

                <div className="grid items-start gap-12 lg:grid-cols-5">
                    {/* Content — 3 cols */}
                    <div className="lg:col-span-3">
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

                            <p className="mb-5 text-base leading-[1.8] text-muted-foreground">
                                The <strong className="text-foreground">World Green Building Organization (WGBO)</strong>, part of the
                                World Safety Organization (WSO) India was formed in the year{" "}
                                <strong className="text-foreground">2022</strong>.
                            </p>
                            <p className="mb-5 text-base leading-[1.8] text-muted-foreground">
                                World Green Building Organization (WGBO) is an{" "}
                                <strong className="text-foreground">internationally recognised rating system</strong> setting the standard
                                for healthy, resilient, positive buildings and places. Developed for the national environment of sustainable
                                fit outs, buildings, homes and communities right across the country.
                            </p>
                            <p className="text-base leading-[1.8] text-muted-foreground">
                                WGBO has a team of national and international{" "}
                                <strong className="text-foreground">Environmental, Social, and Governance professionals</strong> who have
                                academic knowledge and many years of practical experience in Environmental, Social, and Governance fields.
                            </p>
                        </div>
                    </div>

                    {/* Aims — 2 cols */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                            <h3 className="mb-6 text-center font-serif text-xl font-bold text-foreground">Our Aims</h3>
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
