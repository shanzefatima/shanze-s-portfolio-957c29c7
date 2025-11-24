import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "She consistently delivers work that balances user needs with technical constraints. Her designs are thoughtful, well-researched, and ready for production.",
    author: "Product Manager",
    role: "E-commerce Platform",
    avatar: "★"
  },
  {
    quote: "Working with her is seamless. She understands the entire product lifecycle and makes decisions that consider both immediate needs and long-term scalability.",
    author: "Engineering Lead",
    role: "Mobile Team",
    avatar: "★"
  },
  {
    quote: "Her approach to accessibility goes beyond compliance. She designs systems that are genuinely inclusive and create value for users who are often overlooked.",
    author: "Director of Product",
    role: "Learning Platform",
    avatar: "★"
  }
];

export const Testimonials = () => {
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
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Testimonials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative bg-background p-8 border border-border/50 group hover:border-primary/50 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-6" />
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
