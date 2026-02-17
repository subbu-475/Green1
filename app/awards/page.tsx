import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AwardsHero } from "@/components/awards/awards-hero"
import { SponsorshipSection } from "@/components/awards/sponsorship-section"
import { SponsorshipBenefits } from "@/components/awards/sponsorship-benefits"
import { AwardsResources } from "@/components/awards/awards-resources"
import { AwardsOverview } from "@/components/awards/awards-overview"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Awards & Sponsorship | World Green Building Organization",
    description:
        "WGBO state-level Awards recognise sustainability excellence. Explore sponsorship opportunities, past events, and application resources.",
}

export default function AwardsPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <AwardsHero />
                <SponsorshipSection />
                <SponsorshipBenefits />
                <AwardsResources />
                <AwardsOverview />
            </main>
            <Footer />
        </>
    )
}
