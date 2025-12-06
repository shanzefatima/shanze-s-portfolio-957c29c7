import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Mail, Linkedin, Send, Loader2 } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
interface Message {
  role: "user" | "assistant";
  content: string;
}
export const Contact = () => {
  const [messages, setMessages] = useState<Message[]>([{
    role: "assistant",
    content: "what's your name?"
  }]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const {
    toast
  } = useToast();
  const email = "shanze.fatima.j@nyu.edu";
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    const userMessage: Message = {
      role: "user",
      content: inputMessage
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('contact-chat', {
        body: {
          messages: [...messages, userMessage]
        }
      });
      if (error) throw error;
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return <footer className="min-h-screen py-24 px-6 bg-background flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* Chat Messages */}
        <div ref={messagesContainerRef} className="space-y-6 mb-8 max-h-[60vh] overflow-y-auto">
          {messages.map((msg, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: msg.role === "assistant" ? -40 : 40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.4
        }} className={msg.role === "assistant" ? "flex items-start gap-4" : "flex justify-end"}>
              {msg.role === "assistant" && <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border">
                  <img alt="Shanze Fatima Javed" className="w-full h-full object-cover" src="/lovable-uploads/0cc7632c-b1ff-40b5-b663-b17b0ea6d565.jpg" />
                </div>}
              <div className={msg.role === "assistant" ? "" : ""}>
                {msg.role === "assistant" && <p className="text-sm text-muted-foreground mb-2 font-medium">Shanze's AI</p>}
                <div className={msg.role === "assistant" ? "bg-muted px-6 py-4 rounded-3xl rounded-tl-sm max-w-md" : "bg-primary px-6 py-4 rounded-3xl rounded-tr-sm max-w-md"}>
                  <p className={msg.role === "assistant" ? "text-foreground text-lg" : "text-primary-foreground text-lg"}>
                    {msg.content}
                  </p>
                </div>
              </div>
            </motion.div>)}
          {isLoading && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border">
                <img src={profilePhoto} alt="Shanze Fatima Javed" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">Shanze's AI</p>
                <div className="bg-muted px-6 py-4 rounded-3xl rounded-tl-sm">
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                </div>
              </div>
            </motion.div>}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="relative">
          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-6">
            <motion.a href={`mailto:${email}`} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/shanzefatimajaved/" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Message Input */}
          <div className="relative">
            <input type="text" value={inputMessage} onChange={e => setInputMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type your message..." disabled={isLoading} className="w-full px-8 py-5 bg-background border-2 border-primary rounded-full text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 pr-16 transition-colors disabled:opacity-50" />
            <motion.button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>


        {/* Footer Links */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="mt-24 pt-12 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <a href="https://dribbble.com/shanzefatima_/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Dribbble
            </a>
            <a href="https://medium.com/@sj3802" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Medium
            </a>
            <a href="https://shanzefatimajaved.blog" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Blog
            </a>
            <span>© 2025 Shanze Fatima Javed</span>
          </div>
        </motion.div>
      </div>
    </footer>;
};