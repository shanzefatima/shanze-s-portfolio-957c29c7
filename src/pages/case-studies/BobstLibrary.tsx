import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

// ========================================
// 📸 IMAGE PLACEHOLDERS - EASY TO UPDATE!
// ========================================
// TO ADD YOUR IMAGES:
// 1. Upload these 3 images to src/assets/ folder:
//    - bobst-desktop-home.png (desktop homepage with search & quick actions)
//    - bobst-mobile-screens.png (mobile views: home & search results)
//    - bobst-desktop-search.png (desktop search results with filters)
// 2. Save - the imports below will automatically work!
// ========================================

import heroImage from "@/assets/bobst-hero.jpg";
import dashboardImage from "@/assets/bobst-desktop-home.png";
import mobileImage from "@/assets/bobst-mobile-screens.png";
import searchImage from "@/assets/bobst-desktop-search.png";

export default function BobstLibrary() {
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
                Web Design · Analytics · WCAG Compliance
              </p>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                NYU Bobst Library
              </h1>
              
              <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
                Optimizing a university library website to achieve 20% increase in task completion, 
                25% improvement in service discoverability, and $50K+ cost savings while serving 
                500+ daily active users.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Role</p>
                  <p className="font-semibold">UX Designer & Analyst</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Timeline</p>
                  <p className="font-semibold">5 Months</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Team</p>
                  <p className="font-semibold">2 Designers, 1 Developer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Year</p>
                  <p className="font-semibold">2023-2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 📸 IMAGE: Hero */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] overflow-hidden bg-muted border border-border"
            >
              <img 
                src={heroImage}
                alt="NYU Bobst Library Website"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Redesigned library homepage
            </p>
          </div>
        </section>

        <section className="px-6 mb-24 bg-muted/30 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  NYU's Bobst Library website served 500+ daily users but suffered from poor 
                  information architecture, low service discoverability, and inefficient resource 
                  booking systems. Students and faculty struggled to complete basic tasks, leading 
                  to high support desk traffic.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-6">The Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Redesign the library website to streamline resource access, improve service 
                  visibility, and reduce operational costs through better UX. Ensure WCAG compliance 
                  and optimize for both desktop and mobile usage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Research & Discovery</h2>
            
            <div className="space-y-12">
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">Analytics Deep Dive</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Analyzed 3 months of Google Analytics data, heatmaps, and user session recordings. 
                  Discovered that 60% of users couldn't find study room booking, 45% abandoned searches 
                  for specific resources, and mobile bounce rate was 68%.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Critical services buried 3-4 clicks deep in navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Search functionality returned irrelevant results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Mobile experience was desktop site scaled down, not optimized</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">User Interviews & Surveys</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conducted 30 interviews with students, faculty, and librarians. Surveyed 200+ users 
                  about pain points. Key insight: users wanted quick access to booking, hours, and 
                  catalog search without navigating complex menus.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-2xl font-bold mb-4">Competitive Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyzed library websites from 10 peer institutions. Best practices included 
                  prominent search, visual service cards, and integrated booking systems on homepage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24 bg-foreground text-background py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Design Strategy</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl font-black text-primary mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">Information Architecture</h3>
                <p className="text-background/70">
                  Restructured site navigation using card sorting results. Reduced hierarchy depth 
                  from 5 levels to 3. Made top 5 services directly accessible from homepage.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Enhanced Search</h3>
                <p className="text-background/70">
                  Implemented federated search across catalog, databases, and website content. 
                  Added filters, auto-complete, and result previews.
                </p>
              </div>
              <div>
                <div className="text-6xl font-black text-primary mb-4">03</div>
                <h3 className="text-xl font-bold mb-4">Integrated Booking</h3>
                <p className="text-background/70">
                  Embedded study room and equipment booking directly in main interface. 
                  One-click access from homepage with real-time availability display.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Implementation Highlights</h2>
            
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Dashboard-Style Homepage</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Redesigned homepage as service dashboard with visual cards for popular tasks: 
                  Book a Study Room, Access Databases, Ask a Librarian, Find Resources. Each card 
                  provides instant access without additional navigation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Mobile-First Responsive Design</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Built from mobile up with touch-optimized interactions, collapsible menus, 
                  and streamlined content. Desktop experience enhanced with additional information 
                  density where appropriate.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Accessibility Compliance</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Achieved WCAG 2.1 AA compliance with proper heading structure, alt text, 
                  keyboard navigation, and screen reader optimization. Tested with assistive 
                  technology users from NYU's Moses Center.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 📸 IMAGE: Features Grid */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={dashboardImage}
                    alt="Dashboard Homepage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Dashboard-style homepage</p>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={mobileImage}
                    alt="Mobile Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Mobile-first design</p>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={searchImage}
                    alt="Enhanced Search"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Enhanced search</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24 bg-primary/5 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Measurable Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">20%</div>
                <p className="text-lg font-semibold mb-2">Increase in Task Completion</p>
                <p className="text-muted-foreground">
                  Users successfully completed primary tasks 20% more often in A/B testing
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">25%</div>
                <p className="text-lg font-semibold mb-2">Improvement in Service Discovery</p>
                <p className="text-muted-foreground">
                  Key services found 25% faster with improved navigation and search
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">$50K+</div>
                <p className="text-lg font-semibold mb-2">Annual Cost Savings</p>
                <p className="text-muted-foreground">
                  Reduced help desk tickets by 35%, saving staff time and resources
                </p>
              </div>
              <div className="bg-background p-8 border border-border">
                <div className="text-5xl font-black text-primary mb-4">500+</div>
                <p className="text-lg font-semibold mb-2">Daily Active Users</p>
                <p className="text-muted-foreground">
                  Consistent daily usage with 45% lower bounce rate post-launch
                </p>
              </div>
            </div>

            <div className="bg-foreground text-background p-12">
              <Quote className="w-12 h-12 text-primary mb-6" />
              <p className="text-2xl leading-relaxed mb-6">
                "The redesign transformed how students interact with library services. We've seen 
                a dramatic reduction in basic support questions, allowing our staff to focus on 
                more complex research assistance."
              </p>
              <p className="text-background/70">- Dr. Jennifer Walsh, Head Librarian, NYU Bobst</p>
            </div>
          </div>
        </section>

        <section className="px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">Key Learnings</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Analytics reveal user intent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Behavioral data showed exactly what users were trying to do and where they failed. 
                  This directed design efforts to highest-impact areas first.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">Simplicity scales better than complexity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reducing navigation depth and providing direct service access proved more effective 
                  than elaborate categorization systems. Users don't want to think—they want to act.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-bold mb-3">UX improvements drive cost savings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Better design doesn't just improve user experience—it reduces operational costs 
                  by decreasing support burden and increasing self-service success rates.
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
