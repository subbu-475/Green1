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
 title:"World Green Building Associate (WGBA) | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="wgba" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Certification
 </span>
 </div>
 <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
 World Green Building Associate (WGBA)
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-4 max-w-6xl">
 <p>
 A foundation-level accreditation for new industry entrants or non-technical built environment related professionals seeking to pursue a career in the greening of the built environment or to demonstrate competence in the fundamentals of green building. The WGBA certification denotes a core understanding of sustainability and green building.
 </p>

 <div className="my-6 rounded-xl bg-emerald-50/50 p-6 md:p-8 border border-emerald-100">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">World Green Building Associate Associate Programme.</h3>
 <p className="mb-4">
 The World Green Building Associate (WGBA) foundation-level accreditation is for new industry entrants or existing non-technical built environment related professionals seeking to:
 </p>
 <ul className="list-disc pl-6 space-y-2 mb-4">
 <li>Pursue a career in the greening of the built environment</li>
 <li>Demonstrate competency in the fundamentals of green building</li>
 </ul>
 <p className="mb-4">
 World Green Building Organization (WGBO) accreditation denotes a core understanding of sustainability, green building, the national environmental sustainability legislative framework as well as the key qualities of a green built environment. The Certification Course covers a range of topics that includes energy efficiency, green building materials and technologies, indoor environmental quality and water conservation, and is intended to enhance and reinforce knowledge on built environment sustainability.
 </p>
 <p>
 Awarded upon completion of the Certification Course, the World Green Building Associate accreditation demonstrates a working knowledge of green building fundamentals, key regulations as well as trends and developments, which can help open doors to a growing pool of job opportunities available in-built environment sustainability.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-8 my-8">
 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
 <Users className="h-5 w-5 text-emerald-600" />
 Who is it for?
 </h3>
 <p className="mb-3">World Green Building Associate is suitable for:</p>
 <ul className="space-y-2">
 {[
"Built Environment Professionals",
"Property Managers",
"Interior Designers",
"Corporate Real Estate/Sustainability Exclusive",
"Construction Professionals",
"Sustainability-related Professionals in non-BE sectors",
"Real Estate Agents",
"Professionals and Graduates looking for career conversion to Green Building sector"
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-2">
 <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
 <ShieldCheck className="h-5 w-5 text-emerald-600" />
 Qualifying Criteria
 </h3>
 <div className="space-y-4">
 <div>
 <strong className="block text-gray-800">Academic Qualification</strong>
 <span>Any Engineering Degree</span>
 </div>
 <div>
 <strong className="block text-gray-800">Career History</strong>
 <span>Experience in Any Industry</span>
 </div>
 <div>
 <strong className="block text-gray-800">Course Requirement</strong>
 <span>Attend and pass the Certification Course for World Green Building Associate (WGSA).</span>
 </div>
 <div>
 <strong className="block text-gray-800">Renewal of Certification</strong>
 <span>All qualifications under the WGBO World Green Building Associate (WGBA) Professional Qualification Scheme require annual renewal.</span>
 </div>
 <p className="text-sm mt-2">
 For Any further question, you can contact our <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a>
 </p>
 </div>
 </div>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4">Processing of Application</h3>
 <ul className="list-disc pl-6 space-y-2">
 <li>Applications found ineligible or invalid will be returned to the applicant for resubmission of documents.</li>
 <li>Applications left incomplete will expire after 3 months.</li>
 <li>Please allow approximately 2 months for our officers to process your application upon submission.</li>
 <li>Applicants will be notified via email of their application status.</li>
 <li>Applicants will be evaluated and assessed by a panel and the decision in the award of the World Green Building Organization (WGBO) certification is final.</li>
 <li>WBGO is not obliged or bound to give any reason whatsoever for not awarding or renewing the certification.</li>
 </ul>
 <p className="mt-4">
 For Any further question, you can contact our <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a>
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
