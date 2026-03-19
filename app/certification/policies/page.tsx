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
 title:"WGBO Policies | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="policies" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Certification
 </span>
 </div>
 <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
 WGBO Policies
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-6">
 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Non-Discrimination Policy</h3>
 <p>
 The WGBO is committed to providing a certification process that is fair and free from discrimination. All reasonable efforts are made to ensure that WGBO examinations are based on job-related knowledge and tasks.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Impartiality</h3>
 <p>
 The WGBO Certification Board shall commit to acting impartially in relation to its applicants, candidates, and certified persons. Certification decisions shall be made in accordance with policies and procedures. Policies and procedures affecting applicants, candidates, and certified persons shall be made public and shall fairly and accurately convey information about the certification program.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Confidentiality / Non-Disclosure / Conflict of Interest Statement</h3>
 <p className="font-semibold text-gray-800 mb-2">Confidential and Proprietary Information</p>
 <p className="mb-4">
 For purposes of this Statement,"Confidential Information" means all information and materials, in whatever form, whether tangible or intangible, disclosed by the WGBO or any of its authorized representatives to Volunteers, or to which Volunteers otherwise gain access as a result of volunteering for WGBO. All proprietary information of the WGBO that is not known generally to the public is considered Confidential Information.
 </p>
 <p className="mb-3">Without limiting the generality of the foregoing, the following are deemed Confidential Information:</p>
 <ul className="list-disc pl-6 space-y-1 mb-6">
 <li>Ideas for research and development;</li>
 <li>Information submitted in the investigation of complaints or involving ethics cases;</li>
 <li>Any other information which WGBO must keep confidential as a result of obligations to third parties;</li>
 <li>Information regarding the administration of components of the certification programs;</li>
 <li>Exam-related technologies and components;</li>
 <li>Item content, characteristics, development or other aspects of the examinations and their development, maintenance and administration;</li>
 <li>Identities of Certificants, candidates, customers, suppliers, or third party contractors, including without limitation any media, advertising, or public relations firms;</li>
 <li>The WGBO's e-mail distribution list(s);</li>
 <li>Human resources data and information about employees, contractors and other volunteers;</li>
 <li>Cost and other financial data;</li>
 </ul>

 <p className="font-semibold text-gray-800 mb-2">Non-Disclosure</p>
 <p className="mb-4">
 The WGBO's officers, staff, and volunteers will not divulge any Confidential Information to third parties or copy documents containing any Confidential Information. In no event shall officers, staff, or volunteers use Confidential Information in a manner that is in any way detrimental to WGBO.
 </p>
 <p className="mb-4">
 The WGBO's officers, staff, and volunteers will maintain the confidentiality of all Confidential Information and not misuse, misappropriate, or disclose in writing, orally or by electronic means, any Confidential Information, directly or indirectly, to any other person or use them in any way, either during the term of this Agreement or at any other time thereafter, except as is required in the course of service to WGBO.
 </p>
 <p className="mb-6">
 The WGBO's officers, staff, and volunteers acknowledge and agree that all Confidential Information and similar items whether maintained in hard copy, electronically or on-line relating to WGBO's business shall remain exclusively the property of WGBO and shall only be used by said individuals for the purpose(s) permitted by the WGBO.
 </p>

 <p className="font-semibold text-gray-800 mb-2">Conflict of Interest</p>
 <p className="mb-4">
 The WGBO's officers, staff, and volunteers shall avoid personal and professional conflicts of interest in all matters pertaining to WGBO's programs. Conflicting interests may include but are not limited to such areas as financial, personal relationships, and/or professional relationships.
 </p>
 <p>
 If a situation arises where it is unclear as to whether a conflict of interest exists, the issue shall be discussed with an Officer or employee of WGBO.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Denial of Eligibility</h3>
 <p>
 The WGBO Certification Body maintains an eligibility committee who is responsible to review the eligibility requirements of the applicants and candidates.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">Denial, Suspension, or Revocation of WGBO Certification</h3>
 <p className="mb-4">
 WGBO considers misrepresentation and/or noncompliance with eligibility criteria, the rules and guidelines of WGBO certification, and/or misuse of the WGBO credential serious ethical issues that require investigation and possible disciplinary action.
 </p>
 <p className="mb-3">Cause for denial, suspension, or revocation of certification includes but is not limited to:</p>
 <ul className="list-disc pl-6 space-y-1 mb-4">
 <li>Falsification of information on the WGBO examination application</li>
 <li>Misrepresentation of continuing education credits required for recertification;</li>
 <li>Falsification of any material information requested by WGBO;</li>
 <li>Misrepresentation of WGBO certification status;</li>
 <li>Suspected individual pre-knowledge of test content, impersonation, cheating on the WGBO examination, or other evidence of possible examination compromise.</li>
 <li>Serious violation of a provision within the WGBO Code of Ethics/Conduct.</li>
 </ul>
 <p className="mb-4">
 WGBO investigates alleged misconduct, misrepresentation, and/or noncompliance, beginning with an objective review process in which evidence substantiating the allegations is collected to ensure due process and to protect the rights of candidates/certificants.
 </p>
 <p>
 The process is initiated upon notification of noncompliance or misrepresentation and is conducted in an expedited manner to avoid creating an undue burden on the candidate/certificant. Upon completion of the review process, WGBO reserves the right to take disciplinary action, for valid cause, against its certification holders, individuals seeking WGBO certification, or individuals misrepresenting their WGBO certification status.
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
