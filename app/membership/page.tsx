import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MembershipHero } from "@/components/membership/membership-hero"
import { MembershipBenefits } from "@/components/membership/membership-benefits"
import { JoinWGBO } from "@/components/membership/join-wgbo"
import { MembershipLevels } from "@/components/membership/membership-levels"
import { ProfessionalMembership } from "@/components/membership/professional-membership"
import { CodeOfConduct } from "@/components/membership/code-of-conduct"
import { MembershipFees } from "@/components/membership/membership-fees"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Membership | World Green Building Organization",
    description:
        "Join WGBO and be part of the global movement towards sustainable development. Access green building resources, training, certification, and professional networking.",
}

export default function MembershipPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <MembershipHero />
                <MembershipBenefits />
                <JoinWGBO />
                <MembershipLevels />
                <ProfessionalMembership />
                <CodeOfConduct />
                <MembershipFees />
            </main>
            <Footer />
        </>
    )
}
