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
} from "lucide-react"

const benefits = [
    { icon: Network, text: "The World Green Building Organization (WGBO) provides a network system to its members whereby professional assistance may be requested by an individual, organization, state, or country on a personal basis. Members needing assistance may write directly to the World Green Building Organization (WGBO) with a specific request, and we will try to link the requester with a person, organization, or resource which may be of assistance." },
    { icon: Award, text: "The World Green Building Organization (WGBO) provides all members with a membership certificate for display on their office wall and an identification card." },
    { icon: ScrollText, text: "The World Green Building Organization (WGBO) awards a Certificate of Honorary Membership to the corporations, companies, and other entities paying the World Green Building Organization (WGBO) membership and/or World Green Building Organization (WGBO) certification fees for their employees." },
    { icon: BookOpen, text: "The World Green Building Organization (WGBO) members (active) receive World Green Building Organization (WGBO) News-Letters, World Green Building Organization (WGBO) Tech-Letters, and other membership publications of the World Green Building Organization (WGBO)." },
    { icon: BadgePercent, text: "The World Green Building Organization (WGBO) members receive a discount on the subscription for the semi-annual publication of the World Green Building Organization Journal, published by the World Green Building Organization (WGBO)." },
    { icon: GraduationCap, text: "The World Green Building Organization (WGBO) members are entitled to reduced fees at seminars, conferences, and classes given by the World Green Building Organization (WGBO). This includes local, regional, and international programs. When Continuing Education Units are applicable, an appropriate certificate is issued." },
    { icon: Award, text: "The World Green Building Organization (WGBO) members who attend conferences, seminars, and classes receive a Certificate of Attendance from the World Green Building Organization (WGBO). For individuals attending courses sponsored by the World Green Building Organization (WGBO), a Certificate of Completion is issued upon completion of the course(s)." },
]

export function MembershipBenefits() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Membership
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        Membership Benefits
                    </h2>
                </div>

                {/* Overview text */}
                <div className="mx-auto mb-12 max-w-4xl">
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
                                By joining the World Green Building Organization (WGBO), organisations can network with like-minded professionals, collaborate on sustainability initiatives, and contribute to shaping the future of sustainable building practices.
                            </p>
                            <p>
                                We welcome organisations of <strong className="text-foreground">any size and sector</strong> that want to make our buildings, cities and communities better places to live, work and play.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits List */}
                <div className="mx-auto max-w-4xl space-y-4">
                    {benefits.map((b, i) => (
                        <div
                            key={i}
                            className="group flex items-start gap-4 rounded-xl border border-border/50 bg-background p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                <Check className="h-4 w-4 text-primary" />
                            </div>
                            <p className="text-sm leading-relaxed text-foreground">{b.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
