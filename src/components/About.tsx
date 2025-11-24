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
              She holds a BSc from NYU in Interactive Media Arts and Computer Science. This background allows
              her to work across design, engineering, and product strategy to build complete
              systems rather than isolated features.
            </p>

            <p>
              Her process combines user research, rapid prototyping, and close collaboration with engineering
              and product teams. Past work includes reducing cart abandonment in e-commerce, launching accessible
              products for underserved users, and building data visualization tools that make complex information
              understandable.
            </p>

            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Product Design · UX Research · Accessibility
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Mobile-First E-commerce · Learning Experience Design
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Cross-functional Collaboration · Data-Driven Design
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
