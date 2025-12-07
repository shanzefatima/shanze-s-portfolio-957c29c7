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
    subtitle: "Reduced cart abandonment 22% through mobile checkout redesign",
    category: "E-Commerce · Product Strategy",
    impact: [
      "22% reduction in cart abandonment",
      "40% increase in repeat orders"
    ],
    image: hypermarketHero,
    color: "hsl(24, 70%, 94%)",
  },
  {
    id: "shoot-for-stars",
    title: "Shoot for the Stars",
    subtitle: "0-to-1 accessible product adopted by 500+ users nationwide",
    category: "Accessibility · Learning Experience",
    impact: [
      "500+ users in national pilot",
      "Adopted by Helen Keller Services"
    ],
    image: shootStarsHero,
    color: "hsl(220, 20%, 92%)",
  },
];
export const CaseStudies = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Projects that moved metrics
          </h2>
        </motion.div>
      </div>

      <div className="space-y-0">
        {caseStudies.map((study, index) => (
          <Link 
            key={study.id}
            to={`/case-study/${study.id}`}
            className="block group"
          >
            <motion.article
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden cursor-pointer"
              style={{ backgroundColor: study.color }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-16">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="space-y-4">
                      <p className="text-xs tracking-[0.15em] uppercase text-foreground/50 font-medium">
                        {study.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-foreground">
                        {study.title}
                      </h3>
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        {study.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {study.impact.map((metric, i) => (
                        <span 
                          key={i}
                          className="text-xs font-medium px-3 py-1.5 bg-foreground/5 rounded-full text-foreground/70"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <motion.div 
                    className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-auto object-contain drop-shadow-xl"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>

      {/* More Work Section */}
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground font-medium">
            Additional Projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/case-study/covid-data-forest" className="group block space-y-4">
            <motion.div 
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={covidForestHero}
                alt="COVID-19 Data Forest"
                className="w-full h-full object-contain p-4"
              />
            </motion.div>
            <div className="space-y-1">
              <h4 className="text-base font-medium group-hover:text-primary transition-colors">COVID-19 Data Forest</h4>
              <p className="text-sm text-muted-foreground">Data visualization</p>
            </div>
          </Link>

          <Link to="/case-study/snapchat-redesign" className="group block space-y-4">
            <motion.div 
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={snapchatHero}
                alt="Snapchat Redesign"
                className="w-full h-full object-contain p-4"
              />
            </motion.div>
            <div className="space-y-1">
              <h4 className="text-base font-medium group-hover:text-primary transition-colors">Snapchat Redesign</h4>
              <p className="text-sm text-muted-foreground">UX accessibility</p>
            </div>
          </Link>

          <Link to="/case-study/bobst-library" className="group block space-y-4">
            <motion.div 
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={bobstHero}
                alt="NYU Bobst Library"
                className="w-full h-full object-contain p-4"
              />
            </motion.div>
            <div className="space-y-1">
              <h4 className="text-base font-medium group-hover:text-primary transition-colors">NYU Bobst Library</h4>
              <p className="text-sm text-muted-foreground">Digital product</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
