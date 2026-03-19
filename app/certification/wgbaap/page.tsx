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
 title:"World Green Building Advanced Accredited Professional (WGBAAP) | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="wgbaap" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Certification
 </span>
 </div>
 <h2 className="max-w-4xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
 World Green Building Advanced Accredited Professional (WGBAAP)
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-4">
 <p>
 The central accreditation for experienced technical professionals in the built environment industry with 5 years' experience in World Green Building projects. A WGBAAP possesses a deep understanding of National environmental sustainability legislative framework and green building performance standards as well as mastery of the World Green Building certification scheme.
 </p>

 <ul className="list-disc pl-6 space-y-2 mb-6">
 <li>Has more than 5 years of relevant work experience and local industry practice</li>
 <li>Has in-depth knowledge of the World Green Building scheme</li>
 <li>Possesses technical expertise in various aspects of building performance analysis, including the use of simulation tools</li>
 <li>Takes the lead in the integration of multi-disciplinary requirements to enhance building performance to achieve advanced World Green Building certification goals</li>
 <li>Serves as the Responsible Person for the submission of World Green Building project applications</li>
 <li>Is well versed with green building, built environment sustainability trends and developments</li>
 </ul>

 <div className="grid md:grid-cols-2 gap-8 my-8">
 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
 <Users className="h-5 w-5 text-emerald-600" />
 Who is it for?
 </h3>
 <p className="mb-3">World Green Building Advanced Accredited Professional (WGBAAP) is suitable for:</p>
 <ul className="space-y-2">
 {[
"Built Environment Professionals",
"Sustainability Exclusive",
"Sustainability-related Professionals",
"Green Building certified World Green Building Accredited Professional (WGBAP)"
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
 <span>Applicants should possess a building engineering or a building-related degree or diploma which is recognised locally.</span>
 </div>
 <div>
 <strong className="block text-gray-800">Career History</strong>
 <span>Applicants should accumulate at least 5 years of relevant local work experience or 3 years for degree holders.</span>
 </div>
 <div>
 <strong className="block text-gray-800">Course Requirement</strong>
 <span>Attended and pass the Certification Course for World Green Building Accredited Professional (WGBAP).</span>
 </div>
 <div>
 <strong className="block text-gray-800">Renewal of Certification</strong>
 <span>All qualifications under the World Green Building Advanced Accredited Professional (WGBAAP) Professional Qualification Scheme require annual renewal.</span>
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
