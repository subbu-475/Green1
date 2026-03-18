import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CertificationContent } from "@/components/certification/certification-content"

import type { Metadata } from "next"

export const metadata: Metadata = {
 title:"Certification | World Green Building Organization",
 description:"World Green Building Organization Certification Board, Professional Qualification Scheme, and Continuing Professional Development.",
}

export default function CertificationPage() {
 return (
 <>
 <TopBar />
 <Header />
 <main>
 <CertificationContent />
 </main>
 <Footer />
 </>
 )
}
