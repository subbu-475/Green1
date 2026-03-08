import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { HomeContent } from "@/components/home-content"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </>
  )
}
