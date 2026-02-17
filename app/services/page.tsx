import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { TrainingSection } from "@/components/services/training-section"
import { MembershipOverview } from "@/components/services/membership-overview"
import { MembershipLevels } from "@/components/services/membership-levels"
import { ProfessionalMembership } from "@/components/services/professional-membership"
import { CertificationBoard } from "@/components/services/certification-board"
import { AccreditationTypes } from "@/components/services/accreditation-types"
import { AccreditationBenefits } from "@/components/services/accreditation-benefits"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services | World Green Building Organization",
    description:
        "Explore WGBO services — training, membership, certification, and professional accreditation for green building professionals.",
}

export default function ServicesPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <ServicesHero />
                <TrainingSection />
                <MembershipOverview />
                <MembershipLevels />
                <ProfessionalMembership />
                <CertificationBoard />
                <AccreditationTypes />
                <AccreditationBenefits />
            </main>
            <Footer />
        </>
    )
}
