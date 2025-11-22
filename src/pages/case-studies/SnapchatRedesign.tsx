import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

// ========================================
// 📸 IMAGE PLACEHOLDERS - UPLOAD YOUR IMAGES!
// ========================================
// UPLOAD these 8 images to src/assets/ folder in Dev Mode:
// 1. snapchat-interaction-comparison.png
// 2. snapchat-navigation-redesign.png
// 3. snapchat-camera-screen.png
// 4. snapchat-messages-screen.png
// 5. snapchat-stories-screen.png
// 6. snapchat-map-screen.png
// 7. snapchat-profile-screen.png
// 8. snapchat-onboarding-flow.png
// ========================================

import heroImage from "@/assets/snapchat-hero.jpg";
const interactionComparisonImage = heroImage;
const navigationRedesignImage = heroImage;
const cameraScreenImage = heroImage;
const messagesScreenImage = heroImage;
const storiesScreenImage = heroImage;
const mapScreenImage = heroImage;
const profileScreenImage = heroImage;
const onboardingFlowImage = heroImage;

export default function SnapchatRedesign() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-24">
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Social Media · Accessibility · Interface Design
              </p>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                Snapchat Redesign
              </h1>
              
              <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
                Making social media accessible for multi-generational audiences by eliminating hidden 
                gestures and achieving 30% faster task completion for older users while maintaining 
                WCAG 2.1 AA compliance.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                  <p className="font-semibold">UX Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
                  <p className="font-semibold">3 Months</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                  <p className="font-semibold">Solo Project</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Year</p>
                  <p className="font-semibold">2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 mb-24 bg-muted/30 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-8 text-center">Why Replace Gestures with Visible Navigation?</h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-background border border-border p-4"
            >
              <img 
                src={interactionComparisonImage}
                alt="Interaction comparison between hidden gestures and visible taps"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </section>

        <section className="px-6 mb-24 bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-6">The Problem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Snapchat's interface relies heavily on hidden gestures, swipes, and undocumented 
                  interactions that create barriers for older users and those with accessibility needs. 
                  The lack of clear navigation and onboarding leads to high abandonment rates among 
                  non-Gen-Z users.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-6">The Goal</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Redesign Snapchat's core interface to be intuitive for multi-generational audiences 
                  while maintaining the app's unique personality. Implement clear navigation, guided 
                  onboarding, and WCAG 2.1 AA accessibility standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Research Process</h2>
            
            <div className="space-y-12">
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">User Testing</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Conducted usability tests with 25 participants aged 35-65 with varying tech literacy. 
                  Asked them to complete basic tasks like sending messages, viewing stories, and 
                  finding settings. 80% struggled with basic navigation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Users couldn't discover key features without external instruction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Gesture-based navigation was completely non-obvious</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Low contrast and small text created accessibility barriers</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">Accessibility Audit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Performed comprehensive WCAG 2.1 audit using automated tools and manual testing. 
                  Identified 47 accessibility violations including insufficient color contrast, 
                  missing alt text, and non-keyboard navigable elements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24 bg-foreground text-background py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Design Solutions</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl font-black text-primary mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">Visible Navigation</h3>
                <p className="text-background/70">
                  Replaced hidden gestures with clear tab bar navigation. Made all core features 
                  discoverable through labeled buttons and intuitive icons.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Guided Onboarding</h3>
                <p className="text-background/70">
                  Created interactive tutorial system that teaches features progressively. 
                  Users learn by doing rather than reading long instructions.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">03</div>
                <h3 className="text-xl font-bold mb-4">Accessibility Overhaul</h3>
                <p className="text-background/70">
                  Improved contrast ratios, added screen reader support, implemented keyboard 
                  navigation, and created high-visibility mode for low vision users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-12 text-center">Navigation Redesign</h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-background border border-border p-4 mb-8"
            >
              <img 
                src={navigationRedesignImage}
                alt="Navigation redesign showing before and after comparison"
                className="w-full h-auto object-contain"
              />
            </motion.div>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Replaced hidden gestures with a clear bottom navigation bar featuring labeled icons for all core features, providing immediate visual hierarchy and discoverability.
            </p>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Key Design Features</h2>
            
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Clear Visual Hierarchy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Reorganized information architecture with consistent patterns. Primary actions 
                  are always visible, secondary actions in menus. Removed ambiguous icons in favor 
                  of labeled buttons where clarity was needed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Progressive Disclosure</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Advanced features appear gradually as users demonstrate proficiency with basics. 
                  This prevents overwhelming new users while still providing power user functionality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Contextual Help</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Integrated help tooltips and hints that appear when users pause on unfamiliar 
                  elements. Quick reference guide accessible from any screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24 bg-muted/30 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-16 text-center">High-Fidelity Screen Redesigns</h2>
            
            <div className="space-y-24">
              {/* Camera Screen */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Camera Screen</h3>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden bg-background border border-border p-4 mb-6"
                >
                  <img 
                    src={cameraScreenImage}
                    alt="Camera screen before and after comparison"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  Clear text labels on all controls, visible camera modes, and accessible navigation bar replacing unlabeled controls and ambiguous iconography.
                </p>
              </div>

              {/* Messages Screen */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Chat/Messages Screen</h3>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden bg-background border border-border p-4 mb-6"
                >
                  <img 
                    src={messagesScreenImage}
                    alt="Messages screen before and after comparison"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  WCAG AA compliant colors, prominent search bar, and labeled action buttons replacing poor contrast and cramped spacing.
                </p>
              </div>

              {/* Stories Screen */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Stories Screen</h3>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden bg-background border border-border p-4 mb-6"
                >
                  <img 
                    src={storiesScreenImage}
                    alt="Stories screen before and after comparison"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  Minimum 44x44pt touch targets, high contrast throughout, and generous tap spacing for better accessibility.
                </p>
              </div>

              {/* Map Screen */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Snap Map Screen</h3>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden bg-background border border-border p-4 mb-6"
                >
                  <img 
                    src={mapScreenImage}
                    alt="Map screen before and after comparison"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  Clear location context cards, visible privacy status, and labeled map controls replacing mystery icons and hidden privacy settings.
                </p>
              </div>

              {/* Profile Screen */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Profile Screen</h3>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden bg-background border border-border p-4 mb-6"
                >
                  <img 
                    src={profileScreenImage}
                    alt="Profile screen before and after comparison"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                  All settings visible and labeled, clear action buttons, and organized information replacing hidden options and unclear iconography.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-8 text-center">Progressive Onboarding Flow</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              A step-by-step onboarding experience that teaches core features without overwhelming users. Each step focuses on one key function with visual guidance and the ability to skip or revisit.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-muted border border-border p-4"
            >
              <img 
                src={onboardingFlowImage}
                alt="Progressive onboarding flow showing 3 steps"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </section>

        <section className="px-6 mb-24 bg-primary/5 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Results & Validation</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">30%</div>
                <p className="text-lg font-semibold mb-2">Faster Task Completion</p>
                <p className="text-muted-foreground">
                  Older users completed core tasks 30% faster with the redesigned interface
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">WCAG 2.1 AA</div>
                <p className="text-lg font-semibold mb-2">Compliance Achieved</p>
                <p className="text-muted-foreground">
                  Full accessibility compliance with 100% of major criteria met
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">85%</div>
                <p className="text-lg font-semibold mb-2">Improved Feature Discovery</p>
                <p className="text-muted-foreground">
                  Users discovered key features without external help in follow-up testing
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">4.2/5</div>
                <p className="text-lg font-semibold mb-2">User Satisfaction Score</p>
                <p className="text-muted-foreground">
                  Up from 2.8/5 in initial testing with older user demographic
                </p>
              </div>
            </div>

            <div className="bg-foreground text-background p-12">
              <Quote className="w-12 h-12 text-primary mb-6" />
              <p className="text-2xl leading-relaxed mb-6">
                "Finally! I can actually use Snapchat to keep up with my grandkids without constantly 
                asking them how to do things. The new design makes everything so much clearer."
              </p>
              <p className="text-background/70">- Robert, 58, User Tester</p>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Insights & Learnings</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Discoverability beats minimalism</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While hidden gestures create a clean interface, they sacrifice usability for vast 
                  numbers of users. Clear navigation is always better than clever navigation.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Accessibility benefits everyone</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Features designed for accessibility (clear labels, high contrast, keyboard navigation) 
                  improved experience for all users, not just those with specific needs.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Progressive learning works</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users don't need to learn everything at once. Introducing features gradually 
                  as they're needed creates better retention and reduces overwhelm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Link to="/">
              <motion.button
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-background text-sm uppercase tracking-widest font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-4 h-4" />
                View More Projects
              </motion.button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
