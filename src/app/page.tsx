import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main>
      {/* className="flex min-h-screen flex-col items-center justify-between p-24" */}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
