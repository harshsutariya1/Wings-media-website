import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-light">
            Elevate Your <span className="gradient-text">Digital Presence</span>
          </h1>
          <p className="text-lg md:text-xl text-light/80 mb-8 max-w-xl mx-auto md:mx-0">
            We transform brands into digital leaders through strategic marketing, compelling design, and 
            innovative content creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-300 text-light rounded-full font-medium text-lg hover:shadow-lg transition-all"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-full font-medium text-lg hover:bg-primary-500/10 transition-all"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="relative z-20 rounded-2xl overflow-hidden shadow-xl w-full max-w-lg">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-300 aspect-[4/3] w-full flex items-center justify-center">
                <div className="text-light text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">WingsMedia</h3>
                  <p className="text-light/80">Your Brand. Our Expertise.</p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute top-1/4 -left-10 z-10 w-20 h-20 bg-primary-500/80 rounded-lg rotate-12 animate-float shadow-lg"></div>
            <div className="absolute bottom-1/4 -right-10 z-10 w-28 h-28 bg-secondary-300/80 rounded-lg -rotate-12 animate-float shadow-lg" style={{animationDelay: '2s'}}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
