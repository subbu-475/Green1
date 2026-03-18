import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Laptop, Video, Megaphone, CalendarSearch, BookMarked, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
 title:"Training & Learning | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="training" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Our Services
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Training and Learning
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />
 <p className="mt-5 max-w-4xl">
 We provide specialised WGBO in-house training to organisations who want to train large groups of staff.
 </p>

 <div className="mt-10 grid gap-10 md:grid-cols-2">
 {/* Benefits */}
 <div className="flex flex-col">
 <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading">What are the benefits of in-house training?</h3>
 <p className="mb-4">In-house training allows you to:</p>
 <ul className="space-y-3">
 {[
"Train large numbers of staff at a significantly lower per head cost",
"Participate in customised training that caters to the needs of your staff and your organisation's business objectives",
"Invite and engage with your key clients, suppliers and contractors to ensure you're working together with the same knowledge and understanding of Green Building.",
"Learn from the most experienced industry professionals – the WGBO Faculty team and WGBO's staff",
"Choose a time and location for training that suits you",
"Demonstrate to your clients and stakeholders your commitment to training in sustainability",
"In-house training fosters a 'team' approach to WGBO providing an opportunity for team building through learning.",
 ].map((item, i) => (
 <li key={i} className="flex items-start gap-3">
 <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
 <span className="text-base font-medium text-black">{item}</span>
 </li>
 ))}
 </ul>
 <div className="mt-6 flex-grow overflow-hidden rounded-xl">
 <Image
 src="/images/training-session.png"
 alt="Professional in-house training session in a green building"
 width={600}
 height={400}
 className="w-full h-full object-cover rounded-xl"
 />
 </div>
 </div>

 {/* What we provide & What you provide */}
 <div className="flex flex-col gap-8">
 <div>
 <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading">What do we provide?</h3>
 <ul className="space-y-3 text-base font-medium text-black">
 <li><strong className="text-gray-900">Presenter:</strong> a member of our highly experienced WGBO Faculty team will be selected, based on their skills, experience and location</li>
 <li><strong className="text-gray-900">Training materials:</strong> we will provide any teaching materials required for the training</li>
 <li><strong className="text-gray-900">Tailored content:</strong> you will have the opportunity to approach WGBO in advance to discuss your organisational training requirements, to ensure that the training provided meets your organisational objectives</li>
 <li><strong className="text-gray-900">CPD points:</strong> any in-house training participant who is involved in WGBO's CPD program will earn WGBO CPD points</li>
 </ul>
 </div>

 <div>
 <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading">What do you need to provide?</h3>
 <ul className="space-y-3 text-base font-medium text-black">
 <li><strong className="text-gray-900">Training venue:</strong> this may be your workplace or another appropriate venue as selected by you. Please note when selecting a venue that 'Green Building' venues assist in demonstrating the ethos of green building by providing a practical example of green building design and/or construction.</li>
 <li><strong className="text-gray-900">List of attendees</strong></li>
 <li><strong className="text-gray-900">Relevant AV equipment</strong></li>
 </ul>
 </div>

 <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-6">
 <h3 className="mb-2 text-lg font-bold text-gray-900 font-heading">How much does it cost?</h3>
 <p>Just mail us to <a href="mailto:enquiry@wgbo.org.in" className="font-medium text-emerald-600 hover:underline">enquiry@wgbo.org.in</a> to get the cost.</p>
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
