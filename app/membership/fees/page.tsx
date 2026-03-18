import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
 Award,
 Briefcase,
 GraduationCap,
 Users,
 BadgeCheck,
 Star,
 FileSignature,
 Scale,
 CreditCard,
 Download,
 CheckCircle2
} from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"Membership Fees | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="fees" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Membership
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Membership Fees
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black max-w-6xl space-y-4">
 <p>
 All successful admission to a membership class, you may be eligible for prestigious titles such as Associate /Affiliate Member of WGBO (AMWGBO), Chartered Member of WGBO (CMWGBO) and Professional Member of WGBO (PMWGBO) after meeting additional criteria and paying the requisite fees.
 </p>

 <div className="inline-flex items-center gap-3 bg-emerald-50 px-5 py-4 border border-emerald-100 rounded-lg">
 <CreditCard className="w-6 h-6 text-emerald-600 shrink-0" />
 <span className="text-gray-800">
 Annual Membership fees please contact World Green Building Organization (WGBO) for more details: <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a> to get the latest discounted fee.
 </span>
 </div>

 <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 pt-2">
 {[
"Student Member of WGBO (SMWGBO)",
"Associate Member of WGBO (AMWGBO)",
"Affiliate Member of WGBO (AMWGBO)",
"Chartered Member of WGBO (CMWGBO)",
"Chartered Professional Member of WGBO (CPMWGBO)",
"Institutional Member",
"Industry / Company Member"
 ].map((level, i) => (
 <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
 <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
 <span className=" font-medium text-gray-800">{level}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
