import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
 Award,
 Building2,
 Calendar,
 CheckCircle2,
 FileText,
 Globe2,
 Handshake,
 Info,
 Megaphone,
 Search,
 Share2,
 Star,
 Trophy,
 Users
} from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"Sponsorship | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="sponsorship" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Awards
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
 Sponsorship Opportunities
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-6">
 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
 <Trophy className="h-5 w-5 text-emerald-600" />
 Why support World Green Building Organization (state) level Awards?
 </h3>
 <div className="grid sm:grid-cols-2 gap-4 mt-4">
 {[
"Align your brand with awards that truly recognise the successes and hard work of those who have tackled the challenges we face today.",
"Profile your organisation and demonstrate your commitment to the vital role risk excellence plays in strategy development, operational performance and organisational resilience.",
"Exceptional marketing and PR opportunities.",
"Network and make new contacts and friends with judges, finalists and awards guests, whilst entertaining clients and supporting current and future talent."
 ].map((item, i) => (
 <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
 <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
 <span className="text-black">{item}</span>
 </div>
 ))}
 </div>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 flex items-center gap-2 mt-8">
 <Share2 className="h-5 w-5 text-emerald-600" />
 The awards are promoted via our extended networks including:
 </h3>
 <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 pl-2">
 {[
"National community",
"WGBO e magazine.",
"Digital contacts via our eNewsletter.",
"Social media networks.",
"Website visitors.",
"Promotional materials/corporate brochures in the documentation kit.",
"Logo in the thanking sponsor board - Logo size will vary according to the sponsorship category.",
"Corporate Film during break hours.",
"Accord the status of the sponsorship at the Award Ceremony.",
"Accord the status of the sponsorship at the WGBO Website.",
"Speaking opportunity at the Award Ceremony.",
"Advertisement Banner in the website.",
"Table Space to display products/ brochures.",
"Opportunity to keep a company standee at the venue."
 ].map((item, i) => (
 <div key={i} className="flex items-start gap-2">
 <Star className="h-4 w-4 text-emerald-400 shrink-0 mt-1.5" />
 <span className="text-black">{item}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="mt-8 bg-emerald-50 p-6 rounded-xl border border-emerald-100 flex items-center gap-4">
 <Handshake className="h-8 w-8 text-emerald-600 shrink-0" />
 <div>
 <p className="font-semibold text-gray-900 mb-1">Sponsorship inquiry, please contact us on</p>
 <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-700 font-bold hover:underline text-lg">enquiry@wgbo.org.in</a>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
