import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Laptop, Video, Megaphone, CalendarSearch, BookMarked, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
 title:"E-Learning | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="elearning" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Our Services
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 WGBO E-learning
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <p className="mt-6 text-black">
 Traditional methods of learning i.e class room training / coaching have limitations in terms of time and cost involvement. There is little flexibility for a working person to enhance his learning required for career advancement. Whereas, E-learning mode offers an alternative for those who cannot attend classroom training.
 </p>

 <p className="mt-6 font-semibold text-gray-900">The E-learning is fast becoming popular as it offers following benefits:</p>
 <div className="mt-4 grid gap-4 sm:grid-cols-3 text-center">
 {[
"It is Cost Effective and Time Saving.",
"It is easily accessible as per participant's convenience.",
"It offers continuous assessment of the progress."
 ].map((benefit, idx) => (
 <div key={idx} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 flex items-center justify-center">
 <p className="font-medium text-black">{benefit}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
