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
            Shanze Fatima Javed is a product designer specializing in ecosystems that bridge strategy, engineering, and user needs.
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Currently building at the intersection of learning design and digital experiences. BSc in Interactive Media Arts and Computer Science from NYU.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
