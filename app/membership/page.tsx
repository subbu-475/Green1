import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MembershipContent } from "@/components/membership/membership-content"

import type { Metadata } from "next"

export const metadata: Metadata = {
 title:"Membership | World Green Building Organization",
 description:"Join WGBO and be part of the global movement towards sustainable development. Access green building resources, training, certification, and professional networking.",
}

export default function MembershipPage() {
 return (
 <>
 <TopBar />
 <Header />
 <main>
 <MembershipContent />
 </main>
 <Footer />
 </>
 )
}
