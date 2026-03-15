import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Laptop, Video, Megaphone, CalendarSearch, BookMarked, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dairy / Calendar | World Green Building Organization",
}

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
                <section id="calendar" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 rounded-full bg-emerald-500" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                                Our Services
                            </span>
                        </div>
                        <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
                            WGBO Dairy / Calendar
                        </h2>
                        <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                        <p className="mt-6 max-w-4xl text-[16px] leading-[1.8] text-black-800">
                            WGBO is promoting Green Building at the national level by using various means such as Star Rating, conferences, training programmes, publications, posters, yearly calendar, campaigns, etc. from its inception and added new means from time to time.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
