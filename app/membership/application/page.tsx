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
 title:"Application for WGBO Membership | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="application" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Membership
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Application for WGBO Membership
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black max-w-6xl space-y-4">
 <p>
 World Green Building Organization (WGBO) can assist you in an application process. You can contact <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a> for further assistance.
 </p>
 <p>
 Please note that ONLY full-time practitioners in the Sustainability and Environment and allied fields are eligible for the World Green Building Organization (WGBO) Affiliate Membership. Please briefly describe your present employment or enclose your resume for evaluation.
 </p>
 <div className="mt-6 inline-flex items-center gap-2 bg-gray-900 px-5 py-3 rounded-lg border border-gray-800 text-white">
 <FileSignature className="h-5 w-5 text-emerald-400" />
 <span>
 <strong className="font-semibold">Apply for membership:</strong> Just mail us at <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-300 hover:text-emerald-200 transition-colors">enquiry@wgbo.org.in</a> to get the application form and fee details.
 </span>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
