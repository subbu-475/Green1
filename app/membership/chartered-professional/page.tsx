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
 title:"Chartered Professional Member of WGBO (CPMWGBO) | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="chartered-professional" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Membership
 </span>
 </div>
 <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
 Chartered Professional Member of WGBO (CPMWGBO)
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black max-w-6xl">
 <p className="mb-4">
 <strong>CPMWGBO</strong> stands for Chartered Professional of WGBO. It's the profession's highest grade, recognising exceptional contribution and leadership in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability.
 </p>
 <p className="mb-4">
 Chartered Professional status is for established leaders who have made outstanding contributions to the profession. You'll need at least five years as a Chartered Member and be able to show thought leadership, professional influence and sustained impact beyond your own organisation.
 </p>
 <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 border border-emerald-100 rounded-md">
 <Star className="h-5 w-5 text-emerald-500" fill="currentColor" />
 <span className="font-semibold text-emerald-800">When you achieve Chartered Professional status, you can use the CPMWGBO post-nominal letters.</span>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
