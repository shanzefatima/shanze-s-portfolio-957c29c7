import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";
import lifestyleCollage from "@/assets/lifestyle-collage.jpg";

export const About = () => {
  return (
    <section className="py-32 px-6">
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
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-foreground">
              About
            </h2>

            <p>
              Shanze holds a BSc from NYU in Interactive Media Arts and Computer Science. She works across design, engineering, and product to build experiences that solve real problems.
            </p>

            <p>
              Her process focuses on research, prototyping, and working closely with cross-functional teams. Recent work includes improving e-commerce checkout flows, launching accessible products for underserved users, and building tools that make complex data more understandable.
            </p>

            <div className="pt-6 space-y-3 text-sm text-muted-foreground">
              <p>Product Design · UX Research · Accessibility</p>
              <p>Mobile E-commerce · Learning Experience Design · Data Visualization</p>
            </div>
          </motion.div>
        </div>

        {/* Beyond Work Section */}
        <div className="mt-32 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
              Beyond Work
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative overflow-hidden rounded-lg"
              >
                <img 
                  src={lifestyleCollage} 
                  alt="Fashion, art galleries, fitness, and social moments" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4 text-lg leading-relaxed text-muted-foreground"
              >
                <p>
                  Outside of design, Shanze is passionate about fashion, fitness, and exploring creative expressions. She finds balance through regular gym sessions, discovering art galleries, and spending quality time with friends.
                </p>
                <p>
                  These interests inform her design sensibility, bringing diverse perspectives to her work and keeping her connected to how people experience the world beyond screens.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
