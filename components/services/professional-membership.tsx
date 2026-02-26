"use client"

import { Shield, Check, FileText, Mail, ArrowRight } from "lucide-react"

const codePoints = [
    "Be responsible for ethical and professional conduct in relationships with clients, employers, associates, and the public.",
    "Be responsible for professional competence in performance of all professional activities.",
    "Be responsible for the protection of professional interest, reputation, and good name of any deserving WGBO member.",
    "Be dedicated to professional development of new members in the Sustainability and Environment profession.",
    "Be responsible for complete sincerity in professional service to the world.",
    "Be responsible for continuing improvement and development of professional competencies.",
    "Be responsible for professional efforts to support the WGBO motto.",
]

const evalDocs = [
    "Two Letters of Recommendations as to one's Sustainability and Environment abilities on the job",
    "Two Candidate Evaluations from colleagues, associates, or peers who know of one's abilities and successes",
    "Supporting documentation: professional memberships, industry certifications, registrations, educational transcripts, etc.",
]

export function ProfessionalMembership() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Professional
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                        Professional Membership
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm text-muted-foreground">
                        Being acknowledged as a Professional Member based on education, years of knowledge, and experience in the Sustainability and Environment field.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Professional Path */}
                    <div>
                        <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm">
                            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Becoming a Professional Member</h3>
                            <p className="mb-4 text-sm leading-[1.8] text-muted-foreground">
                                Not everyone has the degree sometimes required or enjoys classroom exams. By{" "}
                                <strong className="text-foreground">submission of work/career credentials, résumé, professional references, seminar certificates, education, and peer testimonies</strong>,
                                practitioners can become a WGBO Professional Member upon verification and approval.
                            </p>
                            <p className="mb-6 text-sm leading-[1.8] text-muted-foreground">
                                Professional Members are full-time practitioners performing activities in Sustainability and Environment fields. This membership gives a great opportunity to gain knowledge, network with other members, and attend our annual Symposium.
                            </p>

                            <h4 className="mb-3 text-sm font-bold text-foreground">Required Documentation</h4>
                            <ul className="space-y-2.5">
                                {evalDocs.map((doc, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                                            {i + 1}
                                        </div>
                                        <span className="text-xs leading-relaxed text-muted-foreground">{doc}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-5 text-xs text-muted-foreground">
                                Degrees should be in Sustainability, Environment, engineering, or other curricula acceptable to the WGBO Approval Board from approved and accredited institutions.
                            </p>

                            <p className="mt-4 rounded-lg bg-primary/5 p-3 text-xs text-muted-foreground">
                                Membership is open to <strong className="text-foreground">all individuals and entities</strong> regardless of race, color, creed, ideology, religion, social status, sex, or political beliefs.
                            </p>
                        </div>

                        {/* Apply */}
                        <div className="mt-6 rounded-xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] p-6 text-center shadow-lg">
                            <p className="text-sm font-bold text-white">Apply for Membership</p>
                            <p className="mt-1 text-xs text-white/70">Mail us to get the application form and fee details</p>
                            <a href="mailto:enquiry@wgbo.org.in" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-xs font-bold text-[hsl(145,63%,28%)]">
                                <Mail className="h-3.5 w-3.5" /> enquiry@wgbo.org.in
                            </a>
                        </div>
                    </div>

                    {/* Code of Conduct + Fees */}
                    <div>
                        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 shadow-sm">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                                    <Shield className="h-5 w-5" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-foreground">Professional Code of Conduct</h3>
                            </div>
                            <p className="mb-5 text-xs text-muted-foreground">
                                Members of WGBO, by virtue of their acceptance of membership, are bound to the following Code of Ethics:
                            </p>
                            <ul className="space-y-2.5">
                                {codePoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        <span className="text-xs leading-relaxed text-foreground">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 rounded-xl bg-primary/10 p-4 text-center">
                                <p className="font-serif text-sm font-bold italic text-primary">
                                    &ldquo;Making Go Green a Way of Life . . . Worldwide&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Fees */}
                        <div className="mt-6 rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                            <div className="mb-4 flex items-center gap-3">
                                <FileText className="h-5 w-5 text-primary" />
                                <h3 className="font-bold text-foreground">Membership Fees</h3>
                            </div>
                            <p className="mb-4 text-xs text-muted-foreground">
                                Upon successful admission, you may be eligible for prestigious titles such as AMWGBO, CMWGBO and PMWGBO after meeting additional criteria and paying the requisite fees.
                            </p>
                            <p className="text-xs text-muted-foreground">
                                For annual membership fees and latest discounted rates, contact:{" "}
                                <a href="mailto:enquiry@wgbo.org.in" className="font-semibold text-primary hover:underline">
                                    enquiry@wgbo.org.in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
