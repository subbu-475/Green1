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
    title: "Application for Certification | World Green Building Organization",
}

export default function Page() {
    return (
        <>
            <TopBar />
            <Header />
            <main className="min-h-screen bg-gray-50/10 flex flex-col w-full grow pt-4 pb-12">
                <section id="application" className="scroll-mt-32 bg-white px-6 py-8 md:py-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-1 rounded-full bg-emerald-500" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 font-heading">
                                Certification
                            </span>
                        </div>
                        <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.15] text-gray-900 md:text-3xl lg:text-[36px] font-heading tracking-tight">
                            Application for Certification
                        </h2>
                        <div className="mt-5 h-[3px] w-20 rounded-full bg-emerald-500" />

                        <div className="mt-6 text-[16px] leading-[1.8] text-black-800 space-y-6 max-w-6xl">
                            <p>
                                To apply for any Certification with WGBO, you must first become an Affiliate Member. You will need to submit the following:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 mb-6">
                                <li>Membership Application</li>
                                <li>Code of Conduct</li>
                                <li>Current Résumé/CV</li>
                                <li>Payment (NEFT, UPI, etc.)</li>
                            </ul>

                            <p>
                                When you have become an Affiliate Member and are ready to pursue Certification with the WGBO, please submit the following:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 mb-6">
                                <li>Application for Certification</li>
                                <li>Two Candidate Evaluations</li>
                                <li>Current résumé/CV</li>
                                <li>Supporting Documentation (certificates, transcripts, etc.).</li>
                            </ul>

                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                <p className="mb-4">
                                    If you need extra space for any section of the Application, you may list it on a separate sheet. Please note your name on that sheet, sign, and date it.
                                </p>
                                <p className="mb-4">
                                    Your complete application packet will be sent to the WGBO Certification Board for evaluation. If you are approved for Certification, you will be set up to take the applicable examination utilizing one of the WGBO approved testing options.
                                </p>
                                <p>
                                    Send completed documents to <a href="mailto:enquiry@wgbo.org.in" className="text-emerald-600 font-medium hover:underline">enquiry@wgbo.org.in</a>, and a separate invoice will be generated for payment.
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
