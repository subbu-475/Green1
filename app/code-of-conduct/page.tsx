import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, FileText, CheckCircle, Send, Download } from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
 title:"Code of Conduct | World Green Building Organization",
 description:
"WGBO Professional Code of Conduct for members. Review the ethical standards, responsibilities, and statement of agreement for WGBO membership.",
}

const conductItems = [
"Members must be responsible for ethical and professional conduct in relationships with clients, employers, associates, and the public.",
"Members must be responsible for professional competence in performance of all their professional activities.",
"Members must be responsible for the protection of professional interest, reputation, and good name of any deserving World Green Building Organization member or member of other professional organization involved in safety or associate disciplines.",
"Members must be dedicated to professional development of new members in the safety profession and associated disciplines.",
"Members must be responsible for their complete sincerity in professional service to the world.",
"Members must be responsible for continuing improvement and development of professional competencies in safety and associated disciplines.",
 'Members must be responsible for their professional efforts to support the World Green Building Organization motto,"Making Green Go a Way of Life...Worldwide."',
]

const agreementItems = [
"If something occurs during the period of World Green Building Organization membership/certification that makes it impossible or dangerous for me to continue performing the tasks for which I was approved or certified, I shall notify World Green Building Organization of the change of situation to determine if continued approval/certification is in the best interests of World Green Building Organization and/or the industry.",
"I will not use the membership/certification in such a manner as to bring World Green Building Organization and its governing bodies into disrepute, and will not make any statement regarding the membership/certification which the World Green Building Organization considers misleading or unauthorized.",
"I will discontinue the use of all claims to membership/certification that contain any reference to the World Green Building Organization membership/certification upon suspension or withdrawal of certification, and will return any certificates issued through the World Green Building Organization Membership and Certification program.",
"I will not use the World Green Building Organization membership or certification in a misleading manner.",
]

export default function CodeOfConductPage() {
 return (
 <>
 <TopBar />
 <Header />
 <main>
 {/* Hero */}
 <section className="relative bg-gradient-to-br from-primary via-primary/90 to-emerald-800 py-20 text-primary-foreground">
 <div className="absolute inset-0 bg-[url('/images/hero-1-v3.jpg')] bg-cover bg-center opacity-10" />
 <div className="relative z-10 mx-auto px-4 text-center">
 <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
 <Shield className="h-10 w-10" />
 </div>
 <h1 className="font-serif text-4xl font-bold md:text-5xl">Code of Conduct</h1>
 <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
  World Green Building Organization - International Office for India
 </p>
 <a
 href="/images/WGBO Code-of-Conduct.docx"
 download
 className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
 >
 <Download className="h-4 w-4" />
 Download Code of Conduct (.docx)
 </a>
 </div>
 </section>

 {/* Introduction */}
 <section className="py-16">
 <div className="mx-auto px-4">
 <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
 <div className="flex items-start gap-4">
 <FileText className="mt-1 h-6 w-6 shrink-0 text-primary" />
 <p className="text-base leading-relaxed text-foreground/80">
 Members of the World Green Building Organization, by virtue of their acceptance of
 membership into the World Green Building Organization, are bound to the following
 Code of Conduct regarding their activities associated with the World Green Building
 Organization:
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Code of Conduct Items */}
 <section className="pb-16">
 <div className="mx-auto px-4">
 <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
 Professional <span className="text-primary">Obligations</span>
 </h2>
 <div className="space-y-4">
 {conductItems.map((item, index) => (
 <div
 key={index}
 className="group flex gap-4 rounded-xl border border-border bg-background p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
 >
 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
 {index + 1}
 </div>
 <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{item}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Statement of Agreement */}
 <section className="bg-secondary py-16">
 <div className="mx-auto px-4">
 <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
 Statement of <span className="text-primary">Agreement</span>
 </h2>
 <div className="space-y-4">
 {agreementItems.map((item, index) => (
 <div
 key={index}
 className="flex gap-4 rounded-xl border border-border bg-background p-5 shadow-sm"
 >
 <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
 <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{item}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Signature & Submission */}
 <section className="py-16">
 <div className="mx-auto px-4">
 <div className="rounded-2xl border border-border bg-background p-8 shadow-lg md:p-10">
 <h3 className="mb-6 font-serif text-xl font-bold text-foreground md:text-2xl">
 Signature & Submission
 </h3>

 <div className="mb-8 space-y-5">
 <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
 <label className="w-32 text-sm font-semibold text-foreground/70">Signature</label>
 <div className="h-px flex-1 border-b-2 border-dashed border-foreground/20" />
 </div>
 <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
 <label className="w-32 text-sm font-semibold text-foreground/70">Date</label>
 <div className="h-px flex-1 border-b-2 border-dashed border-foreground/20" />
 </div>
 <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
 <label className="w-32 text-sm font-semibold text-foreground/70">Printed Name</label>
 <div className="h-px flex-1 border-b-2 border-dashed border-foreground/20" />
 </div>
 </div>

 <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
 <div className="flex items-start gap-3">
 <Send className="mt-1 h-5 w-5 shrink-0 text-primary" />
 <div>
 <p className="text-sm font-semibold text-foreground">
 Submit Signed Copy
 </p>
 <p className="mt-2 text-sm leading-relaxed text-foreground/70">
 The World Green Building Organization requires a signed copy of this Code of
 Conduct to be placed in our file. Please sign and return the completed form to:
 </p>
 <p className="mt-3 text-sm font-medium text-foreground/80">
 World Green Building Organization, WGBO-WSO, 715-A, 7th Floor, Spencer Plaza
 Mall, Anna Salai, Chennai, Tamil Nadu 600002, India
 </p>
 <p className="mt-2 text-sm text-foreground/70">
 Email:{""}
 <a
 href="mailto:support@wgbo.org.in"
 className="font-medium text-primary hover:underline"
 >
 support@wgbo.org.in
 </a>
 </p>
 <a
 href="/images/WGBO Code-of-Conduct.docx"
 download
 className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
 >
 <Download className="h-4 w-4" />
 Download Form (.docx)
 </a>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main >
 <Footer />
 </>
 )
}
