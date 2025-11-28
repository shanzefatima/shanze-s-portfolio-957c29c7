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
  const sections = ["Intro", "Philosophy", "Skills", "Education", "Process", "FAQ"];

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
                    Her work spans design systems, accessible product experiences, 
                    and UX architecture, always grounded in research and driven by 
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

        {/* Design Philosophy Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                Design Philosophy
              </h2>
              
              <div className="space-y-8 text-lg leading-relaxed">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-foreground">Ecosystems, not screens</h3>
                  <p className="text-muted-foreground">
                    Great products are systems, not collections of features. Every interaction connects to a larger experience, 
                    and understanding those connections is what separates good design from great design.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-foreground">Research drives decisions</h3>
                  <p className="text-muted-foreground">
                    Assumptions are expensive. User research, data analysis, and testing provide the foundation for 
                    design decisions that actually move metrics and improve lives.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-foreground">Accessibility is non-negotiable</h3>
                  <p className="text-muted-foreground">
                    Designing for everyone isn't a feature, it's a baseline. WCAG compliance and inclusive design 
                    principles ensure products work for real humans in real contexts.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
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
                Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-foreground">Design & Prototyping</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Figma, Sketch, Adobe XD, Framer, Axure, InVision Studio. High and low fidelity prototyping, 
                    user flows, wireframes, motion design.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-foreground">UX & Product</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Design thinking, user centered design, iOS guidelines, design systems, 
                    interaction design, minimum viable products, chatbot design.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-foreground">Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HTML, CSS, JavaScript, P5.js, responsive web design, Rhino, Grasshopper. 
                    Comfortable prototyping in code and collaborating with engineers.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-foreground">Creative Tools</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere), Autodesk Maya, 
                    Vectary 3D. Graphic design, branding, 3D modeling, animation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-16 bg-muted/30">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                Education
              </h2>
              
              <div className="space-y-12">
                <div className="space-y-4 pb-8 border-b border-border">
                  <h3 className="text-2xl font-medium text-foreground">New York University</h3>
                  <p className="text-lg text-muted-foreground">
                    Bachelor of Science in Interactive Media Arts & Computer Science
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-foreground">Online Certifications</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">University of Michigan</p>
                      <p className="text-foreground">Extended Reality for Everybody</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">Google</p>
                      <p className="text-foreground">User Experience Design</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">AWS</p>
                      <p className="text-foreground">Generative AI Learning</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">Meta</p>
                      <p className="text-foreground">AR Developer Professional Certificate</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">Parsons</p>
                      <p className="text-foreground">Design Certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
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
                How I Work
              </h2>
              
              <div className="space-y-12">
                <div className="space-y-4 border-l-2 border-border pl-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-mono text-muted-foreground">01</span>
                    <h3 className="text-2xl font-medium text-foreground">Understand the problem</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Stakeholder interviews, user research, data analysis, and competitive audits to define what success looks like.
                  </p>
                </div>

                <div className="space-y-4 border-l-2 border-border pl-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-mono text-muted-foreground">02</span>
                    <h3 className="text-2xl font-medium text-foreground">Explore solutions</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Rapid prototyping, user flows, wireframes, and concept testing with real users to validate direction.
                  </p>
                </div>

                <div className="space-y-4 border-l-2 border-border pl-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-mono text-muted-foreground">03</span>
                    <h3 className="text-2xl font-medium text-foreground">Design & iterate</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    High-fidelity designs, design systems, and close collaboration with engineering to ship quality products.
                  </p>
                </div>

                <div className="space-y-4 border-l-2 border-border pl-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-mono text-muted-foreground">04</span>
                    <h3 className="text-2xl font-medium text-foreground">Measure impact</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Post-launch analytics, user feedback loops, and continuous improvement based on real-world data.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                Frequently Asked
              </h2>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground">What makes your approach different?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The combination of design and engineering background means I understand technical constraints 
                    and can work directly with developers to find solutions that are both beautiful and feasible.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground">What types of projects do you work on?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Product design systems, mobile experiences, learning platforms, and accessible products. 
                    Anything that requires strategic thinking, user research, and measurable outcomes.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground">How do you measure success?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through clear metrics defined at the start. Whether it's reduced cart abandonment, 
                    improved task completion rates, or higher user satisfaction, success is measurable and tied to business goals.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground">What's your design process timeline?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    It depends on scope, but typically 1 to 2 weeks for research and strategy, 2 to 3 weeks for design and testing, 
                    and ongoing collaboration during implementation. Complex products require longer timelines.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground">Do you code your designs?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes. With a CS background, I can prototype in code, understand technical constraints, 
                    and work closely with engineering teams to ensure designs ship as intended.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
