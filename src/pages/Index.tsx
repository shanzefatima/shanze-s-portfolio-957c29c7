import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { DesignSystem } from "@/components/DesignSystem";

import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        <div id="about">
          <About />
        </div>
        <Testimonials />
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>;
};
export default Index;