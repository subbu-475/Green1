import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { WGBOOverview } from "@/components/about/wgbo-overview"
import { WGBOVision } from "@/components/about/wgbo-vision"
import { WGBOWhat } from "@/components/about/wgbo-what"
import { WGBOTools } from "@/components/about/wgbo-tools"
import { WGBOFocus } from "@/components/about/wgbo-focus"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | World Green Building Organization",
    description:
        "Learn about the World Green Building Organization (WGBO) — leading the sustainable transformation of the built environment through rating, education, and advocacy.",
}

export default function AboutPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <AboutHero />
                <WGBOOverview />
                <WGBOVision />
                <WGBOWhat />
                <WGBOTools />
                <WGBOFocus />
            </main>
            <Footer />
        </>
    )
}
