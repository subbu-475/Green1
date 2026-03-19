import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Award, ShieldCheck, Globe2, TestTube, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"WGBO Certificates Scheme and Levels | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="levels" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Rating System
 </span>
 </div>
 <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO Certificates Scheme and Levels
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-4">
 <p>
 The WGBO Certification Scheme is a certification for green building product, and evaluates the sustainability performance of these products based on scientific and engineering principles. It is a voluntary certification scheme with a tiered rating system of one of Five levels, where a higher rating indicates better sustainability performance.
 </p>
 <p>
 Based on the number of points earned, projects achieve one of Five levels:
 </p>

 <div className="overflow-x-auto my-6 border border-gray-100 rounded-xl rounded-t-xl overflow-hidden shadow-sm">
 <table className="w-full text-left bg-white text-sm">
 <thead className="bg-emerald-50 border-b border-emerald-100">
 <tr>
 <th className="px-5 py-4 font-bold text-emerald-800">Star Rating</th>
 <th className="px-5 py-4 font-bold text-emerald-800">Certificate level</th>
 <th className="px-5 py-4 font-bold text-emerald-800">Credit Points</th>
 <th className="px-5 py-4 font-bold text-emerald-800">Recognition</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-gray-100 text-black">
 <tr className="hover:bg-gray-50 transition-colors">
 <td className="px-5 py-3 font-semibold text-gray-900">1</td>
 <td className="px-5 py-3">Certificate</td>
 <td className="px-5 py-3">30â€“40</td>
 <td className="px-5 py-3">Good Performance</td>
 </tr>
 <tr className="hover:bg-gray-50 transition-colors">
 <td className="px-5 py-3 font-semibold text-gray-900">2</td>
 <td className="px-5 py-3">Bronze</td>
 <td className="px-5 py-3">41â€“50</td>
 <td className="px-5 py-3">Very Good Performance</td>
 </tr>
 <tr className="hover:bg-gray-50 transition-colors">
 <td className="px-5 py-3 font-semibold text-gray-900">3</td>
 <td className="px-5 py-3">Silver</td>
 <td className="px-5 py-3">51â€“70</td>
 <td className="px-5 py-3">Outstanding Performance</td>
 </tr>
 <tr className="hover:bg-gray-50 transition-colors">
 <td className="px-5 py-3 font-semibold text-gray-900">4</td>
 <td className="px-5 py-3">Gold</td>
 <td className="px-5 py-3">71â€“90</td>
 <td className="px-5 py-3">National Excellence</td>
 </tr>
 <tr className="hover:bg-gray-50 transition-colors">
 <td className="px-5 py-3 font-semibold text-gray-900">5</td>
 <td className="px-5 py-3 text-emerald-700 font-semibold">Platinum</td>
 <td className="px-5 py-3">91 -100</td>
 <td className="px-5 py-3 text-emerald-700 font-medium">National Leadership</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-6">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">WGBO Certificates Process:</h3>
 <p className="text-black font-medium mb-3">
 Invoice Issued and Payment &gt; Submit application &gt; Evaluation &gt; Peer Review &gt; Acknowledgement of points and certificate level &gt; User Agreement &gt; Issuance of Certificate
 </p>
 <ul className="list-disc pl-6 space-y-2 text-black mt-4">
 <li>Project teams must meet mandatory prerequisites and select optional credits to earn points.</li>
 <li>The time taken to complete the certification process varies and depends on how well-prepared companies are with the required test reports and other documentary evidences.</li>
 </ul>
 <p className="mt-4 font-semibold text-gray-800">Our statistics currently indicate the following duration that companies take to compile and submit documents to fulfil certification criteria requirements:</p>
 <ul className="list-none space-y-1 mt-2 text-black">
 <li><strong>Average:</strong> 3.00 months</li>
 <li><strong>Shortest:</strong> 2.0 weeks</li>
 <li><strong>Longest:</strong> 12.00 months</li>
 </ul>
 </div>

 <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 mt-6">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">WGBO Certificates Criteria</h3>
 <p className="text-black">
 To ensure that the criteria are kept up to date with the technological advances in the industry and to stay relevant to market needs, WGBO continuously reviews, make improvements and adjustments to the criteria. Please reach out to <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a> with information of the representative's name, email address, designation, company name and contact number.
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
