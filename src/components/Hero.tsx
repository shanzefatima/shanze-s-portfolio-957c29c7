import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <h1 className="font-sans text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.15] tracking-tight font-light max-w-5xl text-foreground">
            Product designer who thinks in systems, ships with intention, and moves business metrics.
          </h1>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl pt-8">
            <p>
              I'm Shanze, a designer with a BSc from NYU in Interactive Media Arts and Computer Science. I work across the full stack: research, strategy, design, and enough code to be dangerous.
            </p>

            <p>
              I take pride in craft and care about the details that make experiences feel right. From 0 to 1 launches to optimization work that shifts conversion rates, I bring clarity to ambiguity and build things people actually use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
