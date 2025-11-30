import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { DesignSystem } from "@/components/DesignSystem";
import { Expertise } from "@/components/Expertise";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        <DesignSystem />
        <div id="expertise">
          <Expertise />
        </div>
        <div id="about">
          <About />
        </div>
        <Testimonials />
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
