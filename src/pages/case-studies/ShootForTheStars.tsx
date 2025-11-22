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
import homePageImage from "@/assets/shoot-stars-hero.jpg"; // REPLACE: upload shoot-stars-home.png
import aboutImage from "@/assets/shoot-stars-hero.jpg"; // REPLACE: upload shoot-stars-about.png
import configImage from "@/assets/shoot-stars-hero.jpg"; // REPLACE: upload shoot-stars-config.png
import puzzle1Image from "@/assets/shoot-stars-hero.jpg"; // REPLACE: upload shoot-stars-puzzle1.png
import puzzle2Image from "@/assets/shoot-stars-hero.jpg"; // REPLACE: upload shoot-stars-puzzle2.png
import puzzle3Image from "@/assets/shoot-stars-hero.jpg"; // REPLACE: upload shoot-stars-puzzle3.png
import resultsImage from "@/assets/shoot-stars-hero.jpg"; // REPLACE: upload shoot-stars-results.png

export default function ShootForTheStars() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-24">
        {/* Hero Section */}
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
                Accessibility · UX Research · Product Design
              </p>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                Shoot for the Stars
              </h1>
              
              <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
                Creating the first fully non-visual escape room that eliminates the need for sighted assistance
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-y border-border">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">My Role</p>
                  <p className="font-semibold">Lead UX Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                  <p className="font-semibold">4 Designers + 2 Engineers</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Duration</p>
                  <p className="font-semibold">6 Months (2024)</p>
                </div>
              </div>

              <div className="mt-12 text-lg text-foreground/90 leading-relaxed">
                <p className="mb-6">
                  Worked with Helen Keller Services to design an escape room experience that could be played 
                  entirely without sight. Led user research with 15 blind teenagers, prototyped 12 tactile 
                  interfaces, and conducted 6 rounds of user testing.
                </p>
                <p>
                  The project achieved{" "}
                  <span className="font-bold text-primary">100% visual independence</span>,{" "}
                  <span className="font-bold text-primary">60% increase in player autonomy</span>, and 
                  was adopted as a{" "}
                  <span className="font-bold text-primary">national pilot program</span> by Helen Keller Services.
                </p>
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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

        {/* 📸 IMAGE 1: Prototype Home Page */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] overflow-hidden bg-muted border border-border"
            >
              <img 
                src={homePageImage}
                alt="Interactive prototype home screen with mission overview"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Interactive prototype: Mission overview screen with accessibility features
            </p>
          </div>
        </section>

        {/* 📸 IMAGE 2: About Project */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] overflow-hidden bg-muted border border-border"
            >
              <img 
                src={aboutImage}
                alt="Project background showing research foundation and design principles"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Research foundation and core design principles
            </p>
          </div>
        </section>

        {/* Background Section */}
        <section className="px-6 mb-24 bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Background</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Traditional escape rooms are built entirely around visual puzzles and cues, making them 
              completely inaccessible to blind and low-vision players. Even "adapted" games still required 
              sighted facilitators, reducing player agency and independence.
            </p>
            <div className="bg-background border-l-4 border-primary p-8">
              <p className="text-lg italic text-muted-foreground">
                "Problem: Blind teenagers had no way to play escape rooms independently. 
                Existing accessible games still relied on sighted assistance."
              </p>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Research & Discovery</h2>
            
            <div className="space-y-12">
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">User Research</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Conducted extensive interviews with 15 blind and low-vision teenagers, educators at 
                  Helen Keller Services, and orientation & mobility specialists. Key insights revealed 
                  that existing "accessible" games still relied on sighted guides, reducing player agency.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Players wanted complete independence without sighted assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Audio feedback needed to be spatial, not just descriptive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Tactile elements had to provide immediate, actionable information</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">Competitive Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyzed existing accessible gaming experiences and escape room formats. Found that 
                  most "accessible" games were adapted rather than designed from the ground up for 
                  non-visual interaction. This led to a design-first, accessibility-native approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-6 mb-24 bg-foreground text-background py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Design Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl font-black text-primary mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">Spatial Audio Mapping</h3>
                <p className="text-background/70">
                  Created 3D audio environments using binaural recording techniques to provide 
                  directional cues. Tested with 8 participants to refine sound placement accuracy.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Tactile Interface Design</h3>
                <p className="text-background/70">
                  Developed physical puzzle elements with distinct textures, shapes, and mechanisms. 
                  Prototyped 12 different tactile interfaces before final selection.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">03</div>
                <h3 className="text-xl font-bold mb-4">Iterative Testing</h3>
                <p className="text-background/70">
                  Conducted 6 rounds of user testing with blindfolded sighted users and blind teenagers. 
                  Each iteration reduced dependency on facilitator guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">The Solution</h2>
            
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Audio-First Navigation System</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Designed a spatial audio system where directional sounds guide players through the 
                  environment. Background music changes intensity to indicate proximity to objectives, 
                  while voice cues provide contextual hints without explicit instructions.
                </p>
                <div className="bg-muted/30 p-8 border border-border">
                  <p className="text-sm italic text-muted-foreground">
                    "The sound design made me feel like I could 'see' the room. I knew exactly where 
                    everything was without anyone telling me." - Participant feedback
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Tactile Puzzle Mechanics</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Created multi-sensory puzzles combining touch, sound, and movement. Each puzzle 
                  provided immediate haptic and audio feedback, allowing players to understand cause 
                  and effect without visual confirmation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Independent Gameplay Framework</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Eliminated need for sighted facilitators by embedding all guidance within the experience 
                  itself. Players received hints through the environment, maintaining immersion and autonomy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 📸 IMAGE 3: Configuration Page */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] overflow-hidden bg-muted border border-border mb-4"
            >
              <img 
                src={configImage}
                alt="Configuration screen with difficulty settings and accessibility features"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground text-center mb-24">
              Player configuration: Difficulty selection and accessibility controls
            </p>

            <h2 className="text-4xl font-black tracking-tight mb-12 text-center">Puzzle Interactions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="aspect-square overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={puzzle1Image}
                    alt="Puzzle 1: Morse Code Signal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Puzzle 1: Morse Code Signal - Tactile interaction</p>
              </div>
              <div>
                <div className="aspect-square overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={puzzle2Image}
                    alt="Puzzle 2: Audio Memory Logs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Puzzle 2: Audio Memory Logs - Spatial audio design</p>
              </div>
              <div>
                <div className="aspect-square overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={puzzle3Image}
                    alt="Puzzle 3: Magnetic Maze"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Puzzle 3: Magnetic Maze - Navigation without sight</p>
              </div>
            </div>
          </div>
        </section>

        {/* 📸 IMAGE 7: Results Screen */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] overflow-hidden bg-muted border border-border mb-4"
            >
              <img 
                src={resultsImage}
                alt="Mission success screen showing completion time and puzzle breakdown"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground text-center">
              Success screen: Real-time feedback and performance metrics
            </p>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-6 mb-24 bg-primary/5 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Impact & Results</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">100%</div>
                <p className="text-lg font-semibold mb-2">Visual Dependency Eliminated</p>
                <p className="text-muted-foreground">
                  Complete gameplay possible without any visual input or sighted assistance
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">60%</div>
                <p className="text-lg font-semibold mb-2">Increase in Player Autonomy</p>
                <p className="text-muted-foreground">
                  Players completed puzzles independently compared to traditional adapted games
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">National</div>
                <p className="text-lg font-semibold mb-2">Pilot Adoption</p>
                <p className="text-muted-foreground">
                  Helen Keller Services adopted as pilot program for accessibility innovation
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">Featured</div>
                <p className="text-lg font-semibold mb-2">NYC Design Week 2024</p>
                <p className="text-muted-foreground">
                  Winner of Accessibility Innovation Award and featured installation
                </p>
              </div>
            </div>

            <div className="bg-foreground text-background p-12">
              <Quote className="w-12 h-12 text-primary mb-6" />
              <p className="text-2xl leading-relaxed mb-6">
                "This is the first time I've played a game where I didn't feel like I needed help. 
                I was just... playing. Like everyone else."
              </p>
              <p className="text-background/70">- Maya, 16, Beta Tester</p>
            </div>
          </div>
        </section>

        {/* Learnings Section */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Key Learnings</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Design for the constraint, not around it</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rather than adapting visual designs for accessibility, we built the experience 
                  from non-visual principles first. This created a fundamentally better product.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Multi-sensory feedback is powerful</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Combining audio, tactile, and spatial cues created richer interactions than 
                  visual-only experiences. This insight applies beyond accessibility contexts.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">User testing cannot be replaced</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Assumptions about accessibility needs were consistently wrong. Direct engagement 
                  with users at every stage was critical to success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
