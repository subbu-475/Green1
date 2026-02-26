"use client"

import {
    Users,
    Award,
    BookOpen,
    BadgePercent,
    GraduationCap,
    ScrollText,
    Network,
    Check,
    Mail,
} from "lucide-react"

const benefits = [
    { icon: Network, text: "Professional network system — request assistance from individuals, organisations, or countries" },
    { icon: Award, text: "Membership certificate for office display and identification card" },
    { icon: ScrollText, text: "Certificate of Honorary Membership for corporations paying membership/certification fees" },
    { icon: BookOpen, text: "Receive WGBO Newsletters, Tech-Letters, and membership publications" },
    { icon: BadgePercent, text: "Discount on subscription for the semi-annual World Green Building Organization Journal" },
    { icon: GraduationCap, text: "Reduced fees at seminars, conferences, and classes — local, regional, and international" },
    { icon: Award, text: "Certificates of Attendance and Completion for courses and conferences" },
]

export function MembershipOverview() {
    return (
        <section id="membership" className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Membership
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Membership &amp; Benefits
                    </h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-5">
                    {/* Overview Text — 3 cols */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">Why Join WGBO?</h3>
                            </div>

                            <div className="space-y-4 text-sm leading-[1.8] text-muted-foreground">
                                <p>
                                    Becoming a member of World Green Building Organization (WGBO) is an exciting opportunity for organisations to{" "}
                                    <strong className="text-foreground">showcase their commitment to sustainability</strong> and gain recognition as leaders in the green building industry.
                                </p>
                                <p>
                                    By joining, organisations can network with like-minded professionals, collaborate on sustainability initiatives, and contribute to shaping the future of sustainable building practices.
                                </p>
                                <p>
                                    We welcome organisations of <strong className="text-foreground">any size and sector</strong> that want to make our buildings, cities and communities better places to live, work and play.
                                </p>
                            </div>
                        </div>

                        {/* Join CTA */}
                        <div className="mt-6 rounded-2xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] p-6 shadow-xl md:p-8">
                            <h3 className="mb-2 text-lg font-bold text-white">Join WGBO</h3>
                            <p className="mb-4 text-sm text-white/70">
                                WGBO can assist you in the application process. ONLY full-time practitioners in the Environment, Social, Sustainability and allied fields are eligible for Affiliate Membership.
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                <a href="mailto:enquiry@wgbo.org.in" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[hsl(145,63%,28%)] transition-transform hover:scale-105">
                                    <Mail className="h-4 w-4" /> enquiry@wgbo.org.in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Benefits — 2 cols */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                            <h3 className="mb-6 text-center font-serif text-xl font-bold text-foreground">Membership Benefits</h3>
                            <div className="space-y-3">
                                {benefits.map((b, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-start gap-3 rounded-xl bg-background p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Check className="h-3.5 w-3.5 text-primary" />
                                        </div>
                                        <p className="text-xs leading-relaxed text-foreground">{b.text}</p>
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
