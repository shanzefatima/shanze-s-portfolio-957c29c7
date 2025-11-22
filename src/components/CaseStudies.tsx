import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import shootStarsHero from "@/assets/shoot-stars-hero.jpg";
import hypermarketHero from "@/assets/hypermarket-hero.jpg";
import snapchatHero from "@/assets/snapchat-hero.jpg";
import bobstHero from "@/assets/bobst-hero.jpg";
import covidForestHero from "@/assets/covid-forest-hero.jpg";
interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  impact: string[];
  image: string;
  color: string;
}
const caseStudies: CaseStudy[] = [{
  id: "shoot-for-stars",
  title: "Shoot for the Stars",
  subtitle: "Accessible Escape Room for Blind & Low-Vision Teens",
  category: "Accessibility · UX Research · Product Design",
  impact: ["100% elimination of visual dependency", "60% increase in user autonomy", "National pilot adoption by Helen Keller Services", "Featured at NYC Design Week 2024"],
  image: shootStarsHero,
  color: "hsl(var(--accent))"
}, {
  id: "hypermarket",
  title: "HyperMarket",
  subtitle: "Redefining Online Grocery Shopping",
  category: "E-Commerce · Product Strategy · UX Design",
  impact: ["25% improvement in service discoverability", "22% reduction in cart abandonment", "Real-time order tracking system", "Smart product discovery algorithm"],
  image: hypermarketHero,
  color: "hsl(var(--accent))"
}, {
  id: "snapchat-redesign",
  title: "Snapchat Redesign",
  subtitle: "Making Social Media Accessible for All Ages",
  category: "Social Media · Accessibility · Interface Design",
  impact: ["Eliminated hidden gesture navigation", "30% faster task completion for older users", "Guided onboarding system", "WCAG 2.1 AA compliance achieved"],
  image: snapchatHero,
  color: "hsl(var(--accent))"
}, {
  id: "bobst-library",
  title: "NYU Bobst Library",
  subtitle: "Website Optimization & Accessibility",
  category: "Web Design · Analytics · WCAG Compliance",
  impact: ["20% increase in task completion rates", "25% improvement in service discoverability", "$50K+ cost savings through optimization", "500+ daily active users served"],
  image: bobstHero,
  color: "hsl(var(--accent))"
}, {
  id: "covid-data-forest",
  title: "The COVID-19 Data Forest",
  subtitle: "Visualizing the Pandemic's Impact Across South Asia",
  category: "Data Visualization · Research · Interactive Design",
  impact: ["Interactive 3D visualization of 500K+ data points", "Comparative analysis across 8 South Asian countries", "Real-time tracking of cases, deaths, and recoveries", "Featured in data journalism communities"],
  image: covidForestHero,
  color: "hsl(var(--accent))"
}];
export const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return <section id="work" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Real-world impact through inclusive design and data-driven product strategy
          </p>
        </motion.div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => <motion.article key={study.id} initial={{
          opacity: 0,
          y: 60
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <Link to={`/case-study/${study.id}`} className="block order-2 lg:order-1">
                  <motion.div className="relative aspect-[4/3] bg-muted overflow-hidden" whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.4
              }}>
                    
                    
                    <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-primary" initial={{
                  scaleX: 0
                }} animate={{
                  scaleX: hoveredIndex === index ? 1 : 0
                }} transition={{
                  duration: 0.3
                }} style={{
                  originX: 0
                }} />
                  </motion.div>
                </Link>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                      {study.category}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3 py-6">
                    {study.impact.map((item, i) => <motion.div key={i} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.1
                }} className="flex items-start gap-3">
                        <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                        <p className="text-sm text-foreground/80">{item}</p>
                      </motion.div>)}
                  </div>

                  <Link to={`/case-study/${study.id}`}>
                    <motion.button className="group/btn inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors" whileHover={{
                  x: 5
                }} transition={{
                  duration: 0.2
                }}>
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.article>)}
        </div>
      </div>
    </section>;
};