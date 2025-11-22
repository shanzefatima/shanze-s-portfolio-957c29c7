import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              Building for
              <br />
              <span className="text-primary">Everyone</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I'm Shanze Fatima Javed, a Product Designer who brings a rare blend of Interactive Media Arts, 
              Computer Science, and accessibility expertise to every project. This unique background allows me 
              to bridge design, engineering, and inclusive practices in ways most designers can't.
            </p>
            
            <p>
              My approach is deeply data-driven and user-centered. I don't just design screens—I build entire 
              ecosystems that solve real problems. From creating the first accessible escape room for blind teens 
              to optimizing platforms that serve thousands daily, I combine research, prototyping, and cross-functional 
              collaboration to deliver measurable impact.
            </p>

            <p>
              I've delivered 30% improvements in user retention, 22% increases in conversions, and $50K+ in cost 
              savings through strategic design decisions. As a Figma Student Ambassador, Adobe Creative Jam Winner, 
              and speaker at NYC Design Week, I bring both technical depth and strategic vision. I work fluently with 
              engineering teams using Figma, React, Python, and modern design systems to ship products that scale.
            </p>

            <div className="pt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Dean's Honors List · NYU Social Impact Fellowship
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Featured Speaker, Parsons Design Symposium 2024
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Winner, Accessibility Innovation Award - NYC Design Week
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "30%", label: "User Retention Increase" },
            { value: "22%", label: "Conversion Lift" },
            { value: "$50K+", label: "Cost Savings" },
            { value: "100%", label: "Visual Dependency Eliminated" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
