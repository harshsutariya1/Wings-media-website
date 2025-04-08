import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '../assets/wingsmedia-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <img src={Logo} alt="WingsMedia Logo" className="h-10 w-auto" />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-dark hover:text-primary-500 transition-all font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            Get in Touch
          </a>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-dark focus:outline-none">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-dark hover:text-primary-500 transition-all font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-600 text-white rounded-full font-medium hover:shadow-lg transition-all text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
