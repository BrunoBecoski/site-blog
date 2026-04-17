import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustomerStorySection,
} from "@/templates/landing-page/sections"

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-20 md:gap-30">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  )
}