import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { Expertise } from "@/components/Expertise";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { ThemeController } from "@/components/ThemeController";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [gradientKey, setGradientKey] = useState(0);
  
  // Listen for gradient changes
  useEffect(() => {
    const handleGradientChange = () => {
      setGradientKey(prev => prev + 1);
    };
    
    window.addEventListener('gradientChange', handleGradientChange);
    return () => window.removeEventListener('gradientChange', handleGradientChange);
  }, []);
  
  // Get current gradient values from CSS variables
  const getGradientValue = (index: number) => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--gradient-${index}`)
      .trim() || `hsl(0, 0%, 100%)`;
  };
  
  // Gradient transitions based on scroll - uses CSS custom properties
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      getGradientValue(0),
      getGradientValue(1),
      getGradientValue(2),
      getGradientValue(3),
      getGradientValue(4)
    ]
  );

  return (
    <motion.div 
      key={gradientKey}
      className="min-h-screen w-full"
      style={{ backgroundColor, minHeight: '100vh' }}
    >
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
    </motion.div>
  );
};

export default Index;
