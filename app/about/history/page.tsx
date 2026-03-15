import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, BookOpen, Megaphone, CloudSun, Heart, TreePine, Leaf, Building2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our History | World Green Building Organization",
}

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
                <section id="history" className="scroll-mt-32 bg-gray-50/70 px-6 py-12 md:py-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 rounded-full bg-emerald-500" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                                Our History
                            </span>
                        </div>
                        <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                            History
                        </h2>
                        <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />
                        <p className="mt-5 max-w-3xl text-[16.5px] leading-[1.9] text-black-800 md:text-[17px]">
                            The World Green Building Organization (WGBO), part of the World
                            Safety Organization (WGBO) India was formed in the year 2022, our
                            purpose is to lead the sustainable transformation of the built
                            environment.
                        </p>

                        {/* We Rate / We Educate / We Advocate */}
                        <div className="mt-10 grid gap-5 sm:grid-cols-3">
                            {[
                                {
                                    icon: Shield,
                                    title: "We Rate",
                                    desc: "We rate the sustainability of buildings, fitouts and communities through largest national, voluntary, holistic rating system.",
                                    num: "01",
                                },
                                {
                                    icon: BookOpen,
                                    title: "We Educate",
                                    desc: "We educate industry, practitioners and decision-makers, and promote green building programs, technologies, design practices and operations.",
                                    num: "02",
                                },
                                {
                                    icon: Megaphone,
                                    title: "We Advocate",
                                    desc: "We advocate policies and programs that support our vision and purpose.",
                                    num: "03",
                                },
                            ].map((card, i) => {
                                const Icon = card.icon
                                return (
                                    <div
                                        key={i}
                                        className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5"
                                    >
                                        <span className="absolute right-5 top-4 text-[40px] font-extrabold leading-none text-gray-900/[0.03] font-heading">
                                            {card.num}
                                        </span>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100/70">
                                            <Icon className="h-[22px] w-[22px] text-emerald-600" strokeWidth={1.5} />
                                        </span>
                                        <h3 className="mt-5 text-[18px] font-bold text-gray-900 font-heading tracking-tight">{card.title}</h3>
                                        <p className="mt-2 text-[14.5px] leading-[1.75] text-black-800">
                                            {card.desc}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
