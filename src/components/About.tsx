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
              I'm Shanze Fatima Javed, a Product and UX Designer specializing in inclusive design 
              and data-driven product development. Currently pursuing B.S. in Interactive Media at 
              New York University, I've delivered measurable impact across accessibility, e-commerce, 
              and learning platforms.
            </p>
            
            <p>
              My approach combines deep user research with strategic product thinking. Whether it's 
              designing the first escape room for blind teens, optimizing a university library website 
              to serve 500+ daily users, or reimagining social media interfaces for multi-generational 
              audiences, I focus on creating experiences that are both accessible and delightful.
            </p>

            <p>
              I've delivered up to 30% improvements in user retention, 22% increases in conversions, 
              and pioneered accessibility features that have been adopted as national pilots. As a 
              Figma Student Ambassador, Adobe Creative Jam Winner, and featured speaker at industry 
              events, I bring both technical expertise and strategic vision to every project.
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
