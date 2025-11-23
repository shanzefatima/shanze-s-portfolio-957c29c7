import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Users, Target, CheckCircle2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

// ========================================
// 📸 YOUR IMAGES - UPLOAD TO src/assets/ FOLDER
// ========================================
// You have 7 prototype images to upload:
// 1. Home page (rocket icon overview) → rename to: shoot-stars-home.png
// 2. About project → rename to: shoot-stars-about.png
// 3. Configuration page → rename to: shoot-stars-config.png
// 4. Puzzle 1 (Morse code) → rename to: shoot-stars-puzzle1.png
// 5. Puzzle 2 (Audio logs) → rename to: shoot-stars-puzzle2.png
// 6. Puzzle 3 (Magnetic maze) → rename to: shoot-stars-puzzle3.png
// 7. Results screen → rename to: shoot-stars-results.png
//
// STEPS TO ADD:
// 1. Click "Dev Mode" toggle (top left)
// 2. Upload your 7 images to src/assets/ folder
// 3. Rename them exactly as shown above
// 4. The images will automatically appear!
// ========================================

import heroImage from "@/assets/shoot-stars-hero.jpg";
import homePageImage from "@/assets/shoot-stars-home.png";
import aboutImage from "@/assets/shoot-stars-about.png";
import configImage from "@/assets/shoot-stars-config.png";
import puzzle1Image from "@/assets/shoot-stars-puzzle1.png";
import puzzle2Image from "@/assets/shoot-stars-puzzle2.png";
import puzzle3Image from "@/assets/shoot-stars-puzzle3.png";
import resultsImage from "@/assets/shoot-stars-results.png";
export default function ShootForTheStars() {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <motion.div initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Accessibility + UX Research + Product Design
              </p>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                Shoot for the Stars
              </h1>
              
              <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
                The first fully escape room designed for complete independence
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-y border-border">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">My Role</p>
                  <p className="font-semibold">Lead UX Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                  <p className="font-semibold">1 Designer + 1 Engineer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Duration</p>
                  <p className="font-semibold">6 Months (2024)</p>
                </div>
              </div>

              <div className="mt-12 text-lg text-foreground/90 leading-relaxed">
                <p className="mb-6">
                  Partnered with Helen Keller Services to create an escape room playable entirely without sight. Led research with 15 blind teenagers, prototyped 12 tactile interfaces, conducted 6 test rounds.
                </p>
                <p>
                  Achieved{" "}
                  <span className="font-bold text-primary">100% visual independence</span>,{" "}
                  <span className="font-bold text-primary">60% increase in autonomy</span>, adopted as{" "}
                  <span className="font-bold text-primary">national pilot program</span>.
                </p>
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Visual Independence</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">60%</div>
                <p className="text-sm text-muted-foreground">Player Autonomy</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">15</div>
                <p className="text-sm text-muted-foreground">User Interviews</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">6</div>
                <p className="text-sm text-muted-foreground">Testing Rounds</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image - Full Bleed */}
        <section className="mb-24">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="w-full h-[70vh] overflow-hidden bg-muted">
            <img src={homePageImage} alt="Mission overview interface" className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Problem Statement - Side by side with image */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">The Problem</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Traditional escape rooms rely entirely on visual puzzles. Even "adapted" games required sighted facilitators, eliminating player independence.
                </p>
                <div className="bg-muted/30 border-l-4 border-primary p-6">
                  <p className="text-lg font-semibold text-foreground">
                    Blind teenagers had zero way to play escape rooms independently.
                  </p>
                </div>
              </div>
              <motion.div initial={{
              opacity: 0,
              x: 40
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="overflow-hidden bg-muted border border-border max-w-lg">
                <img src={aboutImage} alt="Research insights" className="w-full h-auto object-contain" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="px-6 mb-32 bg-muted/20 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Research Insights</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">Key Finding</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Interviewed 15 blind teenagers and educators. Existing games relied on sighted guides, killing player agency.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Players demanded independence, not assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Audio must be spatial, not descriptive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Tactile feedback needs instant clarity</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">Strategic Pivot</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most "accessible" games adapt visual designs. We rejected that model. Built from scratch for non-visual interaction first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-6 mb-24 bg-foreground text-background py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl font-black text-primary mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">Spatial Audio</h3>
                <p className="text-background/70">
                  Built 3D audio using binaural recording. Tested with 8 participants for placement accuracy.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Tactile Interfaces</h3>
                <p className="text-background/70">
                  Created physical puzzles with distinct textures. Prototyped 12 versions before final pick.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">03</div>
                <h3 className="text-xl font-bold mb-4">Testing Rounds</h3>
                <p className="text-background/70">
                  6 test rounds with blind teenagers. Each cut facilitator dependency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution with Config Image */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-center">The Solution</h2>
            
            {/* Config Image Full Width */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="mb-20 overflow-hidden bg-muted border border-border">
              <img src={configImage} alt="Configuration interface" className="w-full h-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Spatial Audio Navigation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Directional sounds guide players. Music intensity signals proximity. Voice cues hint without instructions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Tactile Puzzle Mechanics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multi-sensory puzzles blend touch, sound, movement. Instant haptic + audio feedback for cause/effect clarity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Zero Facilitator Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All guidance embedded in the environment. Players get hints in-world, keeping immersion + autonomy intact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Puzzle Gallery - Large Format */}
        <section className="px-6 mb-32 bg-foreground text-background py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-16 text-center">Puzzle Interactions</h2>
            
            <div className="space-y-20">
              {/* Puzzle 1 */}
              <motion.div initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={puzzle1Image} alt="Morse Code puzzle interface" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Morse Code Signal</h3>
                  <p className="text-background/70 text-lg">Tactile interaction with rhythm-based feedback</p>
                </div>
              </motion.div>

              {/* Puzzle 2 - Reversed layout */}
              <motion.div initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2 aspect-square overflow-hidden bg-muted">
                  <img src={puzzle2Image} alt="Audio memory logs interface" className="w-full h-full object-cover" />
                </div>
                <div className="md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Audio Memory Logs</h3>
                  <p className="text-background/70 text-lg">Spatial audio design with directional cues</p>
                </div>
              </motion.div>

              {/* Puzzle 3 */}
              <motion.div initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={puzzle3Image} alt="Magnetic maze interface" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Magnetic Maze</h3>
                  <p className="text-background/70 text-lg">Navigation challenge using haptic feedback only</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Screen - Full Width */}
        <section className="px-6 mb-32">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="overflow-hidden bg-muted border border-border">
              <img alt="Success screen with metrics" className="w-full h-auto object-contain" src="/lovable-uploads/0e12a65f-13ef-4047-be64-26ea22b2bd80.png" />
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-6 mb-24 bg-primary/5 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-center">Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">100%</div>
                <p className="text-lg font-semibold mb-2">Visual Independence</p>
                <p className="text-muted-foreground">
                  Gameplay works completely without sight or assistance
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">60%</div>
                <p className="text-lg font-semibold mb-2">Autonomy Increase</p>
                <p className="text-muted-foreground">
                  Players solve independently vs. traditional games
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">National</div>
                <p className="text-lg font-semibold mb-2">Pilot Program</p>
                <p className="text-muted-foreground">
                  Adopted by Helen Keller Services nationwide
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">Featured</div>
                <p className="text-lg font-semibold mb-2">NYC Design Week 2024</p>
                <p className="text-muted-foreground">
                  Accessibility Innovation Award winner
                </p>
              </div>
            </div>

            <div className="bg-foreground text-background p-12">
              <Quote className="w-12 h-12 text-primary mb-6" />
              <p className="text-2xl leading-relaxed mb-6">
                This is the first time I played a game where I did not feel like I needed help. I was just playing. Like everyone else.
              </p>
              <p className="text-background/70">Maya, 16, Beta Tester</p>
            </div>
          </div>
        </section>

        {/* Learnings Section */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Learnings</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-3">Design for Constraints</h3>
                <p className="text-muted-foreground">
                  Built from non-visual principles first, not adapted visuals. Better product.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-3">Multi-Sensory Power</h3>
                <p className="text-muted-foreground">
                  Audio + tactile + spatial beats visual-only. Works beyond accessibility.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-3">Test Everything</h3>
                <p className="text-muted-foreground">
                  Assumptions about accessibility were wrong. User testing = critical.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Link to="/">
              <motion.button className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-background text-sm uppercase tracking-widest font-bold" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <ArrowLeft className="w-4 h-4" />
                View More Projects
              </motion.button>
            </Link>
          </div>
        </section>
      </article>
    </div>;
}