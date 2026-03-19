import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Award, ShieldCheck, Globe2, TestTube, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"WGBO Lab Partners | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="lab-partners" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Rating System
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO Lab Partners
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-6">
 <p>
 As part of the World Green Building Organization (WGBO) certification process, applicants will need to have their product(s) independently tested and assessed by an accredited third-party testing laboratory. To reduce time and effort in identifying appropriate laboratories, WGBO works with a number of such testing laboratories that can provide the necessary testing and calibration services.
 </p>

 <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm mt-6">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Join us a WGBO Lab Partner</h3>
 <p className="mb-4">
 If you are a testing laboratory that can provide a range of product testing services not limited to Product U-Value, Acoustic Testing, Noise Emission Testing, Thermal Insulation Testing, etc., join us as a WGBO Lab Partner.
 </p>
 <p className="mb-4">
 Once onboard, WGBO will direct Certification Applicants to WGBO Lab Partners to perform the necessary testing for their certifying product(s).
 </p>

 <h4 className="font-semibold text-gray-900 mb-2">To be a WGBO Lab Partner, you need to:</h4>
 <ul className="space-y-2">
 <li className="flex items-center gap-2">
 <ShieldCheck className="h-5 w-5 text-emerald-500" />
 <span>Be a Corporate Member of WGBO</span>
 </li>
 <li className="flex items-center gap-2">
 <ShieldCheck className="h-5 w-5 text-emerald-500" />
 <span>Share with WGBO your available testing and related services</span>
 </li>
 <li className="flex items-center gap-2">
 <ShieldCheck className="h-5 w-5 text-emerald-500" />
 <span>Actively participate in WGBO Technical Work Groups</span>
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
