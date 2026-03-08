"use client"

import { Award, Layers, BookOpen, GraduationCap, ArrowRight, Check, Clock, FileText } from "lucide-react"

const courseSteps = [
    { num: "1", title: "Asynchronous Online Learning (7.0 hours)", desc: "Learn about built environment sustainability, green building strategies and national legislative framework at your own pace." },
    { num: "2", title: "Online Assessment", desc: "Attempt and pass a structured online assessment to test your built environment sustainability knowledge." },
    { num: "3", title: "Applied Learning Workshop (In-Person)", desc: "Led by a WGSAAP, featuring exemplary green building case studies and application of sustainable strategies." },
]

export function CertificationBoard() {
    return (
        <section id="certification" className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Certification
                    </span>
                    <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        WGBO Certification Board
                    </h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Board Overview */}
                    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-background p-8 shadow-sm md:p-10">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">Certification Board</h3>
                        </div>

                        <div className="space-y-4 text-sm leading-[1.8] text-muted-foreground">
                            <p>
                                The WGBO Certification Board is an <strong className="text-foreground">independent body</strong> of the WGBO Board of Directors, comprised of the WGBO Professional Certification Board.
                            </p>
                            <p>
                                The Board provides members with a method of <strong className="text-foreground">upgrading their professional status</strong> through a professional certification program. Its primary purpose is the certification of professionals in Built Environment, Sustainability and allied areas of expertise.
                            </p>
                            <p>
                                WGBO certified members are professionals recognised for their <strong className="text-foreground">practical experience and education</strong>, obtained through academic institutions and continuing education programs.
                            </p>
                        </div>

                        <a href="mailto:enquiry@wgbo.org.in" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                            enquiry@wgbo.org.in
                        </a>
                    </div>

                    {/* Qualification Scheme */}
                    <div>
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                            <div className="mb-5 flex items-center gap-3">
                                <Layers className="h-6 w-6 text-primary" />
                                <h3 className="font-heading text-xl font-bold text-foreground">World Green Star Professional Qualification Scheme</h3>
                            </div>
                            <p className="mb-5 text-sm leading-[1.8] text-muted-foreground">
                                The scheme aims to <strong className="text-foreground">uplift, upskill and recognise</strong> green building competencies of professionals in the built environment sector. A key feature is the establishment of a{" "}
                                <strong className="text-foreground">Continuing Professional Development (CPD)</strong> framework for all WGSPs.
                            </p>
                            <p className="text-sm leading-[1.8] text-muted-foreground">
                                Professionals span the entire building value chain — ES consultants, Architects, Engineers, Contractors, Project Managers, Facilities Managers, energy and carbon specialists, sustainability professionals, and many more.
                            </p>
                        </div>

                        {/* Course Structure */}
                        <div className="mt-6 rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                            <h4 className="mb-5 flex items-center gap-2 font-bold text-foreground">
                                <BookOpen className="h-5 w-5 text-primary" /> Course Structure
                            </h4>
                            <div className="space-y-4">
                                {courseSteps.map((s) => (
                                    <div key={s.num} className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                            {s.num}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-foreground">{s.title}</p>
                                            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
