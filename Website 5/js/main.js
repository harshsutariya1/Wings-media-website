// Main JavaScript file for WingsMedia Website 5

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const backToTop = document.getElementById('backToTop');
const currentYearEl = document.getElementById('currentYear');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');
const testimonialDots = document.querySelectorAll('#testimonialDots .dot');
const portfolioModal = document.getElementById('portfolioModal');
const modalClose = document.querySelector('.modal-close');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioLinks = document.querySelectorAll('.portfolio-link');

// Initialize current year in footer
if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Back to top button
if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        contactForm.style.opacity = '0.5';
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Show success message after delay
        setTimeout(() => {
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.opacity = '1';
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }, 5000);
        }, 1500);
    });
}

// Testimonial slider
let testimonialIndex = 0;

function showTestimonial(index) {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    if (index >= testimonialItems.length) {
        testimonialIndex = 0;
    } else if (index < 0) {
        testimonialIndex = testimonialItems.length - 1;
    } else {
        testimonialIndex = index;
    }
    
    // Update position
    if (testimonialTrack) {
        testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    
        // Update dots
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === testimonialIndex);
        });
    }
}

// Testimonial navigation
if (testimonialPrev && testimonialNext) {
    testimonialPrev.addEventListener('click', () => {
        showTestimonial(testimonialIndex - 1);
    });
    
    testimonialNext.addEventListener('click', () => {
        showTestimonial(testimonialIndex + 1);
    });
}

// Testimonial dot navigation
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

// Auto advance testimonials
let testimonialInterval = setInterval(() => {
    showTestimonial(testimonialIndex + 1);
}, 5000);

// Pause auto-advance on hover
if (testimonialTrack) {
    testimonialTrack.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialTrack.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            showTestimonial(testimonialIndex + 1);
        }, 5000);
    });
}

// Portfolio filter
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Filter portfolio items
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block';
                    
                    // Add animation after small delay
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    
                    // Hide after transition
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Portfolio modal
if (portfolioLinks.length > 0) {
    portfolioLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            
            const projectId = link.getAttribute('data-project');
            // In a real project, you would load project data dynamically
            // For demo, we'll use sample data
            let projectTitle, projectDesc;
            
            switch(projectId) {
                case 'project1':
                    projectTitle = 'Fashion Nova Campaign';
                    projectDesc = 'A comprehensive social media strategy that increased engagement by 340% and sales by 120% over three months.';
                    break;
                case 'project2':
                    projectTitle = 'TechStart Brand Identity';
                    projectDesc = 'Complete brand redesign including logo, style guide, and digital assets that helped secure $2M in funding.';
                    break;
                default:
                    projectTitle = 'Project Details';
                    projectDesc = 'Information about this project will be available soon.';
            }
            
            // Populate modal
            document.getElementById('modalTitle').textContent = projectTitle;
            document.getElementById('modalDescription').textContent = projectDesc;
            
            // Show modal
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        portfolioModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    portfolioModal.addEventListener('click', e => {
        if (e.target === portfolioModal) {
            portfolioModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Scroll animations with Intersection Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// Particles animation for hero section
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const colors = [
        'rgba(164, 107, 69, 0.3)',  // Copper Gold
        'rgba(215, 159, 131, 0.3)', // Metallic Rose
        'rgba(92, 61, 46, 0.3)'     // Warm Brown
    ];
    
    // Create particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning and size
        const size = Math.random() * 10 + 3;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        // Apply styles
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background-color: ${color};
            top: ${posY}%;
            left: ${posX}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite alternate;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();
