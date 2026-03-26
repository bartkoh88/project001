import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import AboutSection from "@/components/AboutSection"
import BrandsSection from "@/components/BrandsSection"
import StrengthsSection from "@/components/StrengthsSection"
import AwardsSection from "@/components/AwardsSection"
import GlobalSection from "@/components/GlobalSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <BrandsSection />
      <StrengthsSection />
      <AwardsSection />
      <GlobalSection />
      <ContactSection />
    </main>
  )
}
