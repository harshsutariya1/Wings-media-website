import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const portfolioData = [
  {
    category: "Social Media",
    title: "Fashion Nova Campaign",
    description: "A comprehensive social media strategy that increased engagement by 340% and sales by 120% over three months.",
    imageClass: "bg-primary-200"
  },
  {
    category: "Graphic Design",
    title: "TechStart Brand Identity",
    description: "Complete brand redesign including logo, style guide, and digital assets that helped secure $2M in funding.",
    imageClass: "bg-secondary-200"
  },
  {
    category: "Video Production",
    title: "Product Launch Video",
    description: "Viral launch video with over 5 million views across platforms and 200% increase in pre-orders.",
    imageClass: "bg-accent-200"
  },
  {
    category: "Photography",
    title: "Product Catalog Shoot",
    description: "Professional product shoots for e-commerce that improved conversion rate by 25%.",
    imageClass: "bg-primary-300"
  },
  {
    category: "Content Strategy",
    title: "SaaS Content Calendar",
    description: "6-month editorial calendar and content creation that established the client as an industry thought leader.",
    imageClass: "bg-secondary-300"
  },
  {
    category: "Social Media",
    title: "Instagram Growth Campaign",
    description: "Organic growth strategy that increased followers by 300% and engagement by 500% in just 4 months.",
    imageClass: "bg-accent-300"
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const filters = ['All', 'Social Media', 'Graphic Design', 'Content Strategy', 'Photography', 'Video Production'];
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-dark/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light">Our <span className="gradient-text">Portfolio</span></h2>
          <p className="text-light/80 max-w-3xl mx-auto">
            Explore our diverse range of projects that showcase our creativity, strategy, and results-driven approach.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-300 text-light shadow-md' 
                  : 'bg-dark/50 text-light/70 hover:bg-dark/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r from-primary-500/40 to-secondary-300/40 h-60 flex items-center justify-center`}>
                <span className="text-5xl">📊</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-primary-500 uppercase tracking-wider mb-2">
                  {item.category}
                </div>
                <h3 className="font-bold text-xl mb-2 text-light">{item.title}</h3>
                <p className="text-light/70 text-sm">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-light/10">
                  <a 
                    href="#" 
                    className="text-primary-500 font-medium flex items-center hover:text-secondary-300 transition-all"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
