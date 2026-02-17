"use client"

import {
    Globe,
    BookOpen,
    Mail,
    Share2,
    Monitor,
    FileText,
    Award,
    Film,
    Mic,
    Image,
    LayoutGrid,
    Flag,
    Check,
} from "lucide-react"

const promotionChannels = [
    { icon: Globe, text: "National community" },
    { icon: BookOpen, text: "WGBO e-magazine" },
    { icon: Mail, text: "Digital contacts via eNewsletter" },
    { icon: Share2, text: "Social media networks" },
    { icon: Monitor, text: "Website visitors" },
]

const sponsorBenefits = [
    { icon: FileText, text: "Promotional materials / corporate brochures in the documentation kit" },
    { icon: Award, text: "Logo in the thanking sponsor board – size varies by sponsorship category" },
    { icon: Film, text: "Corporate film during break hours" },
    { icon: Flag, text: "Accord the status of sponsorship at the Award Ceremony" },
    { icon: Globe, text: "Accord the status of sponsorship at the WGBO Website" },
    { icon: Mic, text: "Speaking opportunity at the Award Ceremony" },
    { icon: Image, text: "Advertisement banner on the website" },
    { icon: LayoutGrid, text: "Table space to display products / brochures" },
    { icon: Flag, text: "Opportunity to keep a company standee at the venue" },
]

export function SponsorshipBenefits() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Benefits
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                        Sponsor Benefits &amp; Promotion
                    </h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Promotion Channels */}
                    <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm">
                        <h3 className="mb-2 font-serif text-xl font-bold text-foreground">Promotion Networks</h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                            Awards are promoted via our extended networks including:
                        </p>
                        <div className="space-y-3">
                            {promotionChannels.map((ch) => (
                                <div key={ch.text} className="group flex items-center gap-4 rounded-xl border border-border/40 bg-secondary/40 p-4 transition-all hover:border-primary/30 hover:bg-secondary">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <ch.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{ch.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sponsor Benefits */}
                    <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/5 to-background p-8 shadow-sm">
                        <h3 className="mb-6 font-serif text-xl font-bold text-foreground">Sponsor Deliverables</h3>
                        <ul className="space-y-3">
                            {sponsorBenefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                                        <Check className="h-3.5 w-3.5 text-amber-600" />
                                    </div>
                                    <span className="text-sm leading-relaxed text-foreground">{b.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(38,80%,45%)] p-8 text-center shadow-xl md:p-10">
                    <p className="font-serif text-xl font-bold text-white md:text-2xl">
                        Interested in Sponsorship?
                    </p>
                    <p className="mt-3 text-sm text-white/70">
                        For sponsorship inquiry, please contact us.
                    </p>
                    <a
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-[hsl(145,63%,28%)] shadow-lg transition-transform hover:scale-105"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    )
}
