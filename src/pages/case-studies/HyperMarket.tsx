import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

// ========================================
// 📸 IMAGE PLACEHOLDERS - EASY TO UPDATE!
// ========================================
// TO ADD YOUR IMAGES:
// 1. Upload your image to src/assets/ folder
// 2. Change "placeholder.jpg" below to your actual filename
// 3. Save - that's it!
// ========================================

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
                E-Commerce · Product Strategy · UX Design
              </p>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                HyperMarket
              </h1>
              
              <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
                Redesigning the online grocery shopping experience to reduce cart abandonment by 22% 
                and improve service discoverability by 25% through data-driven UX improvements.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                  <p className="font-semibold">Product Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
                  <p className="font-semibold">4 Months</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                  <p className="font-semibold">Solo Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Year</p>
                  <p className="font-semibold">2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 📸 IMAGE: Hero - Home Screen */}
        <section className="px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-h-[500px] overflow-hidden bg-muted border border-border flex items-center justify-center"
            >
              <img 
                src={heroImage}
                alt="HyperMarket Home Screen"
                className="h-full w-auto object-contain"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Redesigned mobile shopping experience
            </p>
          </div>
        </section>

        <section className="px-6 mb-24 bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  HyperMarket faced high cart abandonment rates and poor service discoverability. 
                  Users struggled to find products, understand delivery options, and complete purchases 
                  efficiently. The existing interface prioritized desktop over mobile, despite 70% 
                  mobile traffic.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-6">The Objective</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Create a mobile-first shopping experience that streamlines product discovery, 
                  simplifies checkout, and provides real-time order tracking. Focus on reducing 
                  friction points identified through analytics and user research.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Research & Analysis</h2>
            
            <div className="space-y-12">
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">Data Analysis</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Analyzed 6 months of user behavior data, heatmaps, and session recordings. Identified 
                  that 45% of users abandoned carts at the delivery selection stage, and 35% couldn't 
                  find products they were searching for.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Search functionality failed to surface relevant products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Delivery options were buried in checkout flow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Mobile experience was slow and non-intuitive</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">User Interviews</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conducted 20 user interviews with frequent online grocery shoppers. Key pain points 
                  included unclear product availability, confusing navigation, and lack of order tracking 
                  visibility after purchase.
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
                <h3 className="text-xl font-bold mb-4">Smart Search & Discovery</h3>
                <p className="text-background/70">
                  Implemented AI-powered search with predictive suggestions, category filters, 
                  and visual product cards. Added quick-add functionality for frequently purchased items.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Simplified Checkout</h3>
                <p className="text-background/70">
                  Redesigned checkout to 3 clear steps, with delivery options visible upfront. 
                  Integrated saved addresses and payment methods for one-tap checkout.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">03</div>
                <h3 className="text-xl font-bold mb-4">Real-Time Tracking</h3>
                <p className="text-background/70">
                  Created live order tracking dashboard showing preparation, dispatch, and delivery 
                  stages. Added push notifications for status updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding Experience */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight mb-8">Onboarding Experience</h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-h-[500px] overflow-hidden bg-muted border border-border flex items-center justify-center mb-6"
              >
                <img 
                  src={onboardingImage}
                  alt="Onboarding Flow"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
              <p className="text-sm text-muted-foreground text-center">
                Three-step onboarding highlighting key features
              </p>
            </div>
          </div>
        </section>

        {/* 📸 IMAGE: Feature Grid */}
        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight mb-8">Search & Product Discovery</h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-h-[500px] overflow-hidden bg-muted border border-border flex items-center justify-center mb-6"
              >
                <img 
                  src={searchImage}
                  alt="Smart Search & Discovery"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
              <p className="text-sm text-muted-foreground text-center mb-12">
                AI-powered search with predictive suggestions and visual product cards
              </p>
            </div>

            <h2 className="text-3xl font-black tracking-tight mb-8 mt-16">Categories & Special Offers</h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-h-[500px] overflow-hidden bg-muted border border-border flex items-center justify-center mb-6"
              >
                <img 
                  src={categoriesImage}
                  alt="Categories and Offers"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
              <p className="text-sm text-muted-foreground text-center mb-12">
                Clear categorization and promotional offers
              </p>
            </div>

            <h2 className="text-3xl font-black tracking-tight mb-8 mt-16">Cart & Order Tracking</h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-h-[500px] overflow-hidden bg-muted border border-border flex items-center justify-center mb-6"
              >
                <img 
                  src={cartTrackingImage}
                  alt="Cart and Tracking"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
              <p className="text-sm text-muted-foreground text-center mb-12">
                Real-time order tracking with driver details
              </p>
            </div>

            <h2 className="text-3xl font-black tracking-tight mb-8 mt-16">Checkout & Payment</h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-h-[500px] overflow-hidden bg-muted border border-border flex items-center justify-center mb-6"
              >
                <img 
                  src={checkoutImage}
                  alt="Checkout and Payment"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
              <p className="text-sm text-muted-foreground text-center mb-12">
                Simplified 3-step checkout with one-tap payment
              </p>
            </div>

            <h2 className="text-3xl font-black tracking-tight mb-8 mt-16">Profile & Wishlist</h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-h-[500px] overflow-hidden bg-muted border border-border flex items-center justify-center mb-6"
              >
                <img 
                  src={profileImage}
                  alt="Profile and Wishlist"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
              <p className="text-sm text-muted-foreground text-center">
                User profile with order history and wishlist management
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24 bg-primary/5 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">22%</div>
                <p className="text-lg font-semibold mb-2">Reduction in Cart Abandonment</p>
                <p className="text-muted-foreground">
                  Streamlined checkout flow decreased drop-off rates significantly
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">25%</div>
                <p className="text-lg font-semibold mb-2">Improvement in Service Discoverability</p>
                <p className="text-muted-foreground">
                  Enhanced search and navigation increased product discovery rates
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">2.5x</div>
                <p className="text-lg font-semibold mb-2">Faster Mobile Checkout</p>
                <p className="text-muted-foreground">
                  Mobile users completed purchases in half the time
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">40%</div>
                <p className="text-lg font-semibold mb-2">Increase in Repeat Orders</p>
                <p className="text-muted-foreground">
                  Improved experience drove higher customer retention
                </p>
              </div>
            </div>

            <div className="bg-foreground text-background p-12">
              <Quote className="w-12 h-12 text-primary mb-6" />
              <p className="text-2xl leading-relaxed mb-6">
                "The new interface made grocery shopping actually enjoyable. I can find what I need 
                instantly and track my order in real-time. It's night and day compared to before."
              </p>
              <p className="text-background/70">- Sarah M., Regular Customer</p>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Key Takeaways</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Data-driven design decisions win</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analytics revealed exactly where users struggled. Focusing design efforts on 
                  these friction points delivered measurable impact quickly.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Mobile-first is non-negotiable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With 70% mobile traffic, designing for mobile first then adapting to desktop 
                  was the only viable approach for this audience.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Transparency builds trust</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time order tracking and clear communication about delivery options 
                  significantly increased customer confidence and satisfaction.
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
