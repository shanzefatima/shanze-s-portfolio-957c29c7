import { motion } from "framer-motion";
export const Hero = () => {
  return <section className="relative px-6 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} className="space-y-12">
          <h1 className="font-sans text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.15] tracking-tight font-light max-w-5xl text-foreground">
            Hi, I'm Shanze. I design products that actually work for people.
          </h1>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl pt-8">
            <p>
              I've spent late nights in usability labs watching blind teenagers navigate digital escape rooms, convinced PMs to kill features because the data said so, and redesigned checkout flows that recovered millions in lost revenue. The work isn't always glamorous, but it's real, it ships, and it moves numbers.
            </p>

            <p>What drives me? Building things that bridge the gap between business goals and human needs. Not just following best practices, questioning them when they don't serve users. That's the work I care about.</p>
          </div>
        </motion.div>
      </div>
    </section>;
};