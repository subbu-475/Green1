import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, BookOpen, Megaphone, CloudSun, Heart, TreePine, Leaf, Building2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "WGBO Tools | World Green Building Organization",
}

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
                <section id="tools" className="scroll-mt-32 bg-gray-50/70 px-6 py-10 md:py-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 rounded-full bg-emerald-500" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                                Our Tools
                            </span>
                        </div>
                        <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                            WGBO Tools
                        </h2>
                        <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                        <p className="mt-5 max-w-5xl text-[16px] leading-[1.85] text-black-800 md:text-[17px]">
                            Our World Green Building Organization (WGBO) tools offer a framework of
                            best practice benchmarks for sustainable construction.
                        </p>

                        <p className="mt-4 max-w-5xl text-[16px] leading-[1.85] text-black-800 md:text-[17px]">
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

                        <p className="mt-6 text-[16px] leading-[1.85] text-black-800 md:text-[17px]">
                            Learn about the benefits of choosing World Green Building Organization
                            (WGBO) for your next project.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
