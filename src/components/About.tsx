import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

export const About = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden">
              <img src={profilePhoto} alt="Shanze Fatima Javed" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 -z-10"
              initial={{ opacity: 0, x: 20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground order-1 lg:order-2"
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 text-foreground">
              Building for
              <br />
              <span className="text-primary">Everyone</span>
            </h2>

            <p>
              I hold a BSc from NYU in Interactive Media Arts and Computer Science. This unique combination allows
              me to bridge design, engineering, and product strategy—building not just interfaces, but complete
              product ecosystems grounded in research and driven by measurable business outcomes.
            </p>

            <p>
              My approach is deeply data-driven and user-centered. I build end-to-end product experiences that solve
              real problems and move metrics. From reducing cart abandonment by 22% in e-commerce to launching 0-to-1
              accessible products adopted by 500+ users, I combine research, prototyping, and cross-functional
              collaboration to deliver commercial impact.
            </p>

            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Product Design · UX Research · Accessibility Strategy
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Mobile-First E-commerce · Learning Experience Design · Data Visualization
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Cross-functional Collaboration · Metrics-Driven Design · WCAG 2.1 AA Compliance
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
