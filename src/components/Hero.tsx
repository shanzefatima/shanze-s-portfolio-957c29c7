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
          <h1 className="font-sans text-[clamp(3rem,8vw,7rem)] leading-[1.05] tracking-tight mb-8 font-medium">
            Shanze Fatima Javed
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Product designer focused on accessible experiences and learning platforms. Background in e-commerce, data visualization, and mobile design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
