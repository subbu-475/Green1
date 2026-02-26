"use client"

import { Globe, Award } from "lucide-react"

export function WGBORecognition() {
    return (
        <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Recognition
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                        World Green Building Organization (WGBO) Recognition
                    </h2>
                </div>

                <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                            <Globe className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">National Recognition</h3>
                    </div>
                    <div className="space-y-4 text-sm leading-[1.8] text-muted-foreground">
                        <p>
                            The WGBO certification scheme is one of the <strong className="text-foreground">key standards and benchmarks</strong> for green building products in the building and construction industry. Products and materials certified by the WGBO are highly recognised in national.
                        </p>
                        <p>
                            WGBO Certification Scheme is also widely accepted by <strong className="text-foreground">green building rating tools</strong> for its coverage of product&apos;s sustainability performance.
                        </p>
                        <p>
                            World Green Building Organization (WGBO) Certification serves as a <strong className="text-foreground">nationally recognized symbol</strong> of sustainability achievement and leadership in the construction industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
