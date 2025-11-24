import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h1 className="font-sans text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight mb-12 max-w-5xl">
            Product designer who ships products that move business metrics.
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build end-to-end product experiences at the intersection of strategy, engineering, and user needs. 22% reduction in cart abandonment. 25% improvement in feature discoverability. 500+ users onboarded to accessible products.
          </p>
        </motion.div>

        {/* Results Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-y border-border/40 py-8 mb-32"
        >
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">22%</span>
              <span className="text-red-500">↓</span>
              <span className="text-muted-foreground">Cart Abandonment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">25%</span>
              <span className="text-green-500">↑</span>
              <span className="text-muted-foreground">Discoverability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">40%</span>
              <span className="text-green-500">↑</span>
              <span className="text-muted-foreground">Repeat Orders</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">500+</span>
              <span className="text-muted-foreground">Users Onboarded</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
