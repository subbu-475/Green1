import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
 Award,
 BookOpen,
 Briefcase,
 CheckCircle2,
 GraduationCap,
 Info,
 Layers,
 ShieldCheck,
 Star,
 Users
} from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"Accreditation Benefits | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="benefits" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Certification
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Accreditation Benefits
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black">
 <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 mt-6">
 {[
"Understand the drivers of green building in national and equip yourself with key knowledge on green building design strategies.",
"Gain career profiling in the Sustainability sector, opening up opportunities for industry engagement and collaboration.",
"Enjoy preferential rates and exclusive access to built environment sustainability-focused events and training courses.",
"Recognition of built environment sustainability knowledge, expertise and experience",
"Designation as the Responsible Person for World Green Building submissions (for WGBAPs and WGBAAPs)",
"Accrual of additional points in Green Building project score through the participation of WGBAPs or WGBAAPs in the project team",
"Career profiling in the Sustainability Professionals community, opening up opportunities for engagement and collaboration",
"Receive timely updates on key industry developments, policy announcements and technology advancements",
"Opportunities to contribute to the development of industry standards and sharing of knowledge at industry events",
"Enjoy preferential rates for all WGBO CPD events and exclusive access to WGB-only events"
 ].map((benefit, i) => (
 <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-md hover:border-emerald-200">
 <Star className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" fill="currentColor" />
 <span className=" leading-[1.5] text-black">{benefit}</span>
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
