import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Laptop, Video, Megaphone, CalendarSearch, BookMarked, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"Campaigns | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="campaigns" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Our Services
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO Campaigns
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <p className="mt-6 text-black">
 Green building campaigns promote environmentally responsible, resource-efficient, and sustainable construction to combat climate change, reduce energy consumption, and improve occupant health. Major initiatives like World Green Building Week focus on accelerating net-zero, resilient, and sustainable infrastructure to meet global climate goals.
 </p>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
