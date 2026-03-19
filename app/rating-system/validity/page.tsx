import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Award, ShieldCheck, Globe2, TestTube, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"WGBO Certificates Validity | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="validity" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Rating System
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO Certificates Validity
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 flex items-start gap-4">
 <Clock className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
 <p className=" text-black font-medium">
 WGBO certificates are valid for one (1) year from the date of issuance and may be renewed for a period of one (1) year thereafter. Further there is no extension of validity period.
 </p>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
