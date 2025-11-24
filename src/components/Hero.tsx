import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <h1 className="font-sans text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight mb-12 max-w-5xl">
            Shanze Fatima Javed designs product experiences that connect user needs with business goals.
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            She works at the intersection of design, engineering, and strategy to build systems that scale. Currently focused on learning experiences and accessible product design. Previously worked on e-commerce, data visualization, and mobile platforms. Holds a BSc in Interactive Media Arts and Computer Science from NYU.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
