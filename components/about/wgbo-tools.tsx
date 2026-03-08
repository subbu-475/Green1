"use client"

import { CloudSun, Heart, TreePine, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react"

const toolAims = [
    { icon: CloudSun, text: "Reduce the impact of climate change." },
    { icon: Heart, text: "Enhance our health and quality of life." },
    { icon: TreePine, text: "Restore and protect our planet's biodiversity and ecosystems." },
    { icon: ShieldCheck, text: "Driving resilience in buildings, fitouts, and communities." },
    { icon: TrendingUp, text: "Contributing to market transformation and a sustainable economy." },
]

export function WGBOTools() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-28">
            {/* Background pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(45deg, hsl(145 63% 32%) 25%, transparent 25%), linear-gradient(-45deg, hsl(145 63% 32%) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(145 63% 32%) 75%), linear-gradient(-45deg, transparent 75%, hsl(145 63% 32%) 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Our Tools
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        What is World Green Building Organization (WGBO)?
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
                        Our World Green Building Organization (WGBO) tools offer a framework of best practice benchmarks for sustainable construction.
                    </p>
                </div>

                {/* Description */}
                <div className="mx-auto mb-12 max-w-4xl">
                    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                        <p className="text-base leading-[1.8] text-muted-foreground">
                            World Green Building Organization (WGBO) national trusted mark of quality for the design, construction and operation of sustainable buildings, fit-outs and communities.
                        </p>
                        <p className="mt-4 text-sm font-semibold text-foreground">The tools aim to:</p>
                    </div>
                </div>

                {/* Tools Aims */}
                <div className="mx-auto max-w-4xl">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {toolAims.map((aim, i) => (
                            <div
                                key={i}
                                className="group relative flex items-start gap-4 rounded-xl border border-border/50 bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <aim.icon className="h-5 w-5" />
                                </div>
                                <p className="text-sm leading-relaxed text-foreground">{aim.text}</p>
                            </div>
                        ))}

                        {/* CTA Card */}
                        <div className="group flex items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-5 transition-colors hover:border-primary/50 hover:bg-primary/10">
                            <a href="/contact" className="flex items-center gap-2 text-sm font-semibold text-primary">
                                Learn about the benefits
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
