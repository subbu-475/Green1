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
 title:"Student Membership Program | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="student" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Membership
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Student Membership Program
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black max-w-6xl">
 <div className="flex items-center gap-2 mb-4 text-emerald-700 font-medium">
 <GraduationCap className="h-5 w-5" />
 <span>Who is it for?</span>
 </div>
 <p className="mb-4">
 Starting your career in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability? Student membership gives you everything you need to succeed.
 </p>
 <p>
 Join if you're studying in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability or in Environmental Safety and Health (or) Environment social and governance (or) Environmental Sustainability apprentice.
 </p>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
