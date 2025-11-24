import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated particle mesh background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="electric-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(210, 100%, 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(210, 100%, 50%)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <motion.circle
            cx={`${mousePosition.x * 100}%`}
            cy={`${mousePosition.y * 100}%`}
            r="300"
            fill="url(#electric-glow)"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Impact metrics banner */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-electric-blue">22%</span>
              <span className="text-sm uppercase tracking-wider text-muted-foreground">Cart Abandonment ↓</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-electric-blue">25%</span>
              <span className="text-sm uppercase tracking-wider text-muted-foreground">Discoverability ↑</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-electric-blue">40%</span>
              <span className="text-sm uppercase tracking-wider text-muted-foreground">Repeat Orders ↑</span>
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-[0.9]">
            Design-Engineer
            <br />
            <span className="relative inline-block">
              Building
              <motion.span
                className="absolute -inset-2 bg-electric-blue/10 -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
            <br />
            <span className="text-electric-blue">Ecosystems,</span>
            <br />
            Not Screens
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            NYU CS + Design grad who ships products that drive revenue, retention, and real business outcomes. Full-stack design thinking meets measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => {
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-10 py-5 text-sm uppercase tracking-widest font-bold overflow-hidden bg-electric-blue text-white hover:shadow-[0_0_30px_rgba(0,149,255,0.5)] transition-all duration-300"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                See The Impact →
              </motion.span>
            </button>

            <a
              href="#contact"
              className="group relative px-10 py-5 text-sm uppercase tracking-widest font-bold border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Social proof tagline */}
          <motion.p
            className="mt-12 text-sm uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Trusted by startups scaling from 0→1 and enterprises optimizing at scale
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[2px] h-16 bg-gradient-to-b from-transparent via-electric-blue to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};
