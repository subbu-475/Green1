"use client"

import { Shield, Leaf, Heart, CloudSun, TreePine } from "lucide-react"

const aims = [
    {
        icon: Shield,
        text: "Driving resiliency in buildings, fit outs, and communities",
        color: "text-emerald-600 bg-emerald-50",
    },
    {
        icon: Leaf,
        text: "Contributing to market transformation and a sustainable economy",
        color: "text-emerald-600 bg-emerald-50",
    },
    {
        icon: Heart,
        text: "Enhancing our health and quality of life",
        color: "text-emerald-600 bg-emerald-50",
    },
    {
        icon: CloudSun,
        text: "Reducing the impact of climate change",
        color: "text-emerald-600 bg-emerald-50",
    },
    {
        icon: TreePine,
        text: "Restoring and protecting our planet's biodiversity and ecosystems",
        color: "text-emerald-600 bg-emerald-50",
    },
]

export function HomeContent() {
    return (
        <>
            {/* ═══ PURPOSE OF THE WGBO ═══ */}
            <section className="bg-gray-50/70 px-6 py-12 md:py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                            Our Purpose
                        </span>
                    </div>
                    <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                        Purpose of the WGBO
                    </h2>
                    <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />
                    <p className="mt-5 max-w-3xl text-[16.5px] leading-[1.9] text-gray-600 md:text-[17px]">
                        The World Green Building Organization (WGBO), part of the World
                        Safety Organization (WGBO) India was formed in the year 2022, our
                        purpose is to lead the sustainable transformation of the built
                        environment.
                    </p>
                </div>
            </section>

            {/* ═══ WHAT IS WGBO ═══ */}
            <section className="bg-white px-6 py-10 md:py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-14">
                        <div className="lg:w-[45%] lg:shrink-0">
                            <h2 className="text-2xl font-extrabold leading-[1.2] text-gray-900 md:text-3xl lg:text-[34px] font-heading tracking-tight">
                                What is World Green Building Organization (WGBO)?
                            </h2>

                            <div className="mt-5 rounded-lg border-l-4 border-emerald-500 bg-emerald-50/60 px-5 py-3">
                                <p className="text-[15px] font-medium italic leading-relaxed text-gray-700">
                                    &ldquo;World Green Building Organization (WGBO) meets the needs of
                                    the present without compromising the future&rdquo;
                                </p>
                            </div>

                            <p className="mt-4 text-[15.5px] leading-[1.8] text-gray-600">
                                World Green Building Organization (WGBO) is a national recognised
                                rating system setting the standard for healthy, resilient, positive
                                buildings and places. Developed for the national environment of
                                sustainable fit outs, buildings, homes and communities right across
                                the country with the aim of:
                            </p>

                            <p className="mt-4 text-[15.5px] leading-[1.8] text-gray-600">
                                World Green Building Organization (WGBO) has a team of national and
                                international Environmental, Social, and Governance professionals
                                who have academic knowledge and many years of practical experience
                                in Environmental, Social, and Governance fields.
                            </p>
                        </div>

                        <div className="lg:w-[55%] lg:flex lg:items-center">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full">
                                {aims.map((aim, index) => {
                                    const Icon = aim.icon
                                    return (
                                        <div
                                            key={index}
                                            className="group flex items-start gap-3.5 rounded-xl bg-gray-50/80 p-4 transition-all duration-300 hover:bg-emerald-50/60 hover:shadow-sm"
                                        >
                                            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${aim.color} transition-transform duration-300 group-hover:scale-110`}>
                                                <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                                            </span>
                                            <p className="text-[14.5px] font-medium leading-[1.6] text-gray-700">
                                                {aim.text}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
