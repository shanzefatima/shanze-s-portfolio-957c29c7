import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import shootStarsHero from "@/assets/shoot-stars-hero.png";
import hypermarketHero from "@/assets/hypermarket-hero.png";
import snapchatHero from "@/assets/snapchat-hero.png";
import bobstHero from "@/assets/bobst-hero.png";
import covidForestHero from "@/assets/covid-forest-hero.png";
interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  impact: string[];
  image: string;
  color: string;
}
const caseStudies: CaseStudy[] = [
  {
    id: "hypermarket",
    title: "HyperMarket",
    subtitle: "Reduced cart abandonment 22% through mobile-first e-commerce redesign",
    category: "E-Commerce · Product Strategy · Mobile UX",
    impact: [
      "22% reduction in cart abandonment",
      "25% improvement in service discoverability",
      "2.5x faster mobile checkout flow",
      "40% increase in repeat orders"
    ],
    image: hypermarketHero,
    color: "hsl(24, 80%, 92%)",
  },
  {
    id: "shoot-for-stars",
    title: "Shoot for the Stars",
    subtitle: "Launched 0-to-1 accessible product adopted by 500+ users nationwide",
    category: "Product Design · Accessibility · Learning Experience",
    impact: [
      "500+ users onboarded in national pilot",
      "60% increase in user autonomy",
      "100% elimination of visual dependency",
      "Adopted by Helen Keller Services"
    ],
    image: shootStarsHero,
    color: "hsl(200, 25%, 60%)",
  },
  {
    id: "covid-data-forest",
    title: "COVID-19 Data Forest",
    subtitle: "Made complex pandemic data accessible through interactive visualization",
    category: "Data Visualization · UX Research · Interactive Design",
    impact: [
      "Visualized 500K+ data points across 8 countries",
      "Real-time tracking system for cases and recoveries",
      "Physical + digital dual-experience design",
      "Simplified 180+ country datasets"
    ],
    image: covidForestHero,
    color: "hsl(150, 40%, 85%)",
  },
];
export const CaseStudies = () => {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Work</h2>
        </motion.div>
      </div>

      <div className="space-y-0">
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden"
            style={{ backgroundColor: study.color }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/5" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="space-y-4">
                    <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 font-medium">
                      Case Study
                    </p>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground">
                      {study.title}: {study.subtitle.toLowerCase()}
                    </h3>
                    <p className="text-base md:text-lg text-foreground/70 max-w-xl">
                      {study.category}
                    </p>
                  </div>

                  <Link 
                    to={`/case-study/${study.id}`}
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/80 rounded-full hover:bg-foreground hover:text-background transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium tracking-wide uppercase">View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <motion.div 
                  className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.article>
        ))}
        </div>

      {/* More Work Section */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight">More Work</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link to="/case-study/snapchat-redesign" className="group block space-y-4">
            <motion.div 
              className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted/30"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={snapchatHero}
                alt="Snapchat Redesign"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">UX Redesign</p>
              <h4 className="text-xl md:text-2xl font-light">Snapchat Redesign</h4>
              <p className="text-sm text-muted-foreground">Accessibility improvements for older demographics</p>
            </div>
          </Link>

          <Link to="/case-study/bobst-library" className="group block space-y-4">
            <motion.div 
              className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted/30"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={bobstHero}
                alt="NYU Bobst Library"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Digital Product</p>
              <h4 className="text-xl md:text-2xl font-light">NYU Bobst Library</h4>
              <p className="text-sm text-muted-foreground">Website optimization and accessibility compliance</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
