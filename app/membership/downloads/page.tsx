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
    title: "Quick Downloads | World Green Building Organization",
}

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
                <section id="downloads" className="scroll-mt-32 bg-gray-900 px-6 py-12 md:py-16 text-center">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-extrabold leading-[1.15] text-white md:text-4xl font-heading tracking-tight mb-8">
                        Quick Downloads
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
                        <a href="/images/WGBO Membership Form.docx" download className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                            <Download className="w-8 h-8 text-emerald-400" />
                            <span className="font-semibold text-white">Membership Application</span>
                        </a>
                        <a href="/images/WGBO Code-of-Conduct.docx" download className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                            <Download className="w-8 h-8 text-emerald-400" />
                            <span className="font-semibold text-white">Code of Conduct</span>
                        </a>
                        <a href="mailto:enquiry@wgbo.org.in" className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                            <FileSignature className="w-8 h-8 text-emerald-400" />
                            <span className="font-semibold text-white">Certification</span>
                        </a>
                    </div>

                    <p className="mt-10 text-gray-400">
                        For any further questions, you can contact our <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-400 hover:text-emerald-300 transition-colors underline">enquiry@wgbo.org.in</a>
                    </p>
                </div>
            </section>
            </main>
            <Footer />
        </>
    )
}
