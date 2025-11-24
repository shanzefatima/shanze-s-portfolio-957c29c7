import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-8">
              Shanze Fatima Javed
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Product designer focused on accessible experiences and learning platforms.
            </p>

            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Background in e-commerce, data visualization, and mobile design. BSc in Interactive Media Arts and Computer Science from NYU.
            </p>
          </motion.div>

          {/* Profile Image with Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md ml-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl translate-x-4 translate-y-4" />
              <div className="relative aspect-[3/4] bg-accent rounded-2xl overflow-hidden border border-border">
                <img 
                  src={profilePhoto} 
                  alt="Shanze Fatima Javed" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
