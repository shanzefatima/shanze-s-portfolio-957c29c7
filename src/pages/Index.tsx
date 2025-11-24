import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { Expertise } from "@/components/Expertise";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { ThemeController } from "@/components/ThemeController";
import { useScroll, useTransform, motion } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  // Gradient transitions based on scroll - uses CSS custom properties
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "var(--gradient-0, hsl(0, 0%, 100%))",
      "var(--gradient-1, hsl(0, 0%, 100%))",
      "var(--gradient-2, hsl(0, 0%, 100%))",
      "var(--gradient-3, hsl(0, 0%, 100%))",
      "var(--gradient-4, hsl(0, 0%, 100%))"
    ]
  );

  return (
    <>
      <motion.div 
        className="min-h-screen w-full fixed inset-0 -z-10"
        style={{ backgroundColor }}
      />
      <div className="relative z-0">
        <Navigation />
        <ThemeController />
        <main>
          <Hero />
          <CaseStudies />
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
    </>
  );
};

export default Index;
