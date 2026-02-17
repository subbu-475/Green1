import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
    Users,
    Building2,
    Globe,
    Award,
    Download,
    CheckCircle,
    ArrowRight,
    Phone,
    Mail,
    Shield,
} from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Membership | World Green Building Organization",
    description:
        "Join WGBO as an individual or organisational member. Access green building resources, training, certification, and be part of the global sustainability movement.",
}

const membershipTypes = [
    {
        icon: Users,
        title: "Individual Membership",
        description:
            "For professionals, architects, engineers, sustainability consultants, and students passionate about green buildings and sustainable development.",
        benefits: [
            "Access to WGBO training programmes and workshops",
            "Participation in WGBO events and conferences",
            "Networking with industry professionals worldwide",
            "WGBO membership certificate and ID",
            "Discounts on WGBO certification courses",
            "Access to green building resources and publications",
        ],
        color: "bg-emerald-50 border-emerald-200",
        iconColor: "bg-emerald-100 text-emerald-700",
    },
    {
        icon: Building2,
        title: "Organisational Membership",
        description:
            "For companies, institutions, builders, developers, and organisations committed to sustainable construction and green building practices.",
        benefits: [
            "Company listing on WGBO member directory",
            "Priority access to project certification",
            "Multiple employee participation in WGBO events",
            "Use of WGBO member logo on company materials",
            "Access to industry reports and market insights",
            "Partnership opportunities on green initiatives",
        ],
        color: "bg-sky-50 border-sky-200",
        iconColor: "bg-sky-100 text-sky-700",
    },
    {
        icon: Globe,
        title: "Chapters",
        description:
            "Regional and city-level chapters that drive the green building movement at a local level through community engagement, events, and advocacy.",
        benefits: [
            "Establish local green building community",
            "Organise regional events and workshops",
            "Represent WGBO in your region",
            "Access to WGBO resources and speaker network",
            "Collaborate on local policy advocacy",
            "Participate in national-level green initiatives",
        ],
        color: "bg-amber-50 border-amber-200",
        iconColor: "bg-amber-100 text-amber-700",
    },
]

const whyJoin = [
    {
        icon: Award,
        title: "Global Recognition",
        description: "Be part of a globally recognised organisation driving sustainable development.",
    },
    {
        icon: Shield,
        title: "Professional Growth",
        description: "Access world-class training, certification, and career advancement in green building.",
    },
    {
        icon: Users,
        title: "Networking",
        description: "Connect with professionals, companies, and governments across the sustainability ecosystem.",
    },
    {
        icon: Globe,
        title: "Global Impact",
        description: 'Contribute to the mission of "Making Green Go a Way of Life… Worldwide."',
    },
]

export default function MembershipPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-primary via-primary/90 to-emerald-800 py-20 text-primary-foreground">
                    <div className="absolute inset-0 bg-[url('/images/hero-1-v3.jpg')] bg-cover bg-center opacity-10" />
                    <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                            <Users className="h-10 w-10" />
                        </div>
                        <h1 className="font-serif text-4xl font-bold md:text-5xl">Become a Member</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                            Join the World Green Building Organization and be part of the global movement for sustainable construction and a greener future.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="/images/WGBO Membership Form.docx"
                                download
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
                            >
                                <Download className="h-4 w-4" />
                                Download Membership Form
                            </a>
                            <a
                                href="#membership-types"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                            >
                                Explore Membership Types
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Why Join */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-10 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
                            Why Join <span className="text-primary">WGBO?</span>
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {whyJoin.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
                                >
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                        <item.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Membership Types */}
                <section id="membership-types" className="bg-secondary py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <h2 className="mb-10 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
                            Membership <span className="text-primary">Types</span>
                        </h2>
                        <div className="grid gap-8 lg:grid-cols-3">
                            {membershipTypes.map((type) => (
                                <div
                                    key={type.title}
                                    className={`flex flex-col rounded-2xl border-2 bg-background p-8 shadow-sm transition-all hover:shadow-lg ${type.color}`}
                                >
                                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${type.iconColor}`}>
                                        <type.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-foreground">{type.title}</h3>
                                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{type.description}</p>
                                    <div className="mb-6 space-y-3">
                                        {type.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                <span className="text-sm text-foreground/80">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href="/images/WGBO Membership Form.docx"
                                        download
                                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download Form
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Apply */}
                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="mb-10 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
                            How to <span className="text-primary">Apply</span>
                        </h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                                    1
                                </div>
                                <h3 className="mb-2 font-bold text-foreground">Download Form</h3>
                                <p className="text-sm text-muted-foreground">
                                    Download the WGBO Membership Form and fill in your details.
                                </p>
                            </div>
                            <div className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                                    2
                                </div>
                                <h3 className="mb-2 font-bold text-foreground">Submit Application</h3>
                                <p className="text-sm text-muted-foreground">
                                    Email the completed form to membership@wgbo.org.in or send it to our office.
                                </p>
                            </div>
                            <div className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                                    3
                                </div>
                                <h3 className="mb-2 font-bold text-foreground">Get Approved</h3>
                                <p className="text-sm text-muted-foreground">
                                    Our team will review your application and welcome you to the WGBO community.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
                            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Ready to Join?</h3>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="/images/WGBO Membership Form.docx"
                                    download
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                >
                                    <Download className="h-4 w-4" />
                                    Download Membership Form
                                </a>
                                <a
                                    href="mailto:membership@wgbo.org.in"
                                    className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                                >
                                    <Mail className="h-4 w-4" />
                                    membership@wgbo.org.in
                                </a>
                                <a
                                    href="tel:+917200193771"
                                    className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                                >
                                    <Phone className="h-4 w-4" />
                                    +91-7200193771
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground">
                                Send your completed form to: WGBO-WSO, 715-A, 7th Floor, Spencer Plaza Mall, Anna Salai, Chennai, Tamil Nadu 600002
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
