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
 title:"Continuing Professional Development (CPD) | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="cpd" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Certification
 </span>
 </div>
 <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
 Continuing Professional Development (CPD)
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-6">
 <p>
 The continuing professional development (CPD) of WGSPs is enabled by a robust learning and development framework comprising technical seminars, webinars, learning journeys, conferences and training courses. WGBO also actively works with other industry associations and organisations to cross-recognise relevant activities for mutual CPD accreditation, allowing WGSPs to concurrently fulfil other professional renewal requirements.
 </p>

 <div className="grid sm:grid-cols-3 gap-4">
 <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 text-center">
 <div className="text-2xl font-bold font-heading text-emerald-700 mb-1">WGSA</div>
 <div className="text-emerald-900 font-medium">10 CPD points</div>
 </div>
 <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 text-center">
 <div className="text-2xl font-bold font-heading text-emerald-700 mb-1">WGSAP</div>
 <div className="text-emerald-900 font-medium">20 CPD points</div>
 </div>
 <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 text-center">
 <div className="text-2xl font-bold font-heading text-emerald-700 mb-1">WGSAAP</div>
 <div className="text-emerald-900 font-medium">30 CPD points</div>
 </div>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4">WGSPs can fulfil renewal requirements through the following:</h3>
 <ul className="space-y-3">
 {[
"Involvement in World Green Building projects",
"Learning & Development activities organised by WGBO, local industry associations, institutes of higher learning, government agencies and approved course providers",
"Learning & Development activities organised by partner World Green Building Organization (GBCs), such as the World Safety Organization India (WSO)."
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
 <BookOpen className="h-6 w-6 text-emerald-500 shrink-0" />
 <span className="text-black font-medium">{item}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}

