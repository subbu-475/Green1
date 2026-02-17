"use client"

import { Star, Check, Award, DollarSign, BarChart3, Heart, Building2 } from "lucide-react"

const certLevels = [
    { stars: 1, level: "Certificate", points: "30–40", recognition: "Good Performance", color: "from-stone-400 to-stone-500" },
    { stars: 2, level: "Bronze", points: "41–50", recognition: "Very Good Performance", color: "from-amber-700 to-amber-800" },
    { stars: 3, level: "Silver", points: "51–70", recognition: "Outstanding Performance", color: "from-slate-400 to-slate-500" },
    { stars: 4, level: "Gold", points: "71–90", recognition: "National Excellence", color: "from-yellow-400 to-amber-500" },
    { stars: 5, level: "Platinum", points: "91–100", recognition: "National Leadership", color: "from-cyan-400 to-teal-500" },
]

const benefits = [
    { icon: DollarSign, text: "Lower operating costs" },
    { icon: BarChart3, text: "Reduced carbon footprints" },
    { icon: Heart, text: "Enhanced health for occupants" },
    { icon: Building2, text: "Higher property values" },
]

const categories = [
    "Location & Transportation",
    "Sustainable Sites",
    "Water Efficiency",
    "Energy & Atmosphere",
    "Materials & Resources",
    "Indoor Environmental Quality",
    "Innovation",
]

export function WGBOCertification() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            {/* Decorative */}
            <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Certification
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Key Aspects of WGBO Certification
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
                        To promote sustainable, environmentally friendly, and energy-efficient building practices. Applies to almost
                        all project types, including new construction, interior fit-outs, existing building operations, homes, and
                        neighborhoods.
                    </p>
                </div>

                {/* Certification Levels Table */}
                <div className="mx-auto mb-16 max-w-4xl">
                    <h3 className="mb-6 text-center font-serif text-xl font-bold text-foreground">Certification Levels</h3>
                    <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">
                            <span>Star Rating</span>
                            <span>Certificate Level</span>
                            <span>Credit Points</span>
                            <span>Recognition</span>
                        </div>
                        {/* Table Rows */}
                        {certLevels.map((row) => (
                            <div
                                key={row.level}
                                className="grid grid-cols-4 items-center border-t border-border/40 bg-background px-6 py-4 text-sm transition-colors hover:bg-secondary/60"
                            >
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < row.stars ? "fill-amber-400 text-amber-400" : "text-border"}`}
                                        />
                                    ))}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`inline-block h-3 w-3 rounded-full bg-gradient-to-r ${row.color}`}
                                    />
                                    <span className="font-medium text-foreground">{row.level}</span>
                                </div>
                                <span className="text-muted-foreground">{row.points}</span>
                                <span className="text-muted-foreground">{row.recognition}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories & Benefits */}
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Categories Evaluated */}
                    <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm">
                        <h3 className="mb-6 font-serif text-xl font-bold text-foreground">Categories Evaluated</h3>
                        <p className="mb-5 text-sm text-muted-foreground">
                            Project teams must meet mandatory prerequisites and select optional credits to earn points across these
                            categories:
                        </p>
                        <ul className="space-y-3">
                            {categories.map((cat) => (
                                <li key={cat} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <Check className="h-3.5 w-3.5 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{cat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 shadow-sm">
                        <h3 className="mb-6 font-serif text-xl font-bold text-foreground">Benefits</h3>
                        <div className="space-y-5">
                            {benefits.map((b) => (
                                <div key={b.text} className="group flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <b.icon className="h-6 w-6" />
                                    </div>
                                    <span className="text-base font-medium text-foreground">{b.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Achievement Badge */}
                        <div className="mt-8 flex items-start gap-4 rounded-xl bg-primary/10 p-5">
                            <Award className="mt-0.5 h-8 w-8 shrink-0 text-primary" />
                            <p className="text-sm leading-relaxed text-foreground">
                                WGBO Certification serves as a <strong>nationally recognized symbol</strong> of sustainability
                                achievement and leadership in the construction industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
