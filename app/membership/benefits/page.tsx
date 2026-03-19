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
 title:"Benefits of Membership | World Green Building Organization",
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
 Membership
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Benefits of Membership
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-4">
 <p>
 The World Green Building Organization (WGBO) provides a network system to its members whereby professional assistance may be requested by an individual, organization, state, or country on a personal basis. Members needing assistance may write directly to the World Green Building Organization (WGBO) with a specific request, and we will try to link the requester with a person, organization, or resource which may be of assistance.
 </p>
 <p>
 Becoming a member of World Green Building Organization (WGBO) is an exciting opportunity for organisations to showcase their commitment to sustainability and gain recognition as leaders in the green building industry.
 By joining the World Green Building Organization (WGBO), organisations can network with like-minded professionals, collaborate on sustainability initiatives, and contribute to shaping the future of sustainable building practices.
 </p>
 <p>
 We welcome organisations of any size and sector that want to make our buildings, cities and communities better places to live, work and play.
 </p>

 <div className="pt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
 {[
"Provides all members with a membership certificate for display on their office wall and an identification card.",
"Awards a Certificate of Honorary Membership to the corporations, companies, and other entities paying the membership and/or certification fees for their employees.",
"Active members receive News-Letters, Tech-Letters, and other membership publications.",
"Members receive a discount on the subscription for the semi-annual publication of the World Green Building Organization Journal.",
"Entitled to reduced fees at seminars, conferences, and classes given by the WGBO (local, regional, and international programs). When Continuing Education Units are applicable, an appropriate certificate is issued.",
"Members who attend conferences, seminars, and classes receive a Certificate of Attendance. For individuals attending sponsored courses, a Certificate of Completion is issued upon completion."
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
