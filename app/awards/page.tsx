import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AwardsContent } from "@/components/awards/awards-content"

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
                <AwardsContent />
            </main>
            <Footer />
        </>
    )
}
