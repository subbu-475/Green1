"use client"

import { GraduationCap, UserPlus, Users, Award, Crown, Shield } from "lucide-react"

const levels = [
    {
        icon: GraduationCap,
        title: "Student Membership of WGBO (SWGBO)",
        who: "Starting your career in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability? Student membership gives you everything you need to succeed.",
        detail: "Join if you're studying in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability or in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability apprentice.",
        color: "from-cyan-500 to-blue-500",
    },
    {
        icon: UserPlus,
        title: "Associate Membership of WGBO (AMWGBO)",
        who: "Interested in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability but not sure where to start? Associate membership gives you everything you need to explore the profession and build your career.",
        detail: "You can join if you're interested in WGBO but don't yet have the qualifications or experience for Affiliate membership. This is your starting point if you're changing careers, working in a related role, or building experience before progressing to higher grades.",
        color: "from-emerald-500 to-teal-500",
    },
    {
        icon: Users,
        title: "Affiliate Membership of WGBO (AMWGBO)",
        who: "Ready to lead Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability in your organisation?",
        detail: "You can apply if you have a degree in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability and at least two years of professional experience. You'll also need to show your continuing professional development (CPD).",
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: Award,
        title: "Chartered Member of WGBO (CMWGBO)",
        who: "CMWGBO stands for Chartered Member of World Green Building Organization. It shows you meet professional standards in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability that are recognised internationally.",
        detail: "Chartered membership is for experienced professionals with at least three years in senior roles. You'll need to demonstrate professional competence and hold relevant qualifications. When you achieve Chartered status, you can use the CMWGBO post-nominal letters.",
        color: "from-violet-500 to-purple-500",
    },
    {
        icon: Crown,
        title: "Chartered Professional Member of WGBO (CPMWGBO)",
        who: "CPMWGBO stands for Chartered Professional of WGBO. It's the profession's highest grade, recognising exceptional contribution and leadership in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability.",
        detail: "Chartered Professional status is for established leaders who have made outstanding contributions to the profession. You'll need at least five years as a Chartered Member and be able to show thought leadership, professional influence and sustained impact beyond your own organisation. When you achieve Chartered Professional status, you can use the CPMWGBO post-nominal letters.",
        color: "from-yellow-400 to-amber-500",
    },
]

export function MembershipLevels() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Levels
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Membership Levels
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
                        Member of the World Green Building Organization (WGBO) get certification in the fields of engineering in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability and provide professional title such as AMWGBO, CMWGBO &amp; PMWGBO
                    </p>
                </div>

                {/* Professional Membership Intro */}
                <div className="mx-auto mb-12 max-w-4xl">
                    <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm md:p-10">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">Become a World Green Building Organization (WGBO) Professional Member</h3>
                        </div>
                        <div className="space-y-4 text-sm leading-[1.8] text-muted-foreground">
                            <p>
                                Being acknowledged as a Professional Member of a Sustainability and Environment organization based upon one&apos;s education, years of knowledge, and experience in the Sustainability and Environment field is a goal for many to achieve. Not everyone has the college or university degree that is sometimes required to compete for an advanced level Sustainability and Environment Professionals Certification. Not everyone enjoys the environment of classroom training and potentially taking the computer-type exam, which doesn&apos;t always show one&apos;s true abilities in Sustainability and Environment management and/or practice.
                            </p>
                            <p>
                                There are many Sustainability and Environment Directors, Sustainability and Environment Coordinators, and Sustainability and Environment Specialists in the Sustainability and Environment arena who have many years of experience but lack the mathematical expertise to pass a specific Sustainability and Environment certification exam. However, by a submission of one&apos;s work/career credentials, résumé, professional references, Sustainability and Environment seminar certificates, Sustainability and Environment education, and several testimonies from peers showing his/her elite level, Sustainability and Environment practitioners and professionals can become a World Green Building Organization (WGBO) Professional Member upon verification and approval.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Level Cards */}
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
