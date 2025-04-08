import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, Fashion Nova",
    quote: "WingsMedia transformed our social strategy completely. Our engagement has increased by 300% and sales directly from social platforms have doubled in just three months.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, TechGadget",
    quote: "The video production team at WingsMedia created our product launch video on a tight deadline. The results were beyond our expectations and helped us secure major retail partnerships.",
    rating: 5
  },
  {
    name: "Alexandra Patel",
    role: "CEO, Wellness Collective",
    quote: "Working with WingsMedia has been game-changing for our brand. Their strategic approach to content creation has established us as thought leaders in our industry.",
    rating: 5
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill()
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client <span className="gradient-text">Testimonials</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with WingsMedia.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12">
                    <FaQuoteLeft className="text-4xl text-primary-400 mb-6" />
                    <p className="text-gray-600 text-lg md:text-xl mb-8">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        <div className="flex mt-2">{renderStars(testimonial.rating)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-10 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="bg-white/70 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white/70 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
