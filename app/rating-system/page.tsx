import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RatingHero } from "@/components/rating-system/rating-hero"
import { CertificationScheme } from "@/components/rating-system/certification-scheme"
import { KeyAspects } from "@/components/rating-system/key-aspects"
import { CertificateLevels } from "@/components/rating-system/certificate-levels"
import { CertificateProcess } from "@/components/rating-system/certificate-process"
import { CertificateBenefits } from "@/components/rating-system/certificate-benefits"
import { WGBORecognition } from "@/components/rating-system/wgbo-recognition"
import { LabPartners } from "@/components/rating-system/lab-partners"
import { CertificateValidity } from "@/components/rating-system/certificate-validity"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Rating System | World Green Building Organization",
    description:
        "Explore the WGBO certification scheme — advancing the built environment to one that is greener and more carbon-efficient while facilitating sustainable procurement.",
}

export default function RatingSystemPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <RatingHero />
                <CertificationScheme />
                <KeyAspects />
                <CertificateLevels />
                <CertificateProcess />
                <CertificateBenefits />
                <WGBORecognition />
                <LabPartners />
                <CertificateValidity />
            </main>
            <Footer />
        </>
    )
}
