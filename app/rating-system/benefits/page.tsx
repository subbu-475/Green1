import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Award, ShieldCheck, Globe2, TestTube, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"WGBO Certificates Benefits | World Green Building Organization",
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
 Rating System
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO Certificates Benefits
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black">
 <p className="mb-6">
 Once a product is certified, WGBO will issue the product a certificate. Only certified products will be listed on the WGBO Certification Directory, which is maintained on the World Green Building Organization's (WGBO) website. This Interactive Directory is actively used by building industry professionals such as consultants, contractors, building developers and owners. Stakeholders can demand that products/ materials used for a building are WGBO certified. Certified products can gain credits under various green building rating tools.
 </p>
 <p className="mb-6 font-semibold text-emerald-700 text-lg">
 Lower operating costs, reduced carbon footprints, enhanced health for occupants, and higher property values.
 </p>

 <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-6">
 {[
"Analysis of your product's sustainability performance by experts and certification by a credible source",
"Opportunity and insight into how to further develop your products to be more sustainable",
"Greater awareness of your product for use in our current and future buildings",
"An overview of products that are certified sustainable",
"An understanding of how a product stacks up against others in terms of their sustainability performance",
"Easier decision-making when choosing more sustainable products",
"Data around the environmental properties of the products you use",
"A unique selling point for your building projects",
"An understanding of how sustainable the spaces you live and work in are"
 ].map((benefit, i) => (
 <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-md hover:border-emerald-200">
 <Award className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
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
