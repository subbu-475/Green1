import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about/about-content"

import type { Metadata } from "next"

export const metadata: Metadata = {
 title:"About Us | World Green Building Organization",
 description:
"Learn about the World Green Building Organization (WGBO) — leading the sustainable transformation of the built environment through rating, education, and advocacy.",
}

export default function AboutPage() {
 return (
 <>
 <TopBar />
 <Header />
 <main>
 <AboutContent />
 </main>
 <Footer />
 </>
 )
}
