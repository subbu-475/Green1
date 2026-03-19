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
 title:"Professional Qualification Scheme | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="scheme" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Certification
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Professional Qualification Scheme
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-4">
 <p>
 The accelerated push for sustainability necessitates deepening of the core knowledge and expertise of green building professionals. Environmental Sustainability (ES) consultants, Architects, Engineers, Contractors, Project Managers, Facilities Managers and other built environment professionals directly contribute to the quality of our places and spaces and by extension, to national climate goals.
 </p>
 <p>
 WGBO actively supports the professionals behind the greening of the national built environment through the World Green Building Professional Qualification Scheme, with qualified professionals accorded the World Green Building Professional (WGBP) credential.
 </p>
 <p>
 This is in line with global professional accreditation programmes and will raise the profile of national green building professionals and showcase local expertise in the greening of buildings from a tropical climate context, strengthening national reputation as the hub for green building leadership.
 </p>

 <div className="my-8 rounded-xl bg-gray-50 p-6 md:p-8 border border-gray-100">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3 flex items-center gap-2">
 <Info className="h-5 w-5 text-emerald-600" />
 About the scheme
 </h3>
 <p className="mb-4">
 The WGBO's World Green Building Professional Qualification Scheme succeeds the World Green Building Specialist programme and aims to uplift, upskill and recognise green building competencies of professionals in the built environment sector. A key feature of the WGBO World Green Building Professional Qualification Scheme is the establishment of a Continuing Professional Development (CPD) framework for all WGSPs. Through a slate of diverse programmes and activities, WGSPs will be able to remain abreast of industry trends and stay ahead of industry developments. WGSP certifications are renewed annually upon fulfilment of CPD requirements.
 </p>
 <p>
 WGBO professions span the entire building and construction value chain, enhancing the more traditional roles of ES consultants, Architects, Engineers, Contractors, Project Managers, Facilities Managers, as well as embracing newer roles such as energy and carbon specialists, sustainability professionals, corporate real estate managers and many more. As green building and sustainability continue to gain traction, the demand for qualified green professionals will continue to increase.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4">Course Structure</h3>
 <ul className="space-y-4">
 <li className="flex items-start gap-3">
 <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 mt-1">1</div>
 <p><strong>Asynchronous Online Learning (7.0 hours):</strong> Learn about built environment sustainability, green building strategies and national legislative framework at your own time and pace.</p>
 </li>
 <li className="flex items-start gap-3">
 <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 mt-1">2</div>
 <p><strong>Online Assessment:</strong> Attempt and pass a structured online assessment to test your built environment sustainability knowledge.</p>
 </li>
 <li className="flex items-start gap-3">
 <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 mt-1">3</div>
 <p><strong>Applied Learning Workshop (In-Person):</strong> Led by a WGSAAP, this workshop will showcase exemplary green building case studies and the application of sustainable strategies and features. Workshop venues will vary and will feature different facets of green building.</p>
 </li>
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
