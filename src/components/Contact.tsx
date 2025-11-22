import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check, Linkedin, Globe, Mail } from "lucide-react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "shanze.fatima.j@nyu.edu";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Confetti effect
    const count = 50;
    const colors = ['hsl(210, 100%, 50%)', 'hsl(0, 0%, 100%)', 'hsl(0, 0%, 0%)'];
    
    for (let i = 0; i < count; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: 50%;
        top: 50%;
        opacity: 1;
        pointer-events: none;
        z-index: 9999;
      `;
      document.body.appendChild(confetti);

      const angle = (Math.PI * 2 * i) / count;
      const velocity = 10 + Math.random() * 10;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      let x = 0, y = 0, opacity = 1;
      const animate = () => {
        x += vx;
        y += vy + 2;
        opacity -= 0.02;
        
        confetti.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
        confetti.style.opacity = opacity.toString();
        
        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          confetti.remove();
        }
      };
      animate();
    }

    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer className="py-32 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-12">
            LET'S BUILD
            <br />
            THE FUTURE
          </h2>
          
          <p className="text-xl text-background/70 max-w-2xl mx-auto mb-12">
            Available for product design roles, UX research, and accessibility consulting
          </p>

          <motion.button
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center gap-3 px-12 py-6 text-sm uppercase tracking-widest font-bold bg-background text-foreground overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
            <span className="relative z-10 group-hover:text-background transition-colors">
              {copied ? "Email Copied!" : "Copy Email"}
            </span>
            {copied ? (
              <Check className="w-4 h-4 relative z-10 group-hover:text-background transition-colors" />
            ) : (
              <Copy className="w-4 h-4 relative z-10 group-hover:text-background transition-colors" />
            )}
          </motion.button>

          <p className="mt-6 text-sm text-background/50 font-mono">{email}</p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-16"
        >
          <a
            href="https://www.linkedin.com/in/shanzefatimajaved/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://dribbble.com/shanzefatima_/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>Dribbble</span>
          </a>
          <a
            href="https://medium.com/@sj3802"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>Medium</span>
          </a>
          <a
            href="https://shanzefatimajaved.blog"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>Blog</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-wider text-background/50"
        >
          <p>© 2025 Shanze Fatima Javed. All rights reserved.</p>
          <p>Designing for impact, accessibility, and human connection.</p>
        </motion.div>
      </div>
    </footer>
  );
};
