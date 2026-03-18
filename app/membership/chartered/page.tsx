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
 title:"Chartered Member of WGBO (CMWGBO) | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="chartered" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Membership
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
 Chartered Member of WGBO (CMWGBO)
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black max-w-6xl">
 <p className="mb-4">
 <strong>CMWGBO</strong> stands for Chartered Member of World Green Building Organization. It shows you meet professional standards in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability that are recognised internationally.
 </p>
 <p className="mb-4">
 Chartered membership is for experienced professionals with at least three years in senior roles. You'll need to demonstrate professional competence and hold relevant qualifications.
 </p>
 <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 border border-emerald-100 rounded-md">
 <Star className="h-5 w-5 text-emerald-500" />
 <span className="font-semibold text-emerald-800">When you achieve Chartered status, you can use the CMWGBO post-nominal letters.</span>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
