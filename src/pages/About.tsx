import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";
import { Navigation } from "@/components/Navigation";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Intro", "Background", "Expertise", "Beyond Work"];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionIndex = Math.min(Math.floor(latest * sections.length), sections.length - 1);
      setActiveSection(sectionIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress, sections.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Fixed Sidebar Progress Indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {sections.map((section, index) => (
            <div key={section} className="flex items-center gap-4">
              <div className="flex flex-col items-end gap-1">
                <motion.div
                  className="h-12 w-1 bg-border rounded-full overflow-hidden"
                  initial={{ opacity: 0.3 }}
                  animate={{ 
                    opacity: index === activeSection ? 1 : 0.3,
                  }}
                >
                  <motion.div
                    className="w-full bg-foreground origin-top"
                    style={{
                      height: index === activeSection ? 
                        useTransform(scrollYProgress, 
                          [index / sections.length, (index + 1) / sections.length],
                          ["0%", "100%"]
                        ) : index < activeSection ? "100%" : "0%"
                    }}
                  />
                </motion.div>
                <span 
                  className={`text-xs transition-all duration-300 ${
                    index === activeSection 
                      ? "text-foreground font-medium" 
                      : "text-muted-foreground"
                  }`}
                >
                  {section}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="pt-24 lg:pl-32">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl lg:text-7xl font-light tracking-tight">
                  About Me
                </h1>
                
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Shanze is a product designer who builds ecosystems, not just screens. 
                    With a BSc from NYU in Interactive Media Arts and Computer Science, 
                    she bridges design, engineering, and product strategy.
                  </p>
                  
                  <p>
                    Her work spans e-commerce optimization, accessible learning experiences, 
                    and data visualization, always grounded in research and driven by 
                    measurable outcomes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square max-w-lg mx-auto overflow-hidden rounded-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Shanze Fatima Javed" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                Background
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Design has always been about solving problems. During her time at NYU, 
                  Shanze realized that the most impactful solutions come from understanding 
                  both the technical constraints and the human needs.
                </p>
                
                <p>
                  This dual perspective led her to work on projects ranging from accessible 
                  escape rooms to large-scale e-commerce platforms, each requiring a different 
                  balance of creativity and technical precision.
                </p>

                <p>
                  Her approach focuses on research, prototyping, and working closely with 
                  cross-functional teams. Recent work includes improving checkout flows that 
                  reduced cart abandonment by 22%, launching accessible products for underserved 
                  users, and building tools that make complex data more understandable.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-16">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                Expertise
              </h2>
              
              <div className="grid gap-8">
                <div className="space-y-3 p-8 bg-muted/50 rounded-lg">
                  <h3 className="text-2xl font-medium">User Research & Product Strategy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From 0-to-1 ideation, roadmapping, and pilot scaling. She defines success 
                    metrics, conducts user interviews, and translates insights into actionable 
                    product decisions.
                  </p>
                </div>

                <div className="space-y-3 p-8 bg-muted/50 rounded-lg">
                  <h3 className="text-2xl font-medium">Learning Experience Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Simulation architectures, curriculum digitization, and gamified assessments. 
                    Creating educational experiences that engage and transform understanding.
                  </p>
                </div>

                <div className="space-y-3 p-8 bg-muted/50 rounded-lg">
                  <h3 className="text-2xl font-medium">Inclusive Interaction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    WCAG 2.1 compliance, cross-cultural design logic, and empathy-led user research. 
                    Building products that work for everyone, not just the majority.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Beyond Work Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                Beyond Work
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  When not designing, Shanze explores the intersection of technology and art, 
                  experiments with generative systems, and mentors students navigating the 
                  transition from academic projects to commercial products.
                </p>
                
                <p>
                  She believes that great design comes from diverse experiences and perspectives, 
                  which is why she continuously seeks out new challenges and learning opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
