import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Moon, Sun } from "lucide-react";

interface GradientPreset {
  name: string;
  lightColors: string[];
  darkColors: string[];
}

const gradientPresets: GradientPreset[] = [
  { 
    name: "Default", 
    lightColors: ["hsl(0, 0%, 100%)", "hsl(0, 0%, 98%)", "hsl(0, 0%, 97%)", "hsl(0, 0%, 98%)", "hsl(0, 0%, 100%)"],
    darkColors: ["hsl(0, 0%, 0%)", "hsl(0, 0%, 3%)", "hsl(0, 0%, 5%)", "hsl(0, 0%, 3%)", "hsl(0, 0%, 0%)"]
  },
  { 
    name: "Sunset", 
    lightColors: ["hsl(0, 0%, 100%)", "hsl(20, 70%, 88%)", "hsl(340, 65%, 90%)", "hsl(280, 60%, 92%)", "hsl(0, 0%, 100%)"],
    darkColors: ["hsl(0, 0%, 0%)", "hsl(20, 60%, 12%)", "hsl(340, 60%, 10%)", "hsl(280, 50%, 12%)", "hsl(0, 0%, 0%)"]
  },
  { 
    name: "Ocean", 
    lightColors: ["hsl(0, 0%, 100%)", "hsl(200, 65%, 88%)", "hsl(220, 70%, 90%)", "hsl(240, 60%, 92%)", "hsl(0, 0%, 100%)"],
    darkColors: ["hsl(0, 0%, 0%)", "hsl(200, 60%, 12%)", "hsl(220, 60%, 10%)", "hsl(240, 50%, 12%)", "hsl(0, 0%, 0%)"]
  },
  { 
    name: "Forest", 
    lightColors: ["hsl(0, 0%, 100%)", "hsl(120, 50%, 88%)", "hsl(160, 55%, 90%)", "hsl(180, 50%, 92%)", "hsl(0, 0%, 100%)"],
    darkColors: ["hsl(0, 0%, 0%)", "hsl(120, 40%, 12%)", "hsl(160, 50%, 10%)", "hsl(180, 40%, 12%)", "hsl(0, 0%, 0%)"]
  },
  { 
    name: "Lavender", 
    lightColors: ["hsl(0, 0%, 100%)", "hsl(270, 60%, 88%)", "hsl(290, 65%, 90%)", "hsl(310, 60%, 92%)", "hsl(0, 0%, 100%)"],
    darkColors: ["hsl(0, 0%, 0%)", "hsl(270, 50%, 12%)", "hsl(290, 60%, 10%)", "hsl(310, 50%, 12%)", "hsl(0, 0%, 0%)"]
  },
  { 
    name: "Warm", 
    lightColors: ["hsl(0, 0%, 100%)", "hsl(30, 70%, 88%)", "hsl(40, 75%, 90%)", "hsl(50, 70%, 92%)", "hsl(0, 0%, 100%)"],
    darkColors: ["hsl(0, 0%, 0%)", "hsl(30, 60%, 12%)", "hsl(40, 70%, 10%)", "hsl(50, 60%, 12%)", "hsl(0, 0%, 0%)"]
  },
];

export const ThemeController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedGradient = localStorage.getItem('selectedGradient');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedGradient) {
      const gradientIndex = parseInt(savedGradient, 10);
      setSelectedGradient(gradientIndex);
    }
    
    applyGradient(savedGradient ? parseInt(savedGradient, 10) : 0, savedTheme === 'dark');
  }, []);

  useEffect(() => {
    applyGradient(selectedGradient, isDark);
  }, [selectedGradient, isDark]);

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

  const applyGradient = (index: number, dark: boolean = isDark) => {
    const preset = gradientPresets[index];
    const colors = dark ? preset.darkColors : preset.lightColors;
    const root = document.documentElement;
    
    console.log('Applying gradient:', preset.name, 'Dark mode:', dark, 'Colors:', colors);
    
    root.style.setProperty('--gradient-0', colors[0]);
    root.style.setProperty('--gradient-1', colors[1]);
    root.style.setProperty('--gradient-2', colors[2]);
    root.style.setProperty('--gradient-3', colors[3]);
    root.style.setProperty('--gradient-4', colors[4]);
    
    // Force a repaint
    window.dispatchEvent(new Event('gradientChange'));
  };

  const handleGradientChange = (index: number) => {
    setSelectedGradient(index);
    localStorage.setItem('selectedGradient', index.toString());
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
              <h3 className="text-lg font-semibold text-foreground">Theme</h3>
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
                <span className="text-sm font-medium text-foreground">Dark Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  {isDark ? (
                    <Moon className="w-5 h-5 text-foreground" />
                  ) : (
                    <Sun className="w-5 h-5 text-foreground" />
                  )}
                </button>
              </div>

              {/* Gradient Presets */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Scroll Gradient</label>
                  <span className="text-xs text-muted-foreground">{gradientPresets[selectedGradient].name}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {gradientPresets.map((preset, index) => (
                    <button
                      key={preset.name}
                      onClick={() => handleGradientChange(index)}
                      className={`relative p-4 rounded-lg border-2 transition-all ${
                        selectedGradient === index
                          ? 'border-foreground'
                          : 'border-border hover:border-foreground/50'
                      }`}
                    >
                      <div className="flex gap-1 mb-2">
                        {(isDark ? preset.darkColors : preset.lightColors).slice(1, 4).map((color, i) => (
                          <div
                            key={i}
                            className="h-6 flex-1 rounded"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-foreground">{preset.name}</span>
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
