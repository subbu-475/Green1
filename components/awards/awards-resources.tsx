"use client"

import { FileText, Download, BookOpen, Scale, ArrowRight } from "lucide-react"

const resources = [
    {
        icon: FileText,
        title: "Awards Application Form",
        desc: "World Green Building Organization (State) Level Awards Application Form",
        action: "Download Form",
    },
    {
        icon: BookOpen,
        title: "Awards Brochure",
        desc: "World Green Building Organization (State) Level Awards Brochure",
        action: "View Brochure",
    },
    {
        icon: Download,
        title: "International Symposium",
        desc: "World Green Building Organization International Symposium details and resources",
        action: "Learn More",
    },
    {
        icon: Scale,
        title: "Terms & Conditions",
        desc: "World Green Building Organization Award Terms & Conditions",
        action: "Read Terms",
    },
]

export function AwardsResources() {
    return (
        <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Resources
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl">
                        Awards Resources &amp; Documents
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {resources.map((r) => (
                        <div
                            key={r.title}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Icon header */}
                            <div className="flex h-36 items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background shadow-lg transition-transform group-hover:scale-110">
                                    <r.icon className="h-8 w-8 text-primary" />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-2 text-base font-bold text-foreground">{r.title}</h3>
                                <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                                >
                                    {r.action}
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
