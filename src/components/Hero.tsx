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

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h2 className="text-3xl font-sans font-semibold mb-6 tracking-tight">
              HyperMarket — Mobile E-commerce
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Redesigned online grocery shopping experience, reducing cart abandonment by 22% and improving service discoverability by 25%. Mobile-first approach with AI-powered search and real-time order tracking.
            </p>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block text-sm font-medium border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
            >
              View all work →
            </a>
          </div>
          
          <div className="relative aspect-[4/3] bg-accent rounded-sm overflow-hidden">
            {/* Placeholder for featured project image */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Featured project visual
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
