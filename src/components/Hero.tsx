import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Role */}
          <p className="text-sm font-medium tracking-wide text-muted-foreground mb-8">
            PRODUCT DESIGNER
          </p>

          {/* Name */}
          <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.95] mb-12 tracking-tight">
            Shanze Fatima
            <br />
            Javed
          </h1>

          {/* Intro */}
          <div className="max-w-2xl space-y-6">
            <p className="text-xl leading-relaxed text-foreground/90">
              I design products that bridge strategy, engineering, and user needs. Currently building at the intersection of learning design and digital experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              BSc in Interactive Media Arts and Computer Science from NYU. Previously worked on educational platforms, e-commerce systems, and data visualization tools.
            </p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 flex gap-6"
          >
            <button
              onClick={() => {
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative text-sm font-medium py-3 px-6 border border-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            >
              View Selected Work
            </button>

            <a
              href="#contact"
              className="text-sm font-medium py-3 px-6 text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
