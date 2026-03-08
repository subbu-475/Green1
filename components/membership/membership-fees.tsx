"use client"

import { FileText, Mail } from "lucide-react"

const feeCategories = [
    "Student Member of WGBO (SMWGBO)",
    "Associate Member of WGBO (AMWGBO)",
    "Affiliate Member of WGBO (AMWGBO)",
    "Chartered Member of WGBO (CMWGBO)",
    "Chartered Professional Member of WGBO (CPMWGBO)",
    "Institutional Member",
    "Industry / Company Member",
]

export function MembershipFees() {
    return (
        <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Fees
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl">
                        Membership Fees
                    </h2>
                </div>

                <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                            <FileText className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-foreground">Fee Information</h3>
                    </div>

                    <p className="mb-6 text-sm leading-[1.8] text-muted-foreground">
                        All successful admission to a membership class, you may be eligible for prestigious titles such as Associate / Affiliate Member of WGBO (AMWGBO), Chartered Member of WGBO (CMWGBO) and Professional Member of WGBO (PMWGBO) after meeting additional criteria and paying the requisite fees.
                    </p>

                    <p className="mb-6 text-sm text-muted-foreground">
                        Annual Membership fees please contact World Green Building Organization (WGBO) for more details:{" "}
                        <a href="mailto:enquiry@wgbo.org.in" className="font-semibold text-primary hover:underline">enquiry@wgbo.org.in</a>{" "}
                        to get the latest discounted fee.
                    </p>

                    {/* Fee categories */}
                    <div className="space-y-3">
                        {feeCategories.map((cat, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 rounded-xl border border-border/50 bg-background p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                    {i + 1}
                                </div>
                                <span className="text-sm font-medium text-foreground">{cat}</span>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="mt-8 rounded-xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] p-6 text-center shadow-lg">
                        <p className="text-sm font-bold text-white">Contact us for fee details</p>
                        <a
                            href="mailto:enquiry@wgbo.org.in"
                            className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[hsl(145,63%,28%)] transition-transform hover:scale-105"
                        >
                            <Mail className="h-4 w-4" /> enquiry@wgbo.org.in
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
