import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="gradient-text">WingsMedia</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're a team of creative minds passionate about helping brands soar in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-1">
              <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-3xl font-bold mb-4">Who We Are</h3>
                  <p className="mb-6">A full-service digital agency committed to helping brands make their mark.</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold gradient-text">5+</div>
                      <p className="text-white/80 text-sm">Years Experience</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text">100+</div>
                      <p className="text-white/80 text-sm">Happy Clients</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text">20+</div>
                      <p className="text-white/80 text-sm">Team Members</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text">250+</div>
                      <p className="text-white/80 text-sm">Projects Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4">Crafting Digital <span className="gradient-text">Success Stories</span></h3>
            <p className="text-gray-600">
              WingsMedia is a creative powerhouse specializing in cutting-edge digital marketing solutions. 
              Our team of passionate experts combines innovation with strategy to elevate brands in the 
              digital landscape.
            </p>
            <p className="text-gray-600">
              Founded on the principles of creativity, transparency, and measurable results, we've helped 
              countless businesses transform their online presence and achieve remarkable growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Strategic Approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Creative Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Measurable Results</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Client-First Focus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
