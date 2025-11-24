import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background gradient that follows mouse */}
      <motion.div className="absolute inset-0 opacity-30" style={{
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent)) 0%, transparent 50%)`
    }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: "100px 100px"
    }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: "easeOut"
      }}>
          <motion.p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }}>
            I'm Shanze Fatima Javed
          </motion.p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
            Product Designer
            <br />
            <span className="text-primary">Building Experiences</span>
            <br />
            That Actually Work
          </h1>

          <motion.p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }}>
            Shanze holds a BSc from NYU in Design Media and Computer Science. She bridges design, engineering, and strategy to create data-driven digital products that solve real problems.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="mt-16">
            <button onClick={() => {
            document.getElementById("work")?.scrollIntoView({
              behavior: "smooth"
            });
          }} className="group relative px-8 py-4 text-sm uppercase tracking-widest font-semibold overflow-hidden">
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                Explore Case Studies
              </span>
              <motion.div className="absolute inset-0 bg-primary" initial={{
              scaleX: 0
            }} whileHover={{
              scaleX: 1
            }} transition={{
              duration: 0.3
            }} style={{
              originX: 0
            }} />
              <div className="absolute inset-0 border border-foreground group-hover:border-primary transition-colors duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-12 left-1/2 transform -translate-x-1/2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2,
        duration: 0.8
      }}>
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }} className="w-[1px] h-16 bg-gradient-to-b from-transparent via-foreground to-transparent" />
        </motion.div>
      </div>
    </section>;
};