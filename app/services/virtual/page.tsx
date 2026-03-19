import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Laptop, Video, Megaphone, CalendarSearch, BookMarked, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Virtual Learning | World Green Building Organization",
}

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
                <section id="virtual" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 rounded-full bg-emerald-500" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                                Our Services
                            </span>
                        </div>
                        <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                            WGBO Virtual Learning
                        </h2>
                        <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-start">
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <p className=" text-black leading-relaxed">
                                    Our on-demand learning courses are recordings of previous live sessions. So even if you missed a webinar you can still access all the insights and information.
                                </p>

                                <h3 className="mt-8 mb-5 text-xl font-bold text-gray-900 font-heading">These courses:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Feature presentations by industry experts",
                                        "Run from 1 to 2 hours",
                                        "Award 1 or 2 World Green Building CPD points* which can be claimed as official CPD points by other institutions and affiliations",
                                        "Are updated regularly and searchable by topics",
                                        "Are categorised by themes including, World Green Buildings, Industry Standards, Social Sustainability, Energy & Carbon, Design, Finance and Case Studies",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                            <span className="text-black leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                                    <div className="rounded-xl bg-emerald-50 p-6 border border-emerald-100 h-full">
                                        <p className="text-sm leading-relaxed text-black font-medium">
                                            You will need to complete the post-course online quiz to release the World Green Building CPD points. On-demand courses that do not earn CPD points are specified.
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6 text-center h-full flex items-center justify-center">
                                        <p className="text-black text-sm">To view our full on-demand course list follow the link here. You will need to sign into your WGBO account to purchase a course.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 flex flex-col gap-6">
                                <div className="overflow-hidden rounded-2xl w-full">
                                    <Image src="/images/virtual-learning.png" alt="WGBO Virtual Learning Setup" width={800} height={500} className="w-full h-auto object-cover rounded-xl shadow-lg border border-border/50" />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
