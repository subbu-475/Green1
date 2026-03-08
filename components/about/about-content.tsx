"use client"

import { Shield, BookOpen, Megaphone, CloudSun, Heart, TreePine, Leaf, Building2 } from "lucide-react"

export function AboutContent() {
    return (
        <>
            {/* ═══ HISTORY ═══ */}
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
                    <p className="mt-5 max-w-3xl text-[16.5px] leading-[1.9] text-gray-600 md:text-[17px]">
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
                                    <p className="mt-2 text-[14.5px] leading-[1.75] text-gray-600">
                                        {card.desc}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ OUR VISION ═══ */}
            <section id="vision" className="scroll-mt-32 bg-white px-6 py-10 md:py-12">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-2xl font-extrabold leading-[1.2] text-gray-900 md:text-3xl lg:text-[34px] font-heading tracking-tight">
                        Our Vision
                    </h2>
                    <div className="mt-4 h-1 w-14 rounded-full bg-emerald-500" />
                    <p className="mt-5 max-w-4xl text-[16px] leading-[1.85] text-gray-600 md:text-[17px]">
                        At WGBO, our mission is to radically improve the sustainability of the
                        built environment, by transforming the way it is planned, financed,
                        designed, constructed, maintained, operated and repurposed.
                    </p>
                </div>
            </section>

            {/* ═══ WGBO TOOLS ═══ */}
            <section id="tools" className="scroll-mt-32 bg-gray-50/70 px-6 py-10 md:py-12">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-2xl font-extrabold leading-[1.2] text-gray-900 md:text-3xl lg:text-[34px] font-heading tracking-tight">
                        WGBO Tools
                    </h2>
                    <div className="mt-4 h-1 w-14 rounded-full bg-emerald-500" />

                    <p className="mt-5 max-w-5xl text-[16px] leading-[1.85] text-gray-600 md:text-[17px]">
                        Our World Green Building Organization (WGBO) tools offer a framework of
                        best practice benchmarks for sustainable construction.
                    </p>

                    <p className="mt-4 max-w-5xl text-[16px] leading-[1.85] text-gray-600 md:text-[17px]">
                        World Green Building Organization (WGBO) national trusted mark of quality
                        for the design, construction and operation of sustainable buildings,
                        fit-outs and communities.
                    </p>

                    <p className="mt-5 text-[16px] font-semibold text-gray-800 md:text-[17px]">
                        The tools aim to:
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: CloudSun, text: "Reduce the impact of climate change." },
                            { icon: Heart, text: "Enhance our health and quality of life." },
                            { icon: TreePine, text: "Restore and protect our planet's biodiversity and ecosystems." },
                            { icon: Shield, text: "Driving resilience in buildings, fitouts, and communities." },
                            { icon: Leaf, text: "Contributing to market transformation and a sustainable economy." },
                        ].map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-3.5 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-emerald-100/50"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                                    </span>
                                    <p className="text-[15px] font-medium leading-[1.6] text-gray-700">
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <p className="mt-6 text-[16px] leading-[1.85] text-gray-600 md:text-[17px]">
                        Learn about the benefits of choosing World Green Building Organization
                        (WGBO) for your next project.
                    </p>
                </div>
            </section>

            {/* ═══ WGBO FOCUS ═══ */}
            <section id="focus" className="scroll-mt-32 bg-white px-6 py-10 md:py-12">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-2xl font-extrabold leading-[1.2] text-gray-900 md:text-3xl lg:text-[34px] font-heading tracking-tight">
                        WGBO Focus
                    </h2>
                    <div className="mt-4 h-1 w-14 rounded-full bg-emerald-500" />

                    <div className="mt-5 flex items-start gap-4">
                        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                            <Building2 className="h-[18px] w-[18px]" strokeWidth={1.5} />
                        </span>
                        <p className="max-w-4xl text-[16px] leading-[1.85] text-gray-600 md:text-[17px]">
                            From healthcare infrastructure to industrial facilities, universities
                            and apartments, the World Green Building Organization (WGBO) in
                            focus&apos; series will take an in-depth look at how different types of
                            buildings are enjoying the benefits of World Green Building Organization
                            (WGBO).
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
