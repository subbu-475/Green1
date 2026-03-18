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
 title:"Professional Code of Conduct | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="conduct" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Membership
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Professional Code of Conduct
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black max-w-6xl space-y-4">
 <p className="font-medium text-gray-800">
 Download, print, and sign the World Green Building Organization (WGBO) Code of Conduct, and submit with your Application for Membership.
 </p>
 <p>
 Members of the World Green Building Organization (WGBO), by virtue of their acceptance of membership in the World Green Building Organization (WGBO), are bound to the following Code of Ethics regarding their activities associated with the World Green Building Organization (WGBO).
 </p>

 <div className="mt-6 space-y-3">
 {[
"Members must be responsible for ethical and professional conduct in relationships with clients, employers, associates, and the public.",
"Members must be responsible for professional competence in performance of all their professional activities.",
"Members must be responsible for the protection of professional interest, reputation, and good name of any deserving World Green Building Organization (WGBO) member or member of other professional organization involved in Sustainability and Environment or associated disciplines.",
"Members must be dedicated to professional development of new members in the Sustainability and Environment profession and associated disciplines.",
"Members must be responsible for their complete sincerity in professional service to the world.",
"Members must be responsible for continuing improvement and development of professional competencies in Sustainability and Environment and associated disciplines."
 ].map((code, idx) => (
 <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
 <Scale className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
 <span>{code}</span>
 </div>
 ))}
 </div>

 <div className="pt-4 mt-6 border-t border-gray-200">
 <p className="font-medium text-gray-800">
 Members must be responsible for their professional efforts to support the World Green Building Organization (WGBO) motto:
 </p>
 <p className="mt-3 text-xl font-bold font-heading text-emerald-700 italic border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/50">
"Making Go Green a Way of Life . . . Worldwide"
 </p>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
