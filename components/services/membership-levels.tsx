"use client"

import { GraduationCap, UserPlus, Users, Award, Crown } from "lucide-react"

const levels = [
    {
        icon: GraduationCap,
        title: "Student (SWGBO)",
        who: "Students studying in Environmental Safety and Health, Environment Social and Governance, or Environmental Sustainability.",
        detail: "No cost as long as you provide annual documentation of full-time student status. Submit résumé/CV and student documentation.",
        color: "from-cyan-500 to-blue-500",
    },
    {
        icon: UserPlus,
        title: "Associate (AMWGBO)",
        who: "Interested in sustainability but not sure where to start? For those changing careers, working in related roles, or building experience.",
        detail: "Your starting point — no qualifications or experience for Affiliate membership required yet. Everything you need to explore the profession.",
        color: "from-emerald-500 to-teal-500",
    },
    {
        icon: Users,
        title: "Affiliate (AMWGBO)",
        who: "Ready to lead sustainability in your organisation. Degree + at least 2 years of professional experience required.",
        detail: "You'll need to show continuing professional development (CPD). Full-time practitioners in Environment, Social, Sustainability and allied fields.",
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: Award,
        title: "Chartered Member (CMWGBO)",
        who: "Experienced professionals with at least 3 years in senior roles. Recognised internationally.",
        detail: "Demonstrate professional competence and hold relevant qualifications. Use CMWGBO post-nominal letters after your name.",
        color: "from-violet-500 to-purple-500",
    },
    {
        icon: Crown,
        title: "Chartered Professional (CPMWGBO)",
        who: "The profession's highest grade — established leaders who've made outstanding contributions.",
        detail: "At least 5 years as a Chartered Member. Show thought leadership, professional influence and sustained impact beyond your organisation. Use CPMWGBO post-nominal letters.",
        color: "from-yellow-400 to-amber-500",
    },
]

export function MembershipLevels() {
    return (
        <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Levels
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl">
                        Membership Levels
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
                        Members receive certification in Environmental Safety &amp; Health, Environment Social &amp; Governance, or Environmental Sustainability with professional titles.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {levels.map((lvl) => (
                        <div
                            key={lvl.title}
                            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Top gradient accent */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${lvl.color}`} />

                            <div className="p-7">
                                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${lvl.color} text-white shadow-lg`}>
                                    <lvl.icon className="h-7 w-7" />
                                </div>

                                <h3 className="mb-2 text-lg font-bold text-foreground">{lvl.title}</h3>

                                <div className="mb-3 rounded-lg bg-secondary/60 p-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Who is it for?</p>
                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{lvl.who}</p>
                                </div>

                                <p className="text-xs leading-relaxed text-muted-foreground">{lvl.detail}</p>
                            </div>
                        </div>
                    ))}

                    {/* Additional types card */}
                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-7 text-center">
                        <p className="mb-3 text-sm font-bold text-foreground">Also available</p>
                        <ul className="space-y-1.5 text-xs text-muted-foreground">
                            <li>Institutional Member</li>
                            <li>Industry / Company Member</li>
                        </ul>
                        <a href="mailto:enquiry@wgbo.org.in" className="mt-5 text-sm font-semibold text-primary hover:underline">
                            Contact for details →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
