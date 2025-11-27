import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Globe, Send, ArrowUpRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Contact = () => {
  const [showEmailCard, setShowEmailCard] = useState(false);
  const [message, setMessage] = useState("");
  const email = "shanze.fatima.j@nyu.edu";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=Let's Chat&body=${encodeURIComponent(message || "Hi Shanze,")}`;
  };

  return (
    <footer className="min-h-screen py-24 px-6 bg-background flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Chat Messages */}
        <div className="space-y-6 mb-8">
          {/* Shanze's Message */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border">
              <img 
                src={profilePhoto} 
                alt="Shanze Fatima Javed"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2 font-medium">Shanze</p>
              <div className="bg-muted px-6 py-4 rounded-3xl rounded-tl-sm max-w-md">
                <p className="text-foreground text-lg">what's your name?</p>
              </div>
            </div>
          </motion.div>

          {/* Response Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end"
          >
            <div className="bg-primary px-6 py-4 rounded-3xl rounded-tr-sm max-w-md">
              <p className="text-primary-foreground text-lg">sounds good 🙏</p>
            </div>
          </motion.div>
        </div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-6">
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shanzefatimajaved/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Message Input */}
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setShowEmailCard(true)}
              placeholder="Message"
              className="w-full px-8 py-5 bg-background border-2 border-primary rounded-full text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 pr-16 transition-colors"
            />
            <motion.button
              onClick={() => setShowEmailCard(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Email Card Overlay */}
        <AnimatePresence>
          {showEmailCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
              onClick={() => setShowEmailCard(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-muted/50 backdrop-blur-sm rounded-2xl p-8 max-w-lg w-full border border-border shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center">
                    <Mail className="w-8 h-8 text-background" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Shanze Fatima Javed</h3>
                    <p className="text-muted-foreground">{email}</p>
                  </div>
                </div>

                <div className="bg-background/50 rounded-xl p-6 mb-6 border-l-4 border-primary space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">To</span>
                    <p className="text-foreground font-medium">{email}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Let's Chat</h4>
                    <p className="text-muted-foreground">Say hello</p>
                  </div>
                </div>

                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-full border-2 border-foreground text-foreground font-semibold text-lg hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2 group"
                >
                  Email Me
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 pt-12 border-t border-border"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://dribbble.com/shanzefatima_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://medium.com/@sj3802"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Medium
            </a>
            <a
              href="https://shanzefatimajaved.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <span>© 2025 Shanze Fatima Javed</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
