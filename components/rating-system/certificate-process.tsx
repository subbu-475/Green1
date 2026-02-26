"use client"

import { Clock, Mail } from "lucide-react"

export function CertificateProcess() {
    return (
        <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Process
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                        WGBO Certificates Process &amp; Criteria
                    </h2>
                </div>

                <div className="space-y-8">
                    {/* Process */}
                    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                                <Clock className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-foreground">Certification Timeline</h3>
                        </div>
                        <p className="mb-6 text-sm leading-[1.8] text-muted-foreground">
                            Project teams must meet mandatory prerequisites and select optional credits to earn points.
                            The time taken to complete the certification process varies and depends on how well-prepared companies are with the required test reports and other documentary evidences.
                        </p>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Our statistics currently indicate the following duration that companies take to compile and submit documents to fulfil certification criteria requirements:
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="rounded-xl border border-border/50 bg-background p-5 text-center shadow-sm">
                                <p className="text-2xl font-black text-primary">3.00</p>
                                <p className="text-xs text-muted-foreground">Average (months)</p>
                            </div>
                            <div className="rounded-xl border border-border/50 bg-background p-5 text-center shadow-sm">
                                <p className="text-2xl font-black text-primary">2.0</p>
                                <p className="text-xs text-muted-foreground">Shortest (weeks)</p>
                            </div>
                            <div className="rounded-xl border border-border/50 bg-background p-5 text-center shadow-sm">
                                <p className="text-2xl font-black text-primary">12.00</p>
                                <p className="text-xs text-muted-foreground">Longest (months)</p>
                            </div>
                        </div>
                    </div>

                    {/* Criteria */}
                    <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm md:p-10">
                        <h3 className="mb-4 font-serif text-xl font-bold text-foreground">WGBO Certificates Criteria</h3>
                        <p className="mb-4 text-sm leading-[1.8] text-muted-foreground">
                            To ensure that the criteria are kept up to date with the technological advances in the industry and to stay relevant to market needs, WGBO continuously reviews, make improvements and adjustments to the criteria.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Please reach out to{" "}
                            <a href="mailto:enquiry@wgbo.org.in" className="font-semibold text-primary hover:underline">enquiry@wgbo.org.in</a>{" "}
                            with information of the representative&apos;s name, email address, designation, company name and contact number.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
