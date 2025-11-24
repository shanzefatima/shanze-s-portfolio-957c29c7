import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Moon, Sun } from "lucide-react";
import { Slider } from "@/components/ui/slider";

// Helper function to interpolate HSL colors
const interpolateHSL = (hue: number, saturation: number, lightness: number) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export const ThemeController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hueValue, setHueValue] = useState([0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedHue = localStorage.getItem('hueValue');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedHue) {
      const hue = parseInt(savedHue, 10);
      setHueValue([hue]);
    }
    
    applyGradient(savedHue ? parseInt(savedHue, 10) : 0, savedTheme === 'dark');
  }, []);

  useEffect(() => {
    applyGradient(hueValue[0], isDark);
  }, [hueValue, isDark]);

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

  const applyGradient = (hue: number, dark: boolean = isDark) => {
    const root = document.documentElement;
    
    if (dark) {
      // Dark mode: subtle dark colors with selected hue
      root.style.setProperty('--gradient-0', 'hsl(0, 0%, 0%)');
      root.style.setProperty('--gradient-1', interpolateHSL(hue, 60, 10));
      root.style.setProperty('--gradient-2', interpolateHSL(hue, 65, 8));
      root.style.setProperty('--gradient-3', interpolateHSL(hue, 60, 10));
      root.style.setProperty('--gradient-4', 'hsl(0, 0%, 0%)');
    } else {
      // Light mode: subtle light colors with selected hue
      root.style.setProperty('--gradient-0', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--gradient-1', interpolateHSL(hue, 65, 90));
      root.style.setProperty('--gradient-2', interpolateHSL(hue, 70, 88));
      root.style.setProperty('--gradient-3', interpolateHSL(hue, 65, 90));
      root.style.setProperty('--gradient-4', 'hsl(0, 0%, 100%)');
    }
  };

  const handleHueChange = (value: number[]) => {
    setHueValue(value);
    localStorage.setItem('hueValue', value[0].toString());
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

              {/* Color Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Background Color</label>
                  <span className="text-xs text-muted-foreground">{hueValue[0]}°</span>
                </div>
                <Slider
                  value={hueValue}
                  onValueChange={handleHueChange}
                  max={360}
                  step={1}
                  className="w-full"
                />
                <div className="flex gap-2 h-8 rounded-lg overflow-hidden">
                  {[0, 60, 120, 180, 240, 300].map((hue) => (
                    <div
                      key={hue}
                      className="flex-1"
                      style={{ backgroundColor: interpolateHSL(hue, 70, isDark ? 10 : 88) }}
                    />
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
