import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 text-center"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-medium">
            Design Work Portfolio
          </p>
          
          <h1 className="font-sans text-[clamp(2.5rem,7vw,6rem)] leading-[1.1] tracking-tight mb-0 font-bold max-w-5xl mx-auto">
            — Hi! I'm Shanze, a product designer with a background in e-commerce, accessible learning experiences, and data visualization.
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
