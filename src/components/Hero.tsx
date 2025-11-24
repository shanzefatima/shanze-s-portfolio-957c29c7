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
          <p className="text-lg text-muted-foreground">For anyone</p>
          
          <h1 className="font-sans text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.15] tracking-tight font-light max-w-5xl">
            Product designer who builds ecosystems that solve real problems and move metrics.
          </h1>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl pt-8">
            <p>
              Shanze is a product designer with a BSc from NYU in Interactive Media Arts and Computer Science. 
              She works across design, engineering, and product to create experiences that deliver measurable impact.
            </p>

            <p>
              She takes pride in her craft and focuses on research-driven design. From 0-to-1 product launches 
              to optimization work that moves conversion rates, she brings strategic thinking and technical fluency 
              to every project.
            </p>

            <p>
              Recent work includes reducing cart abandonment by 22% through mobile-first e-commerce redesign, 
              launching accessible products adopted by 500+ users nationwide, and creating data visualization 
              tools that make complex information understandable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
