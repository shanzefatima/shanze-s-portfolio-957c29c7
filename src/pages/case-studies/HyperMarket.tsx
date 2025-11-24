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
                E-Commerce · Mobile UX · Product Strategy
              </div>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                HyperMarket: Recovering $2.1M in Lost Revenue Through Mobile Checkout Optimization
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                How I reduced cart abandonment from 58% to 36% by fixing critical mobile UX bottlenecks in Pakistan's fastest growing online grocery platform, directly impacting $2.1M in annual recovered revenue.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Role</div>
                  <div className="font-light">Lead Product Designer</div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="aspect-[16/10] overflow-hidden border border-border bg-muted">
                <img 
                  src={heroImage}
                  alt="HyperMarket Mobile Home Screen"
                  className="w-full h-full object-cover"
                />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">The Business Problem</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  HyperMarket was hemorrhaging revenue. With 58% cart abandonment and average order values of $45, the company was losing approximately $2.1M annually in potential GMV. The CPO identified mobile checkout experience as the single highest impact opportunity to move the needle on Q4 revenue targets.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The core issue: 70% of traffic came from mobile, but the interface was designed desktop first. Users abandoned at two critical moments: 45% during delivery slot selection (unclear options, hidden fees) and 28% at payment confirmation (lack of trust signals, no order tracking visibility).
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-light mb-8">My Role & Ownership</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  As Lead Product Designer, I owned the end-to-end mobile checkout redesign from problem definition through launch. I partnered directly with the Growth PM to define success metrics, led user research and synthesis, designed and tested three major iterations, and worked with engineering to ensure implementation within technical constraints.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Key Responsibilities:</strong> Defined success metrics with PM and CPO · Led user research (18 interviews, 2 usability studies) · Owned mobile IA and checkout flow redesign · Collaborated with engineering on feasibility and implementation · Designed real-time tracking system with backend team · Advocated for shipping MVP faster over feature completeness
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
                  I led mixed methods research combining analytics deep dive (6 months of Mixpanel data, heatmaps, session recordings) and 18 user interviews with both abandoners and power users. Three insights fundamentally shaped our strategy:
                </p>
                
                <div className="space-y-8 not-prose">
                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">1. Hidden costs killed trust at the worst moment</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      45% of users abandoned when delivery fees suddenly appeared at checkout. They'd built a $40 cart only to discover $8 hidden fees, triggering immediate exit. Competitors showed upfront pricing.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "I spent 20 minutes adding items, then saw the delivery charge and just closed the app. I felt tricked." <br/>
                      — User Interview, Segment: Price Sensitive Shoppers
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">2. Search failed for 35% of product queries</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      Users searched for "organic tomatoes" but got zero results despite having 12 organic tomato SKUs. The search algorithm required exact matches. Users assumed we didn't carry items and left for competitors.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "If I can't find what I need in 30 seconds, I just open [Competitor App]. I don't have time to browse categories." <br/>
                      — User Interview, Segment: Busy Parents
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <div className="text-lg font-light mb-2">3. Post purchase anxiety drove support load</div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      28% of customer support tickets were "Where's my order?" queries within 1 hour of purchase. Users had zero visibility into order status, creating anxiety and requiring manual support intervention.
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      "I ordered groceries for dinner tonight but have no idea if they're coming. I've called support three times." <br/>
                      — User Interview, Segment: First Time Users
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
                  I evaluated three approaches with PM and engineering, weighing business impact against technical feasibility and timeline constraints. Here's what we decided and why:
                </p>
                
                <div className="space-y-8 not-prose">
                  <div className="p-6 bg-muted/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-light mb-2">Decision 1: Mobile first redesign, not responsive optimization</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Options considered:</strong> A) Optimize existing responsive layout, B) Build separate mobile app, C) Redesign mobile web from scratch
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why mobile first won:</strong> Analytics showed 70% mobile traffic but desktop first UX. Mobile web reached broader audience than native app download. Timeline: 4 months vs 8+ for native.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What we gave up:</strong> Some advanced native features (offline mode, push notification richness). Worth it to ship faster and validate before native investment.
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
                        <div className="text-lg font-light mb-2">Decision 2: Upfront pricing transparency over dynamic fee calculation</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Options considered:</strong> A) Continue hiding fees until checkout, B) Show fees upfront but require address entry, C) Display fee estimates based on area
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why upfront pricing won:</strong> Addressable insight of hidden fee abandonment. Competitors already doing this. Engineering confirmed feasible using geolocation API.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What we gave up:</strong> Slightly increased complexity in homepage load. Small engineering lift to build fee calculator API. Worth it: 45% abandonment at delivery selection was too high.
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
                        <div className="text-lg font-light mb-2">Decision 3: Real time tracking MVP over full featured tracking</div>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Options considered:</strong> A) Build full live GPS tracking with map, B) Basic status updates (ordered, dispatched, delivered), C) Just email notifications
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Why basic status won:</strong> 28% of support tickets were order status queries. Basic tracking eliminated 80% of these tickets. Live GPS required 3x engineering time with minimal added value.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <strong>What we gave up:</strong> Premium live GPS experience. I convinced PM this was premature optimization. We could add later if users demanded it. They didn't. Basic tracking solved the problem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                The final solution emerged through three major iterations based on usability testing with 24 users across two rounds. Here's what changed and why:
              </p>

              {/* Search & Discovery */}
              <div className="mb-16">
                <h3 className="text-2xl font-light mb-6">Smart Search & Product Discovery</h3>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={searchImage}
                    alt="AI powered search interface"
                    className="w-full h-full object-cover"
                  />
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
                    <img 
                      src={checkoutImage}
                      alt="Redesigned checkout flow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden border border-border bg-muted">
                    <img 
                      src={cartTrackingImage}
                      alt="Cart with delivery pricing"
                      className="w-full h-full object-cover"
                    />
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
                  <img 
                    src={profileImage}
                    alt="Order tracking dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Iteration 1:</strong> Email notifications only. Support tickets remained high (28% of all tickets).</p>
                  <p><strong>Iteration 2:</strong> Added in app tracking with 4 stages: Confirmed, Preparing, Dispatched, Delivered. Clear but users wanted more granular updates.</p>
                  <p><strong>Final (Iteration 3):</strong> Added sub states ("Your order is being packed", "Driver is 10 minutes away") with push notifications. Support tickets dropped 68%. Users felt in control.</p>
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
              <h2 className="text-3xl font-light mb-8">Results & Business Impact</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Validated via live product analytics (Mixpanel) measured 3 months post launch (Dec 2023 - Feb 2024), comparing to baseline period (Jun - Aug 2023):
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">22%</div>
                  <div className="text-lg font-light mb-3">Reduction in Cart Abandonment</div>
                  <div className="text-sm text-muted-foreground">From 58% to 36% (beating target of 40%). Directly recovered $2.1M in annual GMV based on average order value and traffic volume.</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">25%</div>
                  <div className="text-lg font-light mb-3">Improvement in Search Success</div>
                  <div className="text-sm text-muted-foreground">Add to cart rate from search increased from 12% to 37%. Visual autocomplete drove 2.5x faster product discovery.</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">2.5x</div>
                  <div className="text-lg font-light mb-3">Faster Mobile Checkout</div>
                  <div className="text-sm text-muted-foreground">Average completion time dropped from 4m 20s to 1m 45s. Removed 2 checkout steps through upfront pricing transparency.</div>
                </div>
                <div className="p-8 border border-border">
                  <div className="text-4xl font-light text-primary mb-2">40%</div>
                  <div className="text-lg font-light mb-3">Increase in 30 Day Repeat Orders</div>
                  <div className="text-sm text-muted-foreground">Real time tracking built trust. Users who tracked orders had 2.8x higher repeat rate. Support tickets dropped 68%.</div>
                </div>
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
