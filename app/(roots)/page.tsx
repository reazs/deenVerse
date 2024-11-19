import Link from "next/link";

import {
  HeroSection,
  KeyFeatures,
  MobileAppPromo,
  PopularPosts,
  Testimonials,
  UpcomingEvents,
} from "@/components/landingPage";
import Navbar from "@/components/shared/navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      <main>
        <HeroSection />
        <KeyFeatures />
        <PopularPosts />
        <Testimonials />
        <UpcomingEvents />
        <MobileAppPromo />
      </main>
    </div>
  );
}
