import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Award, ShieldCheck, Globe2, TestTube, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"WGBO Recognition | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="recognition" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Rating System
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 World Green Building Organization (WGBO) Recognition
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black max-w-4xl space-y-4">
 <p>
 The WGBO certification scheme is one of the key standards and benchmarks for green building products in the building and construction industry. Products and materials certified by the WGBO are highly recognised in national.
 </p>
 <p>
 WGBO Certification Scheme is also widely accepted by green building rating tools for its coverage of product's sustainability performance.
 </p>
 <p className="font-semibold text-gray-900 border-l-4 border-emerald-500 pl-4 py-1">
 World Green Building Organization (WGBO) Certification serves as a nationally recognized symbol of sustainability achievement and leadership in the construction industry.
 </p>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
