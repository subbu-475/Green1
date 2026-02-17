"use client"

import {
    Lightbulb,
    TrendingUp,
    BadgePercent,
    Award,
    Users,
    Bell,
    BookOpen,
    Check,
    RefreshCw,
    Layers,
    FileText,
} from "lucide-react"

const benefits = [
    { icon: Lightbulb, text: "Understand the drivers of green building and equip yourself with key knowledge on design strategies" },
    { icon: TrendingUp, text: "Career profiling in the Sustainability sector, opening opportunities for engagement and collaboration" },
    { icon: BadgePercent, text: "Preferential rates and exclusive access to built environment sustainability-focused events and courses" },
    { icon: Award, text: "Recognition of built environment sustainability knowledge, expertise and experience" },
    { icon: FileText, text: "Designation as the Responsible Person for World Green Star submissions (WGSAPs and WGSAAPs)" },
    { icon: Layers, text: "Accrual of additional points in World Green Star project score through WGSAP/WGSAAP participation" },
    { icon: Users, text: "Career profiling in the Sustainability Professionals community" },
    { icon: Bell, text: "Timely updates on key industry developments, policy announcements, and technology advancements" },
    { icon: BookOpen, text: "Opportunities to contribute to the development of industry standards and share knowledge at events" },
]

const cpdPoints = [
    { level: "WGSA", points: "10 CPD points", color: "bg-cyan-500" },
    { level: "WGSAP", points: "20 CPD points", color: "bg-emerald-500" },
    { level: "WGSAAP", points: "30 CPD points", color: "bg-amber-500" },
]

const renewalMethods = [
    "Involvement in World Green Star projects",
    "Learning & Development activities organised by WGBO, local industry associations, institutes of higher learning, government agencies and approved course providers",
    "Learning & Development activities organised by partner World Green Building Organizations (GBCs), such as the World Safety Organization India (WSO I)",
]

const certResources = [
    { title: "Certification Application", desc: "Download the official certification application form" },
    { title: "Candidate Evaluation", desc: "Four evaluations for WGBO-CSI; two for all other certifications" },
    { title: "Examination Proctor Policy", desc: "Policy and procedure for examination proctoring" },
    { title: "Awards Nomination Brochure", desc: "WGBO Awards Nomination Brochure for the Symposium" },
]

export function AccreditationBenefits() {
    return (
        <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Benefits &amp; CPD
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                        Accreditation Benefits &amp; CPD
                    </h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Benefits */}
                    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 shadow-sm">
                        <h3 className="mb-6 font-serif text-xl font-bold text-foreground">Accreditation Benefits</h3>
                        <ul className="space-y-3">
                            {benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <Check className="h-3 w-3 text-primary" />
                                    </div>
                                    <span className="text-xs leading-relaxed text-foreground">{b.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CPD */}
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm">
                            <div className="mb-5 flex items-center gap-3">
                                <RefreshCw className="h-5 w-5 text-primary" />
                                <h3 className="font-serif text-xl font-bold text-foreground">Continuing Professional Development</h3>
                            </div>
                            <p className="mb-6 text-sm leading-[1.8] text-muted-foreground">
                                CPD is enabled by a robust learning and development framework comprising technical seminars, webinars, learning journeys, conferences and training courses. WGBO cross-recognises relevant activities with other industry associations for mutual CPD accreditation.
                            </p>

                            {/* CPD Points */}
                            <div className="mb-6 grid grid-cols-3 gap-3">
                                {cpdPoints.map((c) => (
                                    <div key={c.level} className="rounded-xl border border-border/40 bg-secondary/40 p-4 text-center">
                                        <div className={`mx-auto mb-2 h-3 w-3 rounded-full ${c.color}`} />
                                        <p className="text-lg font-bold text-foreground">{c.points.split(" ")[0]}</p>
                                        <p className="text-xs text-muted-foreground">{c.level}</p>
                                    </div>
                                ))}
                            </div>

                            <h4 className="mb-3 text-sm font-bold text-foreground">Renewal Methods</h4>
                            <ul className="space-y-2">
                                {renewalMethods.map((m, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        <span className="text-xs leading-relaxed text-muted-foreground">{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                            <h4 className="mb-4 font-bold text-foreground">Certification &amp; Symposium Resources</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {certResources.map((r) => (
                                    <a
                                        key={r.title}
                                        href="#"
                                        className="group rounded-xl border border-border/40 bg-secondary/30 p-4 transition-all hover:border-primary/30 hover:bg-secondary"
                                    >
                                        <p className="text-xs font-bold text-foreground group-hover:text-primary">{r.title}</p>
                                        <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">{r.desc}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
