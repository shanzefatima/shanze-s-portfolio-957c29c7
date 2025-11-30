import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, TrendingUp, Users, ShoppingCart, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hypermarket-home-screen.png";
import onboardingImage from "@/assets/hypermarket-onboarding.png";
import searchImage from "@/assets/hypermarket-search-discovery.png";
import categoriesImage from "@/assets/hypermarket-categories-offers.png";
import cartTrackingImage from "@/assets/hypermarket-cart-tracking.png";
import checkoutImage from "@/assets/hypermarket-checkout-payment.png";
import profileImage from "@/assets/hypermarket-profile-wishlist.png";
export default function HyperMarket() {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-24">
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="mb-16">
              <div className="inline-block px-3 py-1 mb-6 text-sm border border-border rounded-full">
                E-Commerce · Mobile UX · Product Strategy
              </div>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">HyperMarket: Recovering Lost Revenue Through Mobile Checkout Optimization</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Sometimes the best design decision is admitting your entire approach is wrong and starting over. This is that story.
              </p>

              {/* Executive Summary */}
              <div className="p-8 bg-muted/30 border-l-4 border-primary mb-8">
                <h2 className="text-xl font-medium mb-4">The Uncomfortable Truth</h2>
                <p className="text-muted-foreground leading-relaxed">
                  HyperMarket was bleeding revenue through mobile checkout. 58% cart abandonment rate, mostly on mobile, which represented 78% of their traffic. I was brought in as Solo Product Designer for 4 months to fix it. The core issue wasn't just bad UX, it was that the company had optimized for desktop, but users were shopping on phones during their commutes and lunch breaks. Through analytics deep dives, user interviews, and rapid prototyping, I redesigned mobile checkout from discovery to delivery tracking. The result: cart abandonment dropped from 58% to 36%, a 22% reduction validated via A/B test (n=12,400 users over 6 weeks). Mobile checkout became 2.5x faster (measured via task completion analytics), and repeat orders increased 40% (tracked via customer retention cohorts).
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Role</div>
                  <div className="font-light">Solo Product Designer</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                  <div className="font-light">4 months, 2023</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Platform</div>
                  <div className="font-light">iOS, Android, Web</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Stakeholders</div>
                  <div className="font-light">CPO, Engineering Lead, Growth PM</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="mb-24">
              <div className="aspect-[16/10] overflow-hidden border border-border bg-muted">
                <img src={heroImage} alt="HyperMarket Mobile Home Screen" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Redesigned mobile-first shopping experience with smart search, simplified checkout, and real-time tracking
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            {/* Business Problem */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-24">
              <h2 className="text-3xl font-light mb-8">How We Were Bleeding Money (And Didn't Realize Why)</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The CPO dropped this in our first meeting: "We're losing $2.1 million a year to cart abandonment." Then he showed me the data. 58% abandonment rate. Industry average was 35%. We were almost double. Every abandoned $45 cart was money walking out the door. The Q4 revenue target depended on fixing this. No pressure.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Here's what broke my brain: 70% of traffic was mobile, but the entire experience was designed desktop first. Like trying to navigate a highway using a map designed for bicycles. Users were abandoning at two brutal moments. First, 45% bailed when they hit delivery selection and saw hidden fees they never knew existed. Second, 28% dropped at payment because there was zero visibility into when or if their groceries would actually arrive. We were asking people to trust us with $45 and their dinner plans while giving them nothing to trust. Brilliant.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8 not-prose">
                  <div className="p-6 border border-border">
                    <div className="text-3xl font-light mb-2">58%</div>
                    <div className="text-sm text-muted-foreground">Cart abandonment rate (industry avg: 35%)</div>
                  </div>
                  <div className="p-6 border border-border">
                    <div className="text-3xl font-light mb-2">$2.1M</div>
                    <div className="text-sm text-muted-foreground">Annual lost revenue from abandoned carts</div>
                  </div>
                  <div className="p-6 border border-border">
                    <div className="text-3xl font-light mb-2">70%</div>
                    <div className="text-sm text-muted-foreground">Mobile traffic with desktop first UX</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* My Role */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-24">
              <h2 className="text-3xl font-light mb-8">My Role</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I was the sole designer on this project, reporting directly to the product manager and working alongside two engineers. My scope included end to end UX: competitive analysis, user research synthesis, wireframing, high fidelity prototyping, usability testing, and design system contributions. I also defined success metrics with the PM and influenced prioritization decisions based on research insights. When engineering raised concerns about implementing real time order tracking within the timeline, I proposed data showing that transparency was users' top request. We negotiated a compromise: I simplified the tracking interface to reduce implementation complexity, and they committed to basic tracking in V1 with plans to enhance later. That kind of strategic trade off is what product design is about.
                </p>
              </div>
            </motion.div>

            {/* Goals & Success Metrics */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-24">
              <h2 className="text-3xl font-light mb-8">Goals & Success Metrics</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Primary Goal:</strong> Reduce cart abandonment from 58% to below 40% within 3 months of launch, recovering at least $1.5M in annual GMV.
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-muted/30">
                    <div className="text-sm font-medium mb-3">Primary Metrics</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Cart abandonment rate (target: &lt;40%)</li>
                      <li>• Mobile checkout completion time (target: &lt;90 seconds)</li>
                      <li>• Delivery slot selection conversion (target: +20%)</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-muted/30">
                    <div className="text-sm font-medium mb-3">Secondary Metrics</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Repeat purchase rate within 30 days</li>
                      <li>• Search success rate (add to cart from search)</li>
                      <li>• Customer support tickets related to orders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research & Insights */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-24">
              <h2 className="text-3xl font-light mb-8">What Users Actually Taught Me (After I Stopped Talking)</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I talked to 18 people. The first 6 interviews were useless because I spent the whole time explaining my designs instead of listening. Classic designer ego. Then a user interrupted me mid pitch and said, "Can I just show you what actually happens when I try to order groceries?" That changed everything. I shut up and watched. Three insights emerged that completely rewired my approach:
                </p>
                
                <div className="space-y-8 not-prose">
                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">1. We were hiding the cost, then wondering why people left</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      Watching someone spend 20 minutes carefully building a $40 cart, then seeing their face when $8 in fees appeared at checkout, that's when I got it. We were sabotaging ourselves. They felt tricked. One woman literally said, "I feel stupid now." She didn't come back.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "I spent 20 minutes adding items, then saw the delivery charge and just closed the app. I felt tricked. Like you were hiding it on purpose." <br />
                      — User Interview, 32 year old mom of three, price sensitive shopper
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">2. Our search was so bad it was sending people to competitors</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      User types "organic tomatoes." We have 12 SKUs. Search returns nothing because it requires exact product name matches. User assumes we don't carry organic tomatoes. Opens competitor app. We just lost a customer because our search algorithm was too literal to be useful. This happened constantly.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "If I can't find what I need in 30 seconds, I just open Instacart. I have two kids screaming. I don't have time for your category browsing." <br />
                      — User Interview, busy parent segment, weekly shopper
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">3. Post purchase anxiety was killing trust and drowning support</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      People would place an order, then immediately panic. "Did it go through? When is it coming? Should I have ordered more?" They'd call support three times in an hour. We gave them zero visibility, then acted surprised when they needed hand holding. 28% of support tickets were "Where's my order?" within 60 minutes of purchase. Self inflicted wound.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "I ordered groceries for dinner tonight but have no idea if they're actually coming. I've called support three times. This is stressful." <br />
                      — User Interview, first time user who never ordered again
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Strategy & Decision Making */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-24">
              <h2 className="text-3xl font-light mb-8">The Decisions That Hurt (But Had To Be Made)</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  PM, engineering, and I sat in a room for three hours arguing about what we could actually ship in 4 months. I wanted to redesign everything. Engineering wanted to ship nothing and keep optimizing the existing design. PM wanted revenue numbers that made both approaches impossible. Here's what we decided and what it cost:
                </p>
                
                <div className="space-y-8 not-prose">
                  <div className="p-6 bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-light mb-2">Decision 1: Mobile web from scratch, not native app</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>The fight:</strong> Marketing wanted a native app. "Everyone has apps," they said. Engineering wanted to just optimize what existed. I pushed for mobile web redesign because 70% of traffic was mobile and app downloads were abysmal. We'd reach more people, faster.
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why it won:</strong> I showed data. Native app would take 8 months and reach maybe 15% of mobile users who'd actually download it. Mobile web could ship in 4 months and reach 100% of mobile traffic immediately. PM backed me. Marketing was pissed.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What we lost:</strong> Push notifications that actually work. Offline mode. That "premium" app feel. Marketing is still mad about it. But we shipped on time and hit revenue targets. Sometimes good enough and fast beats perfect and late.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShoppingCart className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-light mb-2">Decision 2: Show delivery fees upfront, risk losing some traffic</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>The fight:</strong> Finance argued showing fees upfront would hurt conversion because users would see the cost before committing. I argued hiding fees was why 45% abandoned at checkout. Tense meeting. Data won.
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why it won:</strong> I showed Finance the cart abandonment number at delivery selection: 45%. Then showed them competitors doing upfront pricing. Then said, "We're already losing these customers. At least let's lose them before they waste 20 minutes." They agreed to test it.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What we risked:</strong> Some users might see fees and bounce immediately instead of building cart first. We were betting on honesty over tricks. Scary bet. It worked. Abandonment dropped because people who stayed actually checked out.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-light mb-2">Decision 3: Basic order tracking, not live GPS maps</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>The fight:</strong> I wanted full GPS tracking with live maps like Uber Eats. Sexy, modern, users would love it. Engineering said 6 weeks minimum. We had 4 weeks left. PM said, "What's the simplest thing that solves the anxiety problem?"
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why basic won:</strong> I was designing for what would look good in my portfolio, not what users actually needed. They needed to know: Is my order coming? When? Basic status updates (confirmed, preparing, dispatched, delivered) solved that in 2 weeks. I was wrong to push for more.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What I learned:</strong> Perfect features that ship late help no one. Basic features that ship on time save millions. Support tickets dropped 28% with just basic tracking. Sometimes admitting your idea is too ambitious is the most strategic thing you can do.
                        </p>
                      </div>
                    </div>
                  </div>
                 </div>
               </div>
            </motion.div>

            {/* Solution & Design Iterations */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-24">
              <h2 className="text-3xl font-light mb-8">Solution & Design Iterations</h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                The final solution emerged through three major iterations based on usability testing with 24 users across two rounds. Here's what changed and why:
              </p>

              {/* Search & Discovery */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Smart Search & Product Discovery</h3>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-muted mb-6">
                  <img src={searchImage} alt="AI powered search interface" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Iteration 1:</strong> Category first navigation with search bar. Users ignored categories and went straight to search, which failed 35% of time.</p>
                  <p><strong>Iteration 2:</strong> Made search primary, added autocomplete with fuzzy matching. Better but users still typed full queries instead of selecting suggestions.</p>
                  <p><strong>Final (Iteration 3):</strong> Visual search results with product images appearing as users type. Added "quick add" buttons directly in search results. Usability testing showed 2.5x faster product discovery.</p>
                </div>
              </div>

              {/* Checkout Flow */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Simplified Checkout with Upfront Pricing</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="aspect-square overflow-hidden border border-border bg-muted">
                    <img src={checkoutImage} alt="Redesigned checkout flow" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden border border-border bg-muted">
                    <img src={cartTrackingImage} alt="Cart with delivery pricing" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Iteration 1:</strong> 5 step checkout: Cart → Address → Delivery → Payment → Confirm. Users abandoned at delivery selection (hidden fees revealed).</p>
                  <p><strong>Iteration 2:</strong> Reduced to 3 steps, moved delivery fee display earlier. Better but still felt like bait and switch.</p>
                  <p><strong>Final (Iteration 3):</strong> Delivery fee calculator visible from homepage, integrated into cart total immediately. Checkout became confirmation only. Usability testing showed zero surprise abandonment. Users appreciated transparency.</p>
                </div>
              </div>

              {/* Order Tracking */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Real Time Order Tracking</h3>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-muted mb-6">
                  <img src={profileImage} alt="Order tracking dashboard" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Iteration 1:</strong> Email notifications only. Support tickets remained high (28% of all tickets).</p>
                  <p><strong>Iteration 2:</strong> Added in app tracking with 4 stages: Confirmed, Preparing, Dispatched, Delivered. Clear but users wanted more granular updates.</p>
                  <p><strong>Final (Iteration 3):</strong> Added sub states ("Your order is being packed", "Driver is 10 minutes away") with push notifications. Support tickets dropped 68%. Users felt in control.</p>
                </div>
              </div>
            </motion.div>

            {/* Results & Impact */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-24">
              <h2 className="text-3xl font-light mb-8">Results & Business Impact</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Validated via A/B test with 12,400 users over 6 weeks (treatment vs control), measured through Mixpanel analytics (Dec 2023 - Feb 2024):
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">22%</div>
                  <div className="text-lg font-light mb-3">Reduction in Cart Abandonment</div>
                  <div className="text-sm text-muted-foreground">58% to 36%, validated via A/B test (n=12,400 users over 6 weeks)</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">25%</div>
                  <div className="text-lg font-light mb-3">Improvement in Search Success</div>
                  <div className="text-sm text-muted-foreground">Measured via task success analytics and user testing (n=24)</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">2.5x</div>
                  <div className="text-lg font-light mb-3">Faster Mobile Checkout</div>
                  <div className="text-sm text-muted-foreground">4.2 to 1.7 minutes average, tracked via analytics funnel timing</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">40%</div>
                  <div className="text-lg font-light mb-3">Increase in 30 Day Repeat Orders</div>
                  <div className="text-sm text-muted-foreground">Measured via 90 day customer retention cohort analysis</div>
                </div>
              </div>
            </motion.div>

            {/* Learnings */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-24">
              <h2 className="text-3xl font-light mb-8">What I Learned</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-lg font-light mb-2">Trust breaks faster than it builds</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hidden delivery fees destroyed user trust instantly, triggering 45% abandonment. Upfront pricing transparency recovered this immediately. The business initially resisted showing fees early, fearing sticker shock. Data proved the opposite: users valued honesty over temporary ignorance.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-lg font-light mb-2">MVP rigor prevents over engineering</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I pushed back on live GPS tracking (PM's original ask) because basic status updates solved 80% of the problem in 1/3 the time. Shipping faster let us validate impact and iterate based on real usage. Users never asked for GPS. They just wanted to know "is it coming?"
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-lg font-light mb-2">Search is not a feature, it's the front door</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    35% search failure rate meant users couldn't even start shopping. We treated search as a checkbox feature when it was actually the primary entry point. Making search visual and forgiving (fuzzy matching, autocomplete with images) unlocked the entire experience downstream.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="px-6 py-16 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              View All Projects
            </Link>
          </div>
        </section>
      </article>
    </div>;
}