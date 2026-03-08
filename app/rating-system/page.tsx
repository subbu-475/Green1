import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RatingContent } from "@/components/rating-system/rating-content"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Rating System | World Green Building Organization",
    description: "Explore the WGBO certification scheme — advancing the built environment to one that is greener and more carbon-efficient.",
}

export default function RatingSystemPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <RatingContent />
            </main>
            <Footer />
        </>
    )
}
