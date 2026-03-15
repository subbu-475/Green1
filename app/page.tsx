import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { HomeContent } from "@/components/home-content"
import { HeroSlider } from "@/components/hero-slider"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroSlider />
        <HomeContent />
      </main>
      <Footer />
    </>
  )
}
