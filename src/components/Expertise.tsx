import { motion } from "framer-motion";
import { Target, BookOpen, Users } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Product Strategy",
    description: "From 0-to-1 ideation to roadmapping and pilot scaling. Building products that solve real problems with measurable business impact.",
    metrics: ["30% improvement in user retention", "22% increase in conversion rates", "$50K+ cost savings delivered"]
  },
  {
    icon: BookOpen,
    title: "Learning Experience Design",
    description: "Simulation architectures, curriculum digitization, and gamified assessments. Bridging pedagogy with interactive technology.",
    metrics: ["Bilingual toolkit design for refugee learners", "Multisensory escape room systems", "Career development platforms"]
  },
  {
    icon: Users,
    title: "Inclusive Interaction",
    description: "WCAG 2.1 compliance, cross-cultural design logic, and empathy-led user research. Building for everyone, not just some.",
    metrics: ["100% visual dependency elimination", "National accessibility pilot adoption", "Adobe Creative Jam Winner"]
  }
];

export const Expertise = () => {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Core Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic design thinking meets technical execution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-background border border-border hover:border-primary transition-all duration-300">
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6">
                    <capability.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>

                <div className="space-y-2 mt-6 pt-6 border-t border-border">
                  {capability.metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-2 text-xs text-foreground/70"
                    >
                      <div className="w-1 h-1 mt-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span>{metric}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
