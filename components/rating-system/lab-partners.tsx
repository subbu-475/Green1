"use client"

import { FlaskConical, Check, Mail } from "lucide-react"

const requirements = [
    "Be a Corporate Member of WGBO",
    "Share with WGBO your available testing and related services",
    "Actively participate in WGBO Technical Work Groups",
]

export function LabPartners() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20 md:py-28">
            <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-4xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Partners
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                        WGBO Lab Partners
                    </h2>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background p-8 shadow-sm md:p-10">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                            <FlaskConical className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Testing Laboratories</h3>
                    </div>

                    <div className="space-y-4 text-sm leading-[1.8] text-muted-foreground">
                        <p>
                            As part of the World Green Building Organization (WGBO) certification process, applicants will need to have their product(s) independently tested and assessed by an accredited third-party testing laboratory. To reduce time and effort in identifying appropriate laboratories, WGBO works with a number of such testing laboratories that can provide the necessary testing and calibration services.
                        </p>
                    </div>

                    {/* Join as Partner */}
                    <div className="mt-8 rounded-xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] p-6 shadow-lg md:p-8">
                        <h4 className="mb-2 text-lg font-bold text-white">Join us as a WGBO Lab Partner</h4>
                        <p className="mb-4 text-sm text-white/80">
                            If you are a testing laboratory that can provide a range of product testing services not limited to Product U-Value, Acoustic Testing, Noise Emission Testing, Thermal Insulation Testing, etc., join us as a WGBO Lab Partner.
                        </p>
                        <p className="mb-4 text-sm text-white/70">
                            Once onboard, WGBO will direct Certification Applicants to WGBO Lab Partners to perform the necessary testing for their certifying product(s).
                        </p>

                        <h5 className="mb-3 text-sm font-bold text-white">To be a WGBO Lab Partner, you need to:</h5>
                        <ul className="space-y-2">
                            {requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                                        <Check className="h-3 w-3 text-white" />
                                    </div>
                                    <span className="text-sm text-white/90">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
