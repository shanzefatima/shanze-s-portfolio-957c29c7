import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const DesignSystem = () => {
  return (
    <section id="design-system" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Design Systems Thinking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Strong product design requires systematic thinking. Here's how I approach component design, 
            typography scales, and interaction patterns.
          </p>
        </motion.div>

        {/* Button System */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-medium mb-8">Component System: Buttons</h3>
          <div className="bg-background p-12 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">Primary</p>
                <Button size="lg" className="w-full">
                  Primary Action
                </Button>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• High emphasis actions</p>
                  <p>• Solid background</p>
                  <p>• Min height: 44px (touch target)</p>
                  <p>• 16px horizontal padding</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">Secondary</p>
                <Button variant="secondary" size="lg" className="w-full">
                  Secondary Action
                </Button>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Medium emphasis actions</p>
                  <p>• Muted background</p>
                  <p>• Hover state with scale</p>
                  <p>• Accessible contrast maintained</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">Outline</p>
                <Button variant="outline" size="lg" className="w-full">
                  Tertiary Action
                </Button>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Low emphasis actions</p>
                  <p>• Border only</p>
                  <p>• Ghost hover state</p>
                  <p>• Minimum 2px border</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">Destructive</p>
                <Button variant="destructive" size="lg" className="w-full">
                  Delete
                </Button>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">Ghost</p>
                <Button variant="ghost" size="lg" className="w-full">
                  Cancel
                </Button>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground">Link Style</p>
                <Button variant="link" size="lg" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Typography Scale */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-medium mb-8">Typography Scale</h3>
          <div className="bg-background p-12 border border-border space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-mono text-muted-foreground">Display / 56px / Line height 1.1</p>
              <h1 className="text-[56px] leading-[1.1] font-light tracking-tight">
                Design that scales
              </h1>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-sm font-mono text-muted-foreground">H1 / 40px / Line height 1.2</p>
              <h2 className="text-[40px] leading-[1.2] font-medium tracking-tight">
                Clear hierarchy matters
              </h2>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-sm font-mono text-muted-foreground">H2 / 32px / Line height 1.25</p>
              <h3 className="text-[32px] leading-[1.25] font-medium">
                Section headings
              </h3>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-sm font-mono text-muted-foreground">H3 / 24px / Line height 1.33</p>
              <h4 className="text-[24px] leading-[1.33] font-medium">
                Subsection headings
              </h4>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-sm font-mono text-muted-foreground">Body Large / 18px / Line height 1.5</p>
              <p className="text-lg leading-relaxed">
                Large body text for introductions and emphasis. Maintains readability at larger sizes 
                while providing clear visual hierarchy.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-sm font-mono text-muted-foreground">Body / 16px / Line height 1.5</p>
              <p className="text-base leading-relaxed">
                Standard body text for most content. Optimized for readability with comfortable 
                line height and letter spacing.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-sm font-mono text-muted-foreground">Small / 14px / Line height 1.43</p>
              <p className="text-sm">
                Small text for captions, metadata, and secondary information.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Spacing System */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-medium mb-8">Spacing Tokens</h3>
          <div className="bg-background p-12 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="h-2 bg-primary" style={{ width: '4px' }}></div>
                <p className="text-sm font-mono">4px / 0.25rem</p>
                <p className="text-xs text-muted-foreground">Micro spacing</p>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-primary" style={{ width: '8px' }}></div>
                <p className="text-sm font-mono">8px / 0.5rem</p>
                <p className="text-xs text-muted-foreground">Tight spacing</p>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-primary" style={{ width: '16px' }}></div>
                <p className="text-sm font-mono">16px / 1rem</p>
                <p className="text-xs text-muted-foreground">Base unit</p>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-primary" style={{ width: '24px' }}></div>
                <p className="text-sm font-mono">24px / 1.5rem</p>
                <p className="text-xs text-muted-foreground">Comfortable</p>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-primary" style={{ width: '32px' }}></div>
                <p className="text-sm font-mono">32px / 2rem</p>
                <p className="text-xs text-muted-foreground">Medium gap</p>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-primary" style={{ width: '48px' }}></div>
                <p className="text-sm font-mono">48px / 3rem</p>
                <p className="text-xs text-muted-foreground">Large gap</p>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-primary" style={{ width: '64px' }}></div>
                <p className="text-sm font-mono">64px / 4rem</p>
                <p className="text-xs text-muted-foreground">Section spacing</p>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-primary" style={{ width: '96px' }}></div>
                <p className="text-sm font-mono">96px / 6rem</p>
                <p className="text-xs text-muted-foreground">Major sections</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Color Semantics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-medium mb-8">Color Semantics</h3>
          <div className="bg-background p-12 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-background border-2 border-border"></div>
                  <div>
                    <p className="font-mono text-sm">background</p>
                    <p className="text-xs text-muted-foreground">Primary surface</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-foreground"></div>
                  <div>
                    <p className="font-mono text-sm">foreground</p>
                    <p className="text-xs text-muted-foreground">Primary text</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary"></div>
                  <div>
                    <p className="font-mono text-sm">primary</p>
                    <p className="text-xs text-muted-foreground">Brand / CTA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary"></div>
                  <div>
                    <p className="font-mono text-sm">secondary</p>
                    <p className="text-xs text-muted-foreground">Secondary surfaces</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted"></div>
                  <div>
                    <p className="font-mono text-sm">muted</p>
                    <p className="text-xs text-muted-foreground">Subtle backgrounds</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent"></div>
                  <div>
                    <p className="font-mono text-sm">accent</p>
                    <p className="text-xs text-muted-foreground">Highlights / hover</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-destructive"></div>
                  <div>
                    <p className="font-mono text-sm">destructive</p>
                    <p className="text-xs text-muted-foreground">Errors / danger</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-border"></div>
                  <div>
                    <p className="font-mono text-sm">border</p>
                    <p className="text-xs text-muted-foreground">Dividers / outlines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                All colors maintain WCAG AA contrast ratios for accessibility. Semantic naming ensures 
                consistency across light and dark modes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};