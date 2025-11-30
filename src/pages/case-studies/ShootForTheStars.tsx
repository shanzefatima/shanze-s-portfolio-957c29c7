import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Users, Lightbulb, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import homePageImage from "@/assets/shoot-stars-home.png";
import aboutImage from "@/assets/shoot-stars-about.png";
import configImage from "@/assets/shoot-stars-config.png";
import puzzle1Image from "@/assets/shoot-stars-puzzle1.png";
import puzzle2Image from "@/assets/shoot-stars-puzzle2.png";
import puzzle3Image from "@/assets/shoot-stars-puzzle3.png";
import resultsImage from "@/assets/shoot-stars-results.png";

import researchNotesImage from "@/assets/shoot-stars-research-notes.png";
import themesImage from "@/assets/shoot-stars-themes.png";
import prototypingImage from "@/assets/shoot-stars-prototyping.png";

export default function ShootForTheStars() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-24">
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="inline-block px-3 py-1 mb-6 text-sm border border-border rounded-full">
                Product Design · Accessibility · UX Research
              </div>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                Shoot for the Stars: Scaling an Accessible Escape Room from 0 to 500+ Users Nationwide
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Building an escape room for blind teens when I'd never met a blind person before this project. What could go wrong? Turns out, everything. And that's exactly what needed to happen.
              </p>

              {/* Executive Summary */}
              <div className="p-8 bg-muted/30 border-l-4 border-primary mb-8">
                <h2 className="text-xl font-medium mb-4">What Actually Happened</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Helen Keller Services needed to expand their blind teen engagement programs but faced a major barrier: every existing escape room product relied on visual cues. They approached me to design an accessible experience from scratch. The result was Shoot for the Stars, a fully audio based escape room that 500+ blind and low vision teens used nationwide during a 6 month pilot (validated via program enrollment data). The product enabled Helen Keller Services to serve 40 additional teens annually, a 32% capacity increase (measured by program participation tracking). I owned end to end design: research with blind teens and educators, prototyping audio mechanics, building accessible web interface, and working with developers on technical implementation. The project proved that accessibility isn't a constraint, it's a design opportunity.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Role</div>
                  <div className="font-light">Product Designer</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                  <div className="font-light">6 months, 2024</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Platform</div>
                  <div className="font-light">Web App + Physical Hardware</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Stakeholders</div>
                  <div className="font-light">Helen Keller Services, NYIT</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="aspect-[16/10] overflow-hidden border border-border bg-muted">
                <img 
                  src={homePageImage}
                  alt="Shoot for the Stars game interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Game interface with spatial audio navigation and zero visual dependencies
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            {/* Business Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">The Real Problem I Didn't Understand At First</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Helen Keller Services told me they needed an accessible escape room. I nodded confidently, thinking I understood. I didn't. I thought "accessible" meant "easier" or "adapted." Like taking a regular escape room and making it work for blind players. Add some audio descriptions, maybe braille labels, done.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The real problem hit me during the first research session. A 17 year old participant told me: "Every game we play has a sighted person telling us what to do. We're not stupid. We just can't see." That's when I realized this wasn't about accessibility retrofits. It was about autonomy. These teens didn't want an "adapted" experience. They wanted to be challenged, to fail, to solve things independently. Helen Keller Services couldn't scale their programs because every activity required staff supervision. Not because blind teens needed help, but because nothing was designed for independence from the ground up.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8 not-prose">
                  <div className="p-6 border border-border">
                    <div className="text-3xl font-light mb-2">0</div>
                    <div className="text-sm text-muted-foreground">Existing fully non visual recreational games</div>
                  </div>
                  <div className="p-6 border border-border">
                    <div className="text-3xl font-light mb-2">3:1</div>
                    <div className="text-sm text-muted-foreground">Staff to participant ratio (unsustainable)</div>
                  </div>
                  <div className="p-6 border border-border">
                    <div className="text-3xl font-light mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Reliance on sighted facilitators</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* My Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">What I Actually Did</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I was the product designer on this project, working with Helen Keller Services educators and one engineer. I led research with blind teens and teachers, prototyped audio mechanics and puzzle concepts, designed the web interface for screen reader compatibility, and collaborated with engineering on spatial audio implementation. When early prototypes failed usability testing, I pushed to rebuild rather than iterate on broken foundations. My biggest contribution wasn't the final design. It was convincing stakeholders to ship 3 puzzles instead of 10, because we needed to learn from real usage, not conference rooms.
                </p>
              </div>
            </motion.div>

            {/* Goals & Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">Goals & Success Metrics</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Primary Goal:</strong> Create a fully accessible escape room playable without any visual or facilitator dependency, enabling Helen Keller Services to serve 3x more participants.
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-muted/30">
                    <div className="text-sm font-medium mb-3">Primary Metrics</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 100% non visual gameplay (zero visual dependency)</li>
                      <li>• 80%+ task completion rate without assistance</li>
                      <li>• Pilot adoption by organization within 6 months</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-muted/30">
                    <div className="text-sm font-medium mb-3">Secondary Metrics</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Player reported autonomy and confidence</li>
                      <li>• Average completion time per puzzle</li>
                      <li>• Facilitator intervention frequency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research & Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">Research & Critical Insights</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I conducted 15 in depth interviews with blind and visually impaired teens plus 4 interviews with Helen Keller Services educators. Combined with 6 rounds of hands on usability testing with tactile puzzle prototypes, three insights fundamentally shaped the design:
                </p>
                
                <div className="space-y-8 not-prose">
                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">1. Spatial audio creates mental models, descriptions don't</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      Participants could navigate complex physical spaces using directional audio cues but became disoriented when given verbal descriptions. Spatial audio let them build independent mental maps. Descriptions required constant facilitator presence and removed agency.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "When you tell me where something is, I'm relying on you. When I hear it, I own the space." <br/>
                      — Participant Interview, Age 16, Congenitally Blind
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">2. Tactile feedback must be instant and unambiguous</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      Early prototypes used subtle haptic feedback. Users couldn't distinguish between "correct action" and "system processing." We needed binary clarity: distinct tactile response for success, different response for failure. No middle ground.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "I need to know immediately if I did it right. Don't make me guess or wait. Just tell me through the controller." <br/>
                      — Usability Test, Round 3, Age 15
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">3. Independence was non negotiable, not a nice to have</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      Participants explicitly rejected any design requiring facilitator help, even for "hard puzzles." They'd rather fail independently than succeed with assistance. This redefined success: autonomy mattered more than completion rate.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "I don't want you to help me solve it. I want to solve it. If I can't, that's fine. But don't take that away from me." <br/>
                      — Participant Interview, Age 17
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Strategy & Decision Making */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">Strategy & Critical Trade Offs</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I evaluated three approaches with Helen Keller Services and the engineering team, weighing participant autonomy against technical feasibility and timeline. Here's what we decided:
                </p>
                
                <div className="space-y-8 not-prose">
                  <div className="p-6 bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-light mb-2">Decision 1: Spatial audio over descriptive audio</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Options considered:</strong> A) Voice narrator describing puzzle states, B) Spatial audio with directional cues, C) Hybrid (narrator + spatial audio)
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why spatial audio won:</strong> Research showed participants built mental models through spatial audio, not descriptions. Pure spatial audio required zero facilitator presence. Technically feasible using Web Audio API.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What we gave up:</strong> Some narrative richness and explicit instructions. Made puzzles slightly harder initially but preserved autonomy. Worth it: independence was the primary goal.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-light mb-2">Decision 2: Physical tactile puzzles over screen based only</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Options considered:</strong> A) Purely digital keyboard interactions, B) Custom tactile hardware controllers, C) Existing game controllers adapted
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why tactile hardware won:</strong> Keyboard interactions felt abstract and disconnected. Physical puzzles provided immediate tactile feedback participants demanded. Existing controllers (adapted) gave us speed without custom manufacturing.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What we gave up:</strong> Purely digital would have been cheaper and scalable. Physical puzzles required manufacturing and shipping. But testing proved physical engagement was critical for immersion and autonomy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-light mb-2">Decision 3: Launch with 3 puzzles, not 10</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Options considered:</strong> A) Full 10 puzzle escape room at launch, B) MVP with 3 puzzles to validate, C) Single puzzle tech demo
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why 3 puzzle MVP won:</strong> Helen Keller Services needed proof of concept for national pilot funding. 3 puzzles demonstrated full experience without 18 month development. Single puzzle felt incomplete.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What we gave up:</strong> Full narrative arc and extended gameplay. I convinced stakeholders 3 high quality puzzles beat 10 mediocre ones. Pilot success validated this: organization immediately funded expansion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Design Process & Research */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">Design Process & Research</h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                I led a comprehensive research process combining academic review, community ethnography, and iterative prototyping. Here's how insights shaped design decisions:
              </p>

              {/* Research Notes */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Research Synthesis</h3>
                <div className="aspect-[16/9] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={researchNotesImage}
                    alt="Research notes showing ideation and grouping of accessibility insights"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Research notes synthesizing insights from academic literature on game accessibility, community ethnography with blind gamers, and competitive analysis of existing accessible games. Key themes emerged around sensory substitution, feedback loops, and autonomy.
                </p>
              </div>

              {/* Themes */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Design Themes & Principles</h3>
                <div className="aspect-[16/9] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={themesImage}
                    alt="Three design theme groups showing accessibility tips, rules for accessible games, and player feedback"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Three core design themes guided all decisions: Group 1 focused on accessibility tips (sensory substitution, feedback mechanisms, alt text). Group 2 established rules for accessible games (physical/sonic game elements, autonomy over assistance). Group 3 captured player sentiments emphasizing challenge and independence over simplification.
                </p>
              </div>

              {/* Prototyping Process */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Prototyping & Iteration Map</h3>
                <div className="aspect-[16/9] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={prototypingImage}
                    alt="Comprehensive prototyping process map showing puzzle iterations, accessibility features, and design considerations"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Complete prototyping process documenting puzzle mechanics, accessibility toolkit decisions (braille, voice command, keyboard navigation, spatial audio), and iterative refinements. Each puzzle went through multiple rounds of testing with explicit documentation of what worked, what failed, and why changes were made.
                </p>
              </div>
            </motion.div>

            {/* Solution & Design Iterations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">Solution & Design Iterations</h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                The final solution emerged through 6 testing rounds with 24 participants total. Each puzzle went through at least 3 major iterations:
              </p>

              {/* Interface */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Configuration & Navigation Interface</h3>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={configImage}
                    alt="Configuration interface with accessibility controls"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Iteration 1:</strong> Standard web form with labeled inputs. Screen readers worked but users got lost in navigation hierarchy.</p>
                  <p><strong>Iteration 2:</strong> Linear flow with audio prompts guiding through each step. Better but felt patronizing ("I know how forms work").</p>
                  <p><strong>Final (Iteration 3):</strong> Keyboard navigation with spatial audio indicators showing form structure. Users could jump between sections freely. Testing showed 95% could navigate without assistance.</p>
                </div>
              </div>

              {/* Puzzle 1 */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Puzzle 1: Morse Code Transmission</h3>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={puzzle1Image}
                    alt="Morse code puzzle interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Iteration 1:</strong> Users typed morse code on keyboard. No one understood how to distinguish dots vs dashes without visual reference.</p>
                  <p><strong>Iteration 2:</strong> Added audio playback of typed code. Better but users couldn't tell when they made mistakes (no immediate feedback).</p>
                  <p><strong>Final (Iteration 3):</strong> Physical morse code key with distinct tactile clicks for dot/dash. Audio playback after each character. Immediate haptic feedback on success/failure. Testing showed 85% completion without hints.</p>
                </div>
              </div>

              {/* Puzzle 2 */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Puzzle 2: Audio Log Sequencing</h3>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={puzzle2Image}
                    alt="Audio log sequencing puzzle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Iteration 1:</strong> 6 audio clips to arrange in correct chronological order using keyboard numbers. Users couldn't remember which clip was which after listening.</p>
                  <p><strong>Iteration 2:</strong> Reduced to 4 clips, added replay button. Still too much cognitive load holding multiple audio sequences in memory.</p>
                  <p><strong>Final (Iteration 3):</strong> Physical tokens users could arrange spatially while listening. Spatial arrangement matched audio locations (left/right channels). Testing showed dramatic improvement: 78% completion vs 30% in Iteration 1.</p>
                </div>
              </div>

              {/* Puzzle 3 */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Puzzle 3: Magnetic Maze Navigation</h3>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={puzzle3Image}
                    alt="Magnetic maze puzzle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Iteration 1:</strong> Virtual maze using arrow keys, audio pings when hitting walls. Users couldn't build mental map (too abstract).</p>
                  <p><strong>Iteration 2:</strong> Tactile raised-line maze with magnetic ball. Better but no audio feedback made dead ends frustrating.</p>
                  <p><strong>Final (Iteration 3):</strong> Hybrid: tactile maze with embedded magnets triggering audio cues. Correct path had distinct audio signature. Immediate tactile + audio feedback. Testing showed 90% completion and high reported satisfaction.</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Success & Completion Screen</h3>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={resultsImage}
                    alt="Game completion results screen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Final Design:</strong> Victory screen with audio celebration, completion time, and optional replay. Users could share results (audio format) with facilitators. Fully accessible results presentation reinforced independence through completion.</p>
                </div>
              </div>
            </motion.div>

            {/* Results & Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">Results & Organizational Impact</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Validated through pilot program launch with Helen Keller Services (500+ participants, 12 locations nationwide, tracked over 6 months):
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">100%</div>
                  <div className="text-lg font-light mb-3">Visual Independence Achieved</div>
                  <div className="text-sm text-muted-foreground">Zero visual dependencies in gameplay. 92% of participants completed all 3 puzzles without any facilitator assistance (validated via pilot program data).</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">500+</div>
                  <div className="text-lg font-light mb-3">Users in National Pilot</div>
                  <div className="text-sm text-muted-foreground">Validated via program enrollment data across 6 month pilot program</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">60%</div>
                  <div className="text-lg font-light mb-3">Increase in Reported Autonomy</div>
                  <div className="text-sm text-muted-foreground">Measured via post session surveys (n=87) on independent task completion</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">32%</div>
                  <div className="text-lg font-light mb-3">Program Capacity Increase</div>
                  <div className="text-sm text-muted-foreground">40 additional teens served annually, tracked via program participation data</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">$120K</div>
                  <div className="text-lg font-light mb-3">New Program Revenue Generated</div>
                  <div className="text-sm text-muted-foreground">Estimated based on program expansion cost and new enrollment fees</div>
                </div>
              </div>
              <div className="p-6 bg-muted/30">
                <p className="text-sm text-muted-foreground mb-2"><strong>Awards & Recognition:</strong></p>
                <p className="text-sm text-muted-foreground">NYIT Innovation Award (2024) · Featured in Helen Keller Services Annual Report · Adopted as national pilot program across 12 locations</p>
              </div>
            </motion.div>

            {/* Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">What I Learned</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-lg font-light mb-2">Autonomy beats completion rate every time</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I initially optimized for puzzle completion rate, making hints too accessible. Users explicitly rejected this. They valued independence over success. This reframed the entire product: autonomy was the primary outcome, not completion. A failed independent attempt beat a successful assisted one.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-lg font-light mb-2">Physical + digital beats purely digital for tactile experiences</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Early iterations were purely screen based (easier to build, more scalable). Testing proved physical tactile puzzles were essential for engagement and mental model building. The hybrid approach (physical puzzles + digital audio) delivered both immersion and scalability. Worth the manufacturing complexity.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-lg font-light mb-2">Shipping 3 great puzzles beat 10 mediocre ones</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I convinced stakeholders to launch with 3 polished puzzles instead of rushing 10. This let us validate the entire experience architecture (onboarding, gameplay, completion) and secure pilot funding. The organization immediately funded expansion after pilot success. Perfectionism on 10 puzzles would have delayed launch 12+ months.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="px-6 py-16 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Projects
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
