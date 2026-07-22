import { HeroSection } from "@/components/shared/HeroSection";
import { AboutSection } from "@/components/shared/AboutSection";
import { HowItWorksSection } from "@/components/shared/HowItWorksSection";
import { WhyChooseSection } from "@/components/shared/WhyChooseSection";

export default function Homepage() {
  return (
    <div className="w-full space-y-8 sm:space-y-12 overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <WhyChooseSection />
    </div>
  );
}
