import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact/contact-content"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | World Green Building Organization",
    description:
        "Get in touch with WGBO. Visit our office at Spencer Plaza Mall, Chennai or reach us via phone and email.",
}

export default function ContactPage() {
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <ContactContent />
            </main>
            <Footer />
        </>
    )
}
