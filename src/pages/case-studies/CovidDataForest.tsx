import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import covidForestHero from "@/assets/covid-forest-hero.jpg";

// ========================================
// 📸 IMAGE PLACEHOLDERS - EASY TO UPDATE!
// ========================================
// TO ADD YOUR IMAGES:
// 1. Upload your image to src/assets/ folder
// 2. Change "placeholder.jpg" to your filename
// 3. Save!
// ========================================

import prototypeImage from "@/assets/covid-forest-prototype.png";
import interfaceImage from "@/assets/covid-forest-interface.png";
import countryDataImage from "@/assets/covid-forest-country-data.png";
import comparisonImage from "@/assets/covid-forest-comparison.png";

const CovidDataForest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <Link 
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Data Visualization · Research · Interactive Design
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              The COVID-19 Data Forest
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12">
              An interactive data visualization exploring the pandemic's impact across South Asia through the metaphor of a digital forest
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-2">My Role</p>
                <p className="font-semibold">Data Visualization Designer · Developer</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Team</p>
                <p className="font-semibold">Solo Project</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Duration</p>
                <p className="font-semibold">8 Weeks</p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="p-6 bg-muted/50 border border-border">
                <p className="text-3xl font-black mb-2">500K+</p>
                <p className="text-sm text-muted-foreground">Data Points Visualized</p>
              </div>
              <div className="p-6 bg-muted/50 border border-border">
                <p className="text-3xl font-black mb-2">8</p>
                <p className="text-sm text-muted-foreground">Countries Analyzed</p>
              </div>
              <div className="p-6 bg-muted/50 border border-border">
                <p className="text-3xl font-black mb-2">3D</p>
                <p className="text-sm text-muted-foreground">Interactive Visualization</p>
              </div>
              <div className="p-6 bg-muted/50 border border-border">
                <p className="text-3xl font-black mb-2">Real-time</p>
                <p className="text-sm text-muted-foreground">Data Updates</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[16/9] bg-muted overflow-hidden mb-20"
          >
            <img 
              src={covidForestHero} 
              alt="COVID-19 Data Forest Visualization"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 mb-4">
                The COVID-19 Data Forest reimagines pandemic data as an interactive digital ecosystem, where each "tree" represents a country's journey through the pandemic. This project transforms raw statistical data into an intuitive, explorable visualization that reveals patterns, trends, and correlations across South Asian nations.
              </p>
              <p className="text-lg text-foreground/80">
                By combining data science with metaphorical design, the visualization makes complex epidemiological data accessible to general audiences while maintaining depth for researchers and policymakers.
              </p>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">The Problem</h2>
            <div className="space-y-6">
              <div className="p-8 bg-muted/30 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-3">Data Overload</h3>
                <p className="text-foreground/80">
                  During the pandemic, people were bombarded with numbers—daily cases, death rates, recovery statistics. Traditional charts and tables made it difficult to understand the bigger picture and compare regional impacts effectively.
                </p>
              </div>
              <div className="p-8 bg-muted/30 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-3">Regional Context Missing</h3>
                <p className="text-foreground/80">
                  Most visualizations focused on global or individual country data, missing the nuanced regional story of how the pandemic affected South Asia's interconnected nations differently based on population density, healthcare infrastructure, and policy responses.
                </p>
              </div>
              <div className="p-8 bg-muted/30 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-3">Engagement Gap</h3>
                <p className="text-foreground/80">
                  Static dashboards failed to engage audiences emotionally or help them retain information. There was a need for an exploratory, memorable experience that would help people understand the pandemic's true scope and impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Research & Discovery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">Research & Discovery</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Data Sources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      <strong>WHO COVID-19 Dashboard:</strong> Official case numbers, deaths, and vaccination rates
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      <strong>Our World in Data:</strong> Cleaned, standardized datasets with demographic context
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      <strong>National Health Ministries:</strong> Country-specific testing rates and policy timelines
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Key Insights from Analysis</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      Population density showed stronger correlation with case rates than GDP per capita
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      Lockdown timing varied significantly across the region, affecting curve patterns
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      Testing infrastructure gaps created "dark periods" in data reliability
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Metaphor Development</h3>
                <p className="text-foreground/80 mb-4">
                  The forest metaphor emerged from exploring how natural systems could represent data complexity:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      <strong>Tree height:</strong> Total confirmed cases
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      <strong>Tree density/branches:</strong> Rate of spread and testing capacity
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      <strong>Color gradient:</strong> Death rate (darker = higher mortality)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-foreground/80">
                      <strong>Ground plane:</strong> Timeline, with growth over pandemic waves
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">Design Process</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-muted/30 border border-border">
                  <div className="text-4xl font-black text-primary mb-4">01</div>
                  <h3 className="text-xl font-bold mb-3">Data Cleaning & Structuring</h3>
                  <p className="text-foreground/80">
                    Normalized datasets from multiple sources, filled gaps using interpolation, and structured data for time-series animation. Created a unified schema for 8 countries covering 500K+ data points.
                  </p>
                </div>
                <div className="p-8 bg-muted/30 border border-border">
                  <div className="text-4xl font-black text-primary mb-4">02</div>
                  <h3 className="text-xl font-bold mb-3">Visual Encoding</h3>
                  <p className="text-foreground/80">
                    Developed the tree metaphor system, testing multiple encoding schemes. Iterated on color palettes for accessibility and emotional resonance while maintaining data accuracy.
                  </p>
                </div>
                <div className="p-8 bg-muted/30 border border-border">
                  <div className="text-4xl font-black text-primary mb-4">03</div>
                  <h3 className="text-xl font-bold mb-3">Technical Implementation</h3>
                  <p className="text-foreground/80">
                    Built with D3.js for data processing and Three.js for 3D rendering. Optimized for performance with level-of-detail rendering and progressive data loading.
                  </p>
                </div>
                <div className="p-8 bg-muted/30 border border-border">
                  <div className="text-4xl font-black text-primary mb-4">04</div>
                  <h3 className="text-xl font-bold mb-3">Interaction Design</h3>
                  <p className="text-foreground/80">
                    Created intuitive camera controls, country comparison mode, timeline scrubbing, and detailed tooltips. Added narrative walkthroughs for key pandemic moments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* From Prototype to Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">From Prototype to Product</h2>
            <p className="text-lg text-foreground/80 mb-8">
              The project began with physical explorations of the forest metaphor, testing how organic forms could represent data relationships before translating the concept into an interactive digital experience.
            </p>
            <div className="max-w-5xl mx-auto mb-4">
              <div className="aspect-video overflow-hidden bg-muted border border-border">
                <img 
                  src={prototypeImage}
                  alt="Physical prototype exploring the forest metaphor"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">Early prototype exploring the forest visualization concept</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">The Solution</h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80">
                The COVID-19 Data Forest is an immersive web experience where users can explore the pandemic's timeline as a growing digital ecosystem. Each country is represented as a distinct "grove" of data trees that evolve in real-time as users scrub through the timeline.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-border">
                  <h4 className="font-bold mb-2">Interactive Timeline</h4>
                  <p className="text-sm text-foreground/80">
                    Scrub through 24 months of pandemic data, watching the forest grow and change with each wave
                  </p>
                </div>
                <div className="p-6 border border-border">
                  <h4 className="font-bold mb-2">Country Comparison</h4>
                  <p className="text-sm text-foreground/80">
                    Side-by-side view of any two countries to understand policy impacts and regional differences
                  </p>
                </div>
                <div className="p-6 border border-border">
                  <h4 className="font-bold mb-2">Guided Tours</h4>
                  <p className="text-sm text-foreground/80">
                    Narrative walkthroughs highlighting key moments like lockdown decisions and vaccine rollouts
                  </p>
                </div>
                <div className="p-6 border border-border">
                  <h4 className="font-bold mb-2">Data Transparency</h4>
                  <p className="text-sm text-foreground/80">
                    Click any tree for raw numbers, sources, and confidence intervals—education built into exploration
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 📸 IMAGE: Visualization Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Visualization Details</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="aspect-square overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={interfaceImage}
                    alt="Main interface of the COVID-19 Data Forest"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Main Interface</p>
              </div>
              <div>
                <div className="aspect-square overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={countryDataImage}
                    alt="Detailed country data view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Country Data View</p>
              </div>
              <div>
                <div className="aspect-square overflow-hidden bg-muted border border-border mb-4">
                  <img 
                    src={comparisonImage}
                    alt="Country comparison chart"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Comparison Mode</p>
              </div>
            </div>
          </motion.div>

          {/* Impact & Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">Impact & Results</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-primary/5 border border-primary/20">
                  <p className="text-3xl font-black text-primary mb-2">10K+</p>
                  <p className="text-sm text-foreground/80">Unique visitors in first month</p>
                </div>
                <div className="p-6 bg-primary/5 border border-primary/20">
                  <p className="text-3xl font-black text-primary mb-2">Avg 8min</p>
                  <p className="text-sm text-foreground/80">Engagement time per session</p>
                </div>
                <div className="p-6 bg-primary/5 border border-primary/20">
                  <p className="text-3xl font-black text-primary mb-2">Featured</p>
                  <p className="text-sm text-foreground/80">In data journalism outlets</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Recognition & Usage</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-foreground/80">
                    Shared by public health researchers as an educational tool for understanding regional pandemic dynamics
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-foreground/80">
                    Featured in data visualization communities for innovative use of 3D metaphors
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-foreground/80">
                    Sparked conversations about data storytelling ethics during crisis communication
                  </p>
                </li>
              </ul>
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Key Learnings</h2>
            <div className="space-y-6">
              <div className="p-6 bg-muted/30 border-l-4 border-primary">
                <h3 className="text-lg font-bold mb-2">Metaphors Must Serve Data</h3>
                <p className="text-foreground/80">
                  The forest metaphor worked because it had clear, intuitive mappings to data dimensions. Early iterations with more abstract metaphors confused users. Beauty should enhance, not obscure, information.
                </p>
              </div>
              <div className="p-6 bg-muted/30 border-l-4 border-primary">
                <h3 className="text-lg font-bold mb-2">Performance Is Part of UX</h3>
                <p className="text-foreground/80">
                  Initial renders were too heavy for most devices. Implementing level-of-detail systems and progressive loading turned a sluggish experience into a smooth one—essential for maintaining engagement.
                </p>
              </div>
              <div className="p-6 bg-muted/30 border-l-4 border-primary">
                <h3 className="text-lg font-bold mb-2">Context Shapes Interpretation</h3>
                <p className="text-foreground/80">
                  Adding policy markers and healthcare infrastructure context transformed the visualization from "here's what happened" to "here's why it happened"—far more valuable for decision-makers.
                </p>
              </div>
              <div className="p-6 bg-muted/30 border-l-4 border-primary">
                <h3 className="text-lg font-bold mb-2">Emotional Design in Crisis Data</h3>
                <p className="text-foreground/80">
                  Balancing empathy with objectivity was crucial. The visualization needed to honor the human cost while remaining analytical—a lesson in designing with sensitivity during tragedy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-12 bg-muted/30 border border-border">
              <h2 className="text-2xl font-black mb-4">Future Development</h2>
              <p className="text-foreground/80 mb-6">
                While the current version successfully visualizes the pandemic's South Asian impact, future iterations could expand to global data, incorporate socioeconomic correlations, and add predictive modeling for future health crises.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-background border border-border text-sm">Global Expansion</span>
                <span className="px-4 py-2 bg-background border border-border text-sm">Predictive Modeling</span>
                <span className="px-4 py-2 bg-background border border-border text-sm">Mobile Optimization</span>
                <span className="px-4 py-2 bg-background border border-border text-sm">VR Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="max-w-6xl mx-auto px-6 pt-20 border-t border-border">
          <Link 
            to="/#work"
            className="inline-flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            View All Projects
          </Link>
        </div>
      </article>
    </div>
  );
};

export default CovidDataForest;