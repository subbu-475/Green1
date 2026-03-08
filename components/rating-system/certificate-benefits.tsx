"use client"

import { Check, TrendingDown, Leaf, Heart, DollarSign } from "lucide-react"

const benefits = [
    "Analysis of your product's sustainability performance by experts and certification by a credible source",
    "Opportunity and insight into how to further develop your products to be more sustainable",
    "Greater awareness of your product for use in our current and future buildings",
    "An overview of products that are certified sustainable",
    "An understanding of how a product stacks up against others in terms of their sustainability performance",
    "Easier decision-making when choosing more sustainable products",
    "Data around the environmental properties of the products you use",
    "A unique selling point for your building projects",
    "An understanding of how sustainable the spaces you live and work in are",
]

export function CertificateBenefits() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Benefits
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        WGBO Certificates Benefits
                    </h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-5">
                    {/* Benefits List — 3 cols */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 shadow-sm">
                            <ul className="space-y-3">
                                {benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        <span className="text-sm leading-relaxed text-foreground">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar — 2 cols */}
                    <div className="space-y-6 lg:col-span-2">
                        <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                            <h3 className="mb-4 font-heading text-lg font-bold text-foreground">Certified Products</h3>
                            <p className="text-sm leading-[1.8] text-muted-foreground">
                                Once a product is certified, WGBO will issue the product a certificate. Only certified products will be listed on the WGBO Certification Directory, which is maintained on the World Green Building Organization&apos;s (WGBO) website. This Interactive Directory is actively used by building industry professionals such as consultants, contractors, building developers and owners.
                            </p>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Stakeholders can demand that products/materials used for a building are WGBO certified. Certified products can gain credits under various green building rating tools.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-background p-4 text-center shadow-sm">
                                <TrendingDown className="mb-2 h-6 w-6 text-primary" />
                                <p className="text-xs font-bold text-foreground">Lower Operating Costs</p>
                            </div>
                            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-background p-4 text-center shadow-sm">
                                <Leaf className="mb-2 h-6 w-6 text-primary" />
                                <p className="text-xs font-bold text-foreground">Reduced Carbon Footprints</p>
                            </div>
                            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-background p-4 text-center shadow-sm">
                                <Heart className="mb-2 h-6 w-6 text-primary" />
                                <p className="text-xs font-bold text-foreground">Enhanced Health</p>
                            </div>
                            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-background p-4 text-center shadow-sm">
                                <DollarSign className="mb-2 h-6 w-6 text-primary" />
                                <p className="text-xs font-bold text-foreground">Higher Property Values</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
