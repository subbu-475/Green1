import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Award, ShieldCheck, Globe2, TestTube, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"WGBO certification Scheme | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="scheme" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Rating System
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO certification Scheme
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-4 max-w-5xl">
 <p>
 The WGBO certification Scheme advances the built environment to one that is greener and more carbon-efficient while facilitating sustainable procurement. The certification ensures that sustainability is integrated throughout the design and manufacturing process of products.
 </p>
 <p>
 While the WSO INDIA is the owner of the WGBO certification Scheme, its wholly owned subsidiary, WGBO is the certification body responsible for the evaluation of WGBO applications. Stakeholders may reach out to WGBO at <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a> to request for any of the following information:
 </p>
 <ul className="list-disc pl-6 space-y-2 mt-4 text-black">
 <li>Information about the WGBO certification scheme, certification procedures and fee structures.</li>
 <li>Procedures for granting, maintaining, extending or reducing the scope of, suspending, withdrawing or refusing certification.</li>
 <li>Information related to the requirements, restrictions or limitations on the use of the WGBO mark, and methods to refer to the WGBO certification granted.</li>
 <li>Information about procedures for handling complaints and appeals, as well as how to submit one.</li>
 </ul>
 </div>

 <div className="mt-8 rounded-xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4">Key Aspects of World Green Building Organization (WGBO) Certification</h3>
 <div className="space-y-4 text-black">
 <p>
 <strong className="text-gray-900">Purpose:</strong> To promote sustainable, environmentally friendly, and energy-efficient building practices.
 </p>
 <p>
 <strong className="text-gray-900">Applicability:</strong> Applies to almost all project types, including new construction, interior fit-outs, existing building operations, homes, and neighborhoods.
 </p>
 <p>
 <strong className="text-gray-900">Categories Evaluated:</strong> Projects are assessed on location and transportation, sustainable sites, water efficiency, energy and atmosphere, materials and resources, indoor environmental quality, and innovation.
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
