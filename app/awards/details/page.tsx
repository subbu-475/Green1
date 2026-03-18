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
 title:"Awards | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="awards" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Awards
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO Awards Nomination Information
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-6 max-w-6xl">
 <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
 <FileText className="h-5 w-5 text-emerald-600" />
 Nomination Procedures
 </h3>
 <p className="mb-4">
 The awards cycle is from <strong>1 January to 31 December</strong> each year. Nominations for a given year are accepted in the WGBO by <strong>April 31st</strong>, following the end of the award cycle. To keep things as simple as possible, a single award nomination process is used for all awards.
 </p>
 <p className="mb-4">
 Please read the instruction carefully and you will find that all the potential situations are covered. A letter format will be accepted if all the information is provided in the proper order. It is hard to provide too much justification for your nomination. The most frequent problem is having insufficient information to judge the validity of the nomination.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 text-emerald-800">
 The submission must contain the following information in the order shown below:
 </h3>
 <div className="space-y-4">
 <div className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">1</div>
 <p className="pt-1">Name of the award for which the nomination is being submitted.</p>
 </div>
 <div className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">2</div>
 <div className="pt-1">
 <p className="font-semibold text-gray-800 mb-2">Name of the individual, group, committee, organization, or firm being nominated.</p>
 <ul className="list-disc pl-6 space-y-2 mt-2">
 <li><strong>If nominating an individual:</strong> provide name, home address, and phone number and the employer's work address, phone, and email address.</li>
 <li><strong>If nominating a group or committee:</strong> provide the name of the group or committee and the organization with which it is affiliated and the name, address, telephone number, and email address, of the chairperson.</li>
 <li><strong>If nominating an organization or firm:</strong> provide the name, address, and telephone of the firm and the name, address phone number, and email address if applicable, of the chief executive officer, president, or owner.</li>
 </ul>
 </div>
 </div>
 <div className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">3</div>
 <p className="pt-1">Provide the name, address, telephone, and email address, of the person making the nomination.</p>
 </div>
 <div className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">4</div>
 <p className="pt-1">If the nominee is an individual, name the employer and provide a brief description of the nominee's current position. If the nominee is a group, provide a description of the purpose of the group and the primary organization it supports.</p>
 </div>
 <div className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">5</div>
 <div className="pt-1">
 <p className="font-semibold text-gray-800 mb-2">Provide a description of the key outstanding accomplishments of the nominee. It must be clear exactly how the nominee meets the criteria for the award nominated.</p>
 <ul className="list-disc pl-6 space-y-2 mt-2">
 <li><strong>For individuals:</strong> provide a summary of the nominees educational and WGBO related professional accomplishments. Enumerate the nominee's contributions to the WGBO Organization, safety profession, and his/her employer and community.</li>
 <li><strong>For groups, committees, organization, or firms:</strong> provide a summary of the nominee's contribution to the advancement of the WGBO.</li>
 </ul>
 </div>
 </div>
 <div className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">6</div>
 <p className="pt-1">Provide the name, address, phone number, and email address if applicable, of three references that can provide comments concerning the nominee's performance. At least one reference must be a WGBO organization member. Persons listed as references cannot be related to or employed by the nominee.</p>
 </div>
 <div className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">7</div>
 <p className="pt-1">Provide appropriate supporting documentation to support the nomination. If the nomination is based on published works, provide copies of the document(s).</p>
 </div>
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
