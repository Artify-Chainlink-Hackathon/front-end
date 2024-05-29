import Banner from "@/components/landing/banner";
import AboutSection from "@/components/landing/sections/about-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Banner />
      <AboutSection />
    </div>
  );
}
