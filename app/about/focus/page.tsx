import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, BookOpen, Megaphone, CloudSun, Heart, TreePine, Leaf, Building2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"WGBO Focus | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="focus" className="scroll-mt-32 bg-white px-6 py-10 md:py-12">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Our Focus
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO Focus
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-5 flex items-start gap-4">
 <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
 <Building2 className="h-[18px] w-[18px]" strokeWidth={1.5} />
 </span>
 <p className="max-w-4xl leading-[1.85] text-black md:">
 From healthcare infrastructure to industrial facilities, universities
 and apartments, the World Green Building Organization (WGBO) in
 focus&apos; series will take an in-depth look at how different types of
 buildings are enjoying the benefits of World Green Building Organization
 (WGBO).
 </p>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
