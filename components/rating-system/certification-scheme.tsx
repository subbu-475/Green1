"use client"

import { Award, Mail, Check } from "lucide-react"

const infoItems = [
    "Information about the WGBO certification scheme, certification procedures and fee structures.",
    "Procedures for granting, maintaining, extending or reducing the scope of, suspending, withdrawing or refusing certification.",
    "Information related to the requirements, restrictions or limitations on the use of the WGBO mark, and methods to refer to the WGBO certification granted.",
    "Information about procedures for handling complaints and appeals, as well as how to submit one.",
]

export function CertificationScheme() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Certification
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        World Green Building Organization (WGBO) Certification Scheme
                    </h2>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">Certification Scheme</h3>
                        </div>

                        <div className="space-y-4 text-sm leading-[1.8] text-muted-foreground">
                            <p>
                                The WGBO certification scheme advances the built environment to one that is <strong className="text-foreground">greener and more carbon-efficient</strong> while facilitating sustainable procurement. The certification ensures that sustainability is integrated throughout the design and manufacturing process of products.
                            </p>
                            <p>
                                While the WSO INDIA is the owner of the WGBO certification scheme, its wholly owned subsidiary, WGBO is the certification body responsible for the evaluation of WGBO applications. Stakeholders may reach out to WGBO at{" "}
                                <a href="mailto:enquiry@wgbo.org.in" className="font-semibold text-primary hover:underline">enquiry@wgbo.org.in</a>{" "}
                                to request for any of the following information:
                            </p>
                        </div>

                        <ul className="mt-6 space-y-3">
                            {infoItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <Check className="h-3 w-3 text-primary" />
                                    </div>
                                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
