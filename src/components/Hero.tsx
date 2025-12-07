import { motion } from "framer-motion";
export const Hero = () => {
  return <section className="relative px-6 py-24 md:py-40 lg:py-48">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }} className="space-y-12">
          <div className="space-y-6">
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
              Product Designer
            </motion.p>
            
            <h1 className="font-sans text-[clamp(2.8rem,8vw,6rem)] leading-[1.05] tracking-tight font-light text-foreground">Hi, I'm Shanze. I design products that actually work for people.</h1>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="max-w-2xl">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">What drives me? Building things that bridge the gap between business goals and human needs. Not just following best practices, questioning them when they don't serve users. I turn complex problems into simple, measurable outcomes. That's the work I care about.</p>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="px-4 py-2 border border-border/50 rounded-full">Product Strategy</span>
            <span className="px-4 py-2 border border-border/50 rounded-full">UX Architecture</span>
            <span className="px-4 py-2 border border-border/50 rounded-full">Design Systems</span>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};