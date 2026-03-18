import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
 Award,
 Briefcase,
 GraduationCap,
 Users,
 BadgeCheck,
 Star,
 FileSignature,
 Scale,
 CreditCard,
 Download,
 CheckCircle2
} from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"Professional Membership | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="professional" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Membership
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Professional Membership
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black max-w-6xl space-y-4">
 <p className="font-semibold text-gray-900">
 Become a World Green Building Organization (WGBO) Professional Member
 </p>
 <p>
 Being acknowledged as a Professional Member of a Sustainability and Environment organization based upon one's education, years of knowledge, and experience in the Sustainability and Environment field is a goal for many to achieve. Not everyone has the college or university degree that is sometimes required to compete for an advanced level Sustainability and Environment Professionals Certification. Not everyone enjoys the environment of classroom training and potentially taking the computer-type exam, which doesn't always show one's true abilities in Sustainability and Environment management and/or practice.
 </p>
 <p>
 There are many Sustainability and Environment Directors, Sustainability and Environment Coordinators, and Sustainability and Environment Specialists in the Sustainability and Environment arena who have many years of experience but lack the mathematical expertise to pass a specific Sustainability and Environment certification exam. However, by a submission of one's work/career credentials, résumé, professional references, Sustainability and Environment seminar certificates, Sustainability and Environment education, and several testimonies from peers showing his/her elite level, Sustainability and Environment practitioners and professionals can become a World Green Building Organization (WGBO) Professional Member upon verification and approval.
 </p>

 <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 my-6">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-3 flex items-center gap-2">
 <Briefcase className="h-5 w-5 text-emerald-600" />
 Candidate Evaluation Form
 </h3>
 <p className="mb-4">
 This membership level gives one a great opportunity to continue to gain knowledge as a member of the World Green Building Organization (WGBO), network with and learn from other members, and attend our annual Symposium featuring world-class Sustainability and Environment professionals from around the world presenting various types of Sustainability and Environment modules.
 </p>
 <p className="mb-4">
 The World Green Building Organization (WGBO) Professional Members are Sustainability and Environment professionals performing full-time activities in these fields. Along with the Professional Membership Application, current résumé, and World Green Building Organization (WGBO) Code of Conduct, the following documentation is to be submitted:
 </p>
 <ul className="list-decimal pl-6 space-y-2 mb-4">
 <li>Two Letters of Recommendations as to one's Sustainability and Environment abilities on the job</li>
 <li>Two Candidate Evaluations from colleagues, associates, or peers who know of one's abilities and successes</li>
 <li>Supporting documentation to include professional memberships, industry certifications and registrations, educational transcripts, etc.</li>
 </ul>
 <p>
 Degrees should be in Sustainability, Environment, engineering, Sustainability and Environment management or other curricula acceptable to the World Green Building Organization (WGBO) Approval Board. Degrees are to be from approved and accredited colleges or universities.
 </p>
 </div>
 <p>
 To request more information and the appropriate forms for application for the World Green Building Organization (WGBO) Professional membership:
 </p>
 <p>
 Membership in the World Green Building Organization (WGBO) is open to all individuals and entities involved in the Sustainability or Environment field, regardless of race, color, creed, ideology, religion, social status, sex, or political beliefs. All applicants accept that World Green Building Organization (WGBO) will conduct independent verification of employer, education, credentials, etc.
 </p>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
