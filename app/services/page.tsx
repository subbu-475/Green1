import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesContent } from "@/components/services/services-content"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services | World Green Building Organization",
    description: "Explore WGBO services — training, e-learning, campaigns, publications, and more.",
}

export default function ServicesPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <ServicesContent />
            </main>
            <Footer />
        </>
    )
}
