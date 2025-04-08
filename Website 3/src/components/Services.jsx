import { motion } from 'framer-motion';
import { FaCamera, FaFeatherAlt, FaHashtag, FaPencilRuler, FaVideo } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const serviceData = [
  {
    icon: <FaHashtag className="text-3xl" />,
    title: "Social Media Marketing",
    description: "Strategic campaign management across platforms to maximize engagement and conversion rates.",
    color: "from-primary-400 to-primary-600"
  },
  {
    icon: <FaPencilRuler className="text-3xl" />,
    title: "Graphic Design",
    description: "Eye-catching branding, posts, and infographics that capture audience attention and elevate your brand.",
    color: "from-accent-400 to-accent-600"
  },
  {
    icon: <FaFeatherAlt className="text-3xl" />,
    title: "Content Creation",
    description: "Strategic storytelling and script development for compelling digital narratives that resonate.",
    color: "from-secondary-400 to-secondary-600"
  },
  {
    icon: <FaCamera className="text-3xl" />,
    title: "Product Photography",
    description: "Professional in-house studio shooting to showcase your products at their absolute best.",
    color: "from-primary-400 to-accent-600"
  },
  {
    icon: <FaVideo className="text-3xl" />,
    title: "Video Production",
    description: "Full-service creation of ads, reels, and promotional content that converts viewers into customers.",
    color: "from-secondary-400 to-primary-600"
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital solutions designed to elevate your brand and drive measurable results.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceData.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-card rounded-xl hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${service.color} text-white p-6 flex items-center space-x-4`}>
                <div className="bg-white/20 rounded-full p-3 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl">{service.title}</h3>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <div className="mt-auto pt-4">
                  <a 
                    href="#contact" 
                    className="text-primary-500 font-medium flex items-center hover:text-primary-600 transition-all"
                  >
                    Learn More 
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

export default Services;
