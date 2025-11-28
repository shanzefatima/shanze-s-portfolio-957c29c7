import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
interface Message {
  role: "user" | "assistant";
  content: string;
}
export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    role: "assistant",
    content: "Hi! I'm Shanze's AI assistant. What would you like to know?"
  }]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const {
    toast
  } = useToast();
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
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
  return <>
      {/* Chat Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.95
    }}>
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} transition={{
        duration: 0.2
      }} className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-background border-2 border-border rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-muted px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-border">
                  <img alt="Shanze Fatima Javed" className="w-full h-full object-cover" src="/lovable-uploads/0072b064-c325-4845-8cc7-c6d5f0bed655.png" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Shanze's AI</p>
                  <p className="text-xs text-muted-foreground">Usually replies instantly</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: msg.role === "assistant" ? -20 : 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3
          }} className={msg.role === "assistant" ? "flex items-start gap-2" : "flex justify-end"}>
                  {msg.role === "assistant" && <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-border">
                      <img alt="AI" className="w-full h-full object-cover" src="/lovable-uploads/7937fa5e-491a-48b5-b9ea-a6ce1c292fe4.png" />
                    </div>}
                  <div className={msg.role === "assistant" ? "bg-muted px-4 py-3 rounded-2xl rounded-tl-sm max-w-[280px]" : "bg-primary px-4 py-3 rounded-2xl rounded-tr-sm max-w-[280px]"}>
                    <p className={msg.role === "assistant" ? "text-foreground text-sm" : "text-primary-foreground text-sm"}>
                      {msg.content}
                    </p>
                  </div>
                </motion.div>)}
              {isLoading && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-border">
                    <img src={profilePhoto} alt="AI" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                </motion.div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="relative">
                <input type="text" value={inputMessage} onChange={e => setInputMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type a message..." disabled={isLoading} className="w-full px-4 py-3 bg-muted border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary pr-12 transition-colors disabled:opacity-50" />
                <motion.button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </motion.button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};