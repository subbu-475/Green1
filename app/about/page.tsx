import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { WSOHistory } from "@/components/about/wso-history"
import { WSOObjectives } from "@/components/about/wso-objectives"
import { WGBOOverview } from "@/components/about/wgbo-overview"
import { WGBOWhat } from "@/components/about/wgbo-what"
import { WGBOTools } from "@/components/about/wgbo-tools"
import { WGBOFocus } from "@/components/about/wgbo-focus"
import { WGBOCertification } from "@/components/about/wgbo-certification"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | World Green Building Organization",
    description:
        "Learn about the World Safety Organization (WSO) history, objectives, and the World Green Building Organization (WGBO) — driving sustainable, energy-efficient building practices worldwide.",
}

export default function AboutPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <AboutHero />
                <WSOHistory />
                <WSOObjectives />
                <WGBOOverview />
                <WGBOWhat />
                <WGBOTools />
                <WGBOFocus />
                <WGBOCertification />
            </main>
            <Footer />
        </>
    )
}
