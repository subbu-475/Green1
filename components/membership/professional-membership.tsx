"use client"

import { Check, Mail } from "lucide-react"

const evalDocs = [
    "Two Letters of Recommendations as to one's Sustainability and Environment abilities on the job",
    "Two Candidate Evaluations from colleagues, associates, or peers who know of one's abilities and successes",
    "Supporting documentation to include professional memberships, industry certifications and registrations, educational transcripts, etc.",
]

export function ProfessionalMembership() {
    return (
        <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Professional
                    </span>
                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                        Candidate Evaluation Form
                    </h2>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                        <div className="space-y-4 text-sm leading-[1.8] text-muted-foreground">
                            <p>
                                This membership level gives one a great opportunity to continue to gain knowledge as a member of the World Green Building Organization (WGBO), network with and learn from other members, and attend our annual Symposium featuring world-class Sustainability and Environment professionals from around the world presenting various types of Sustainability and Environment modules.
                            </p>
                            <p>
                                The World Green Building Organization (WGBO) Professional Members are Sustainability and Environment professionals performing full-time activities in these fields.
                            </p>
                            <p className="font-semibold text-foreground">
                                Along with the Professional Membership Application, current résumé, and World Green Building Organization (WGBO) Code of Conduct, the following documentation is to be submitted:
                            </p>
                        </div>

                        {/* Required Docs */}
                        <ul className="mt-6 space-y-3">
                            {evalDocs.map((doc, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                                        {i + 1}
                                    </div>
                                    <span className="text-sm leading-relaxed text-muted-foreground">{doc}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-sm text-muted-foreground">
                            Degrees should be in Sustainability, Environment, engineering, Sustainability and Environment management or other curricula acceptable to the World Green Building Organization (WGBO) Approval Board. Degrees are to be from approved and accredited colleges or universities.
                        </p>

                        <p className="mt-4 rounded-lg bg-primary/5 p-4 text-sm text-muted-foreground">
                            Membership in the World Green Building Organization (WGBO) is open to <strong className="text-foreground">all individuals and entities</strong> involved in the Sustainability or Environment field, regardless of race, color, creed, ideology, religion, social status, sex, or political beliefs. All applicants accept that World Green Building Organization (WGBO) will conduct independent verification of employer, education, credentials, etc.
                        </p>
                    </div>

                    {/* Student Membership */}
                    <div className="mt-8 rounded-2xl border border-border/60 bg-background p-8 shadow-sm md:p-10">
                        <h3 className="mb-4 font-serif text-xl font-bold text-foreground">World Green Building Organization (WGBO) Student Membership</h3>
                        <div className="space-y-4 text-sm leading-[1.8] text-muted-foreground">
                            <p>
                                While the World Green Building Organization (WGBO) Student Membership, the Student Membership category is available for any student in a college/university undergraduate or graduate/postgraduate degree program. There is no cost associated with the World Green Building Organization (WGBO) Student Membership as long as the member provides annual documentation of full-time student status.
                            </p>
                            <p>
                                Please complete the World Green Building Organization (WGBO) Student Membership Application and submit with a résumé or CV (if available) and appropriate documentation to{" "}
                                <a href="mailto:enquiry@wgbo.org.in" className="font-semibold text-primary hover:underline">enquiry@wgbo.org.in</a>{" "}
                                with your full-time student status (current course schedule, current student ID, etc.).
                            </p>
                        </div>
                    </div>

                    {/* Application CTA */}
                    <div className="mt-8 rounded-xl bg-gradient-to-r from-[hsl(145,63%,28%)] to-[hsl(160,50%,25%)] p-6 shadow-lg md:p-8">
                        <h3 className="mb-2 text-lg font-bold text-white">Application for the World Green Building Organization (WGBO) membership</h3>
                        <p className="mb-2 text-sm text-white/80">
                            World Green Building Organization (WGBO) can assist you in an application process. You can contact at{" "}
                            <a href="mailto:enquiry@wgbo.org.in" className="font-semibold text-white underline">enquiry@wgbo.org.in</a>{" "}
                            for further assistance.
                        </p>
                        <p className="mb-2 text-sm text-white/70">
                            Please note that ONLY full-time practitioners in the Sustainability and Environment and allied fields are eligible for the World Green Building Organization (WGBO) Affiliate Membership. Please briefly describe your present employment or enclose your resume for evaluation.
                        </p>
                        <p className="text-sm font-semibold text-white">
                            Apply for the membership: Just mail us to{" "}
                            <a href="mailto:enquiry@wgbo.org.in" className="underline">enquiry@wgbo.org.in</a>{" "}
                            to get the application form and fee details
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
