"use client"

import { Building2, Globe, Users, Shield } from "lucide-react"

export function WSOHistory() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-28">
            {/* Subtle background pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: "radial-gradient(circle, hsl(145 63% 32%) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Our History
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        World Safety Organization{" "}
                        <span className="text-primary">(WSO)</span>
                    </h2>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/50 to-background p-8 shadow-sm md:p-10">
                            {/* Decorative accent */}
                            <div className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-primary" />

                            <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                                In <strong className="text-foreground">1975</strong> the WSO was incorporated as a{" "}
                                <strong className="text-foreground">not-for-profit, non-governmental, non-religious, civic entity</strong>{" "}
                                in the Philippines, and started to work with safety professionals around the world on the promotion of the
                                organization, development of programs, etc.
                            </p>
                            <p className="mt-5 text-base leading-[1.8] text-muted-foreground md:text-lg">
                                Conferences, seminars, congresses, and small classes/courses were given through the years in the{" "}
                                <strong className="text-foreground">Pacific Rim Countries</strong>.
                            </p>
                        </div>

                        {/* Purpose Cards */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Shield,
                                    title: "Protect",
                                    desc: "People, property, resources & environment",
                                },
                                {
                                    icon: Globe,
                                    title: "Promote",
                                    desc: "Safety as a way of life worldwide",
                                },
                                {
                                    icon: Users,
                                    title: "Collaborate",
                                    desc: "Safety professionals globally",
                                },
                                {
                                    icon: Building2,
                                    title: "Develop",
                                    desc: "Programs & certifications",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="group rounded-xl border border-border/50 bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                                >
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Visual */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10" />

                            {[
                                {
                                    year: "1975",
                                    title: "WSO Founded",
                                    desc: "Incorporated as a not-for-profit entity in the Philippines to work with global safety professionals.",
                                },
                                {
                                    year: "1980s",
                                    title: "Pacific Rim Expansion",
                                    desc: "Conferences, seminars, and courses delivered across Pacific Rim Countries.",
                                },
                                {
                                    year: "2000s",
                                    title: "Global Programs",
                                    desc: "Development of comprehensive safety programs and certifications for worldwide adoption.",
                                },
                                {
                                    year: "2022",
                                    title: "WGBO Established",
                                    desc: "World Green Building Organization formed as part of WSO India to drive sustainable building practices.",
                                },
                            ].map((milestone, i) => (
                                <div
                                    key={milestone.year}
                                    className="group relative mb-10 pl-20 last:mb-0"
                                    style={{ animationDelay: `${i * 150}ms` }}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[22px] top-1 flex h-[25px] w-[25px] items-center justify-center rounded-full border-[3px] border-primary bg-background transition-colors group-hover:bg-primary">
                                        <div className="h-2 w-2 rounded-full bg-primary transition-colors group-hover:bg-white" />
                                    </div>

                                    {/* Year Badge */}
                                    <span className="mb-2 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-lg font-bold text-foreground">{milestone.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{milestone.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
