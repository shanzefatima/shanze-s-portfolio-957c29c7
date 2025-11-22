import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

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
              <img 
                src={profilePhoto} 
                alt="Shanze Fatima Javed"
                className="w-full h-full object-cover"
              />
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

            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Dean's Honors List · NYU Social Impact Fellowship
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Figma Student Ambassador · Adobe Creative Jam Winner
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <p className="text-sm font-semibold text-foreground">
                  Featured Speaker, NYC Design Week & Parsons Symposium
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
