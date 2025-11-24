import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Moon, Sun } from "lucide-react";

interface GradientPreset {
  name: string;
  colors: string[];
}

const gradientPresets: GradientPreset[] = [
  { name: "Default", colors: ["hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)"] },
  { name: "Sunset", colors: ["hsl(0, 0%, 100%)", "hsl(20, 60%, 96%)", "hsl(340, 60%, 96%)", "hsl(280, 50%, 96%)", "hsl(0, 0%, 100%)"] },
  { name: "Ocean", colors: ["hsl(0, 0%, 100%)", "hsl(200, 60%, 96%)", "hsl(220, 60%, 96%)", "hsl(240, 50%, 96%)", "hsl(0, 0%, 100%)"] },
  { name: "Forest", colors: ["hsl(0, 0%, 100%)", "hsl(120, 40%, 96%)", "hsl(160, 50%, 96%)", "hsl(180, 40%, 96%)", "hsl(0, 0%, 100%)"] },
  { name: "Lavender", colors: ["hsl(0, 0%, 100%)", "hsl(270, 50%, 96%)", "hsl(290, 60%, 96%)", "hsl(310, 50%, 96%)", "hsl(0, 0%, 100%)"] },
  { name: "Warm", colors: ["hsl(0, 0%, 100%)", "hsl(30, 60%, 96%)", "hsl(40, 70%, 96%)", "hsl(50, 60%, 96%)", "hsl(0, 0%, 100%)"] },
];

export const ThemeController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState(0);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const applyGradient = (index: number) => {
    setSelectedGradient(index);
    const preset = gradientPresets[index];
    
    // Apply gradient via CSS custom property for scroll-based transitions
    const root = document.documentElement;
    root.style.setProperty('--gradient-0', preset.colors[0]);
    root.style.setProperty('--gradient-1', preset.colors[1]);
    root.style.setProperty('--gradient-2', preset.colors[2]);
    root.style.setProperty('--gradient-3', preset.colors[3]);
    root.style.setProperty('--gradient-4', preset.colors[4]);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-6 h-6" />
      </motion.button>

      {/* Control Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 bg-background border border-border rounded-2xl shadow-2xl p-6 w-80"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Theme</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Dark Mode Toggle */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-sm font-medium">Dark Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  {isDark ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Gradient Presets */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Scroll Gradient</label>
                <div className="grid grid-cols-2 gap-3">
                  {gradientPresets.map((preset, index) => (
                    <button
                      key={preset.name}
                      onClick={() => applyGradient(index)}
                      className={`relative p-4 rounded-lg border-2 transition-all ${
                        selectedGradient === index
                          ? 'border-foreground'
                          : 'border-border hover:border-foreground/50'
                      }`}
                    >
                      <div className="flex gap-1 mb-2">
                        {preset.colors.slice(1, 4).map((color, i) => (
                          <div
                            key={i}
                            className="h-6 flex-1 rounded"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
