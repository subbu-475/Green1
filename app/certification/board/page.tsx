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
 title:"Certification Board | World Green Building Organization",
}

export default function Page() {
 return (
 <>
 <TopBar />
 <Header />
 <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
 <section id="board" className="scroll-mt-32 bg-gray-50/70 px-6 py-8 md:py-10">
 <div className="mx-auto max-w-7xl">
 <div className="flex items-center gap-3 mb-4">
 <div className="h-8 w-1 rounded-full bg-emerald-500" />
 <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
 Certification
 </span>
 </div>
 <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-4xl lg:text-[40px] font-heading tracking-tight">
 Certification Board
 </h2>
 <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

 <div className="mt-6 text-black space-y-4 max-w-6xl">
 <p>
 World Green Building Organization (WGBO) Certification Board is an independent body of the World Green Building Organization (WGBO) Board of Directors.
 </p>
 <p>
 World Green Building Organization (WGBO) Certification Board is comprised of the World Green Building Organization (WGBO) Professional Certification Board.
 </p>
 <p>
 The Board provides World Green Building Organization (WGBO) members with a method of upgrading their professional status through a professional certification program. The primary purpose of the World Green Building Organization (WGBO) Certification Board is the certification of professionals in Built Environment Professionals, Sustainability and allied areas of expertise.
 </p>
 <p>
 The World Green Building Organization (WGBO) Certification board has been established as a body with its sole purpose to strive for a universal level of professionalism and competency among the World Green Building Organization (WGBO) Certified Members whose functions are related to Sustainability and Environment and related disciplines.
 </p>
 <p>
 The World Green Building Organization (WGBO) certified members are professionals in the multi-disciplines of Built Environment Professionals and Sustainability, recognized for their practical experience and education, obtained through academic institutions and continuing education programs.
 </p>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </>
 )
}
