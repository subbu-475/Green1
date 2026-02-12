import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { StatsBar } from "@/components/stats-bar"
import { LatestNews } from "@/components/latest-news"
import { AboutSection } from "@/components/about-section"
import { RatingSystems } from "@/components/rating-systems"
import { EventsSection } from "@/components/events-section"
import { NationalBenefits } from "@/components/national-benefits"
import { NationalFootprint } from "@/components/national-footprint"
import { CertifiedProjects } from "@/components/certified-projects"
import { InitiativesMarquee } from "@/components/initiatives-marquee"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroSlider />
        <StatsBar />
        <LatestNews />
        <AboutSection />
        <RatingSystems />
        <EventsSection />
        <NationalBenefits />
        <NationalFootprint />
        <CertifiedProjects />
        <InitiativesMarquee />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
