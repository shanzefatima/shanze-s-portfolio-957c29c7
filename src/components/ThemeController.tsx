import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";

export const ThemeController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [lightness, setLightness] = useState(97);

  const updateTheme = (h: number, s: number, l: number) => {
    document.documentElement.style.setProperty('--background', `${h} ${s}% ${l}%`);
  };

  const handleHueChange = (value: number) => {
    setHue(value);
    updateTheme(value, saturation, lightness);
  };

  const handleSaturationChange = (value: number) => {
    setSaturation(value);
    updateTheme(hue, value, lightness);
  };

  const handleLightnessChange = (value: number) => {
    setLightness(value);
    updateTheme(hue, saturation, value);
  };

  const resetTheme = () => {
    setHue(0);
    setSaturation(0);
    setLightness(97);
    updateTheme(0, 0, 97);
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
              <h3 className="text-lg font-semibold">Theme Colors</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Hue Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Hue</label>
                  <span className="text-xs text-muted-foreground">{hue}°</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={hue}
                    onChange={(e) => handleHueChange(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(0, 100%, 50%), 
                        hsl(60, 100%, 50%), 
                        hsl(120, 100%, 50%), 
                        hsl(180, 100%, 50%), 
                        hsl(240, 100%, 50%), 
                        hsl(300, 100%, 50%), 
                        hsl(360, 100%, 50%))`,
                    }}
                  />
                </div>
              </div>

              {/* Saturation Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Saturation</label>
                  <span className="text-xs text-muted-foreground">{saturation}%</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={saturation}
                    onChange={(e) => handleSaturationChange(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(${hue}, 0%, ${lightness}%), 
                        hsl(${hue}, 100%, ${lightness}%))`,
                    }}
                  />
                </div>
              </div>

              {/* Lightness Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Lightness</label>
                  <span className="text-xs text-muted-foreground">{lightness}%</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="85"
                    max="100"
                    value={lightness}
                    onChange={(e) => handleLightnessChange(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, 
                        hsl(${hue}, ${saturation}%, 85%), 
                        hsl(${hue}, ${saturation}%, 100%))`,
                    }}
                  />
                </div>
              </div>

              {/* Preview */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Preview</span>
                  <button
                    onClick={resetTheme}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Reset
                  </button>
                </div>
                <div
                  className="w-full h-20 rounded-lg border border-border"
                  style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Slider Styles */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--foreground));
          cursor: pointer;
          border: 3px solid hsl(var(--background));
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--foreground));
          cursor: pointer;
          border: 3px solid hsl(var(--background));
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};
