import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/conversion";
import {
  ArticlesSection,
  FaqSection,
  PodcastSection,
  TestimonialsSection,
  ValuesSection,
} from "@/components/sections/experience";
import {
  CompetenciesSection,
  HeroSection,
  IntroSection,
  VerticalsSection,
} from "@/components/sections/primary";

/** Shallow page composition keeps routing separate from section responsibilities. */
export function SitePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroSection />
      <VerticalsSection />
      <CompetenciesSection />
      <TestimonialsSection />
      <ValuesSection />
      <PodcastSection />
      <ArticlesSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
