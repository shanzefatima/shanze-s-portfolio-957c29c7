import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Shanze's ability to combine technical depth with empathetic design thinking is remarkable. She doesn't just deliver mockups—she delivers complete systems that work.",
    author: "Professor",
    role: "Interactive Media Arts, NYU",
    avatar: "★"
  },
  {
    quote: "Working with Shanze on the accessibility project was eye-opening. She brought data-driven insights and genuine user empathy to every decision, resulting in a product that truly serves its community.",
    author: "Product Manager",
    role: "Helen Keller Services",
    avatar: "★"
  },
  {
    quote: "Shanze bridges the gap between design and engineering seamlessly. Her prototypes are not just beautiful—they're technically sound and ready for production.",
    author: "Engineering Lead",
    role: "Technology Startup",
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
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from collaborators, mentors, and partners
          </p>
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
