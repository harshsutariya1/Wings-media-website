// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initParticles();
    initTestimonialSlider();
    initPortfolioLightbox();
    initContactForm();
    initScrollEffects();
    initBackToTop();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Toggle animation for hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Particle animation in hero section
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Random color (neon blue or magenta)
        const colors = ['rgba(0, 117, 255,', 'rgba(255, 0, 212,', 'rgba(62, 255, 243,'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        particle.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color} ${opacity});
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 ${size * 2}px ${color} ${opacity});
        `;
        
        // Store initial position and speed as data attributes
        particle.dataset.x = posX;
        particle.dataset.y = posY;
        particle.dataset.speedX = (Math.random() * 0.05 + 0.01) * (Math.random() > 0.5 ? 1 : -1);
        particle.dataset.speedY = (Math.random() * 0.05 + 0.01) * (Math.random() > 0.5 ? 1 : -1);
        
        // Add particle to container
        particlesContainer.appendChild(particle);
    }
    
    // Animate all particles in one animation loop for better performance
    animateParticles();
}

function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    
    function moveParticles() {
        particles.forEach(particle => {
            // Get position and speed from data attributes
            let x = parseFloat(particle.dataset.x);
            let y = parseFloat(particle.dataset.y);
            let speedX = parseFloat(particle.dataset.speedX);
            let speedY = parseFloat(particle.dataset.speedY);
            
            // Update position
            x += speedX;
            y += speedY;
            
            // Bounce off edges
            if (x <= 0 || x >= 100) {
                x = Math.max(0, Math.min(x, 100));
                speedX *= -1;
                particle.dataset.speedX = speedX;
            }
            
            if (y <= 0 || y >= 100) {
                y = Math.max(0, Math.min(y, 100));
                speedY *= -1;
                particle.dataset.speedY = speedY;
            }
            
            // Store updated position
            particle.dataset.x = x;
            particle.dataset.y = y;
            
            // Apply new position
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
        });
        
        // Continue animation
        requestAnimationFrame(moveParticles);
    }
    
    // Start animation loop
    moveParticles();
}

// Testimonial slider functionality
function initTestimonialSlider() {
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const dots = document.querySelectorAll('#testimonialDots .dot');
    
    let currentSlide = 0;
    const slideCount = document.querySelectorAll('.testimonial-card').length;
    
    // Update slider position
    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Handle next button click
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    });
    
    // Handle previous button click
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    });
    
    // Handle dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }, 5000);
    
    // Pause auto slide on hover
    const slider = document.querySelector('.testimonial-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Resume auto slide when mouse leaves
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        }, 5000);
    });
}

// Portfolio lightbox functionality
function initPortfolioLightbox() {
    const portfolioLinks = document.querySelectorAll('.portfolio-link[data-lightbox]');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-description');
    const close = document.querySelector('.lightbox .close');
    
    // Portfolio data (in a real project, this would come from a database or API)
    const portfolioData = {
        'project1': {
            title: 'Social Campaign for FashionNova',
            description: 'A comprehensive social media strategy that increased engagement by 340% and sales by 120% over three months.',
            image: 'project1.jpg'
        },
        'project2': {
            title: 'Brand Identity for TechStart',
            description: 'Complete brand redesign including logo, style guide, and digital assets that helped secure $2M in funding.',
            image: 'project2.jpg'
        },
        'project3': {
            title: 'Product Launch Video',
            description: 'Viral launch video with over 5 million views across platforms and 200% increase in pre-orders.',
            image: 'project3.jpg'
        },
        'project4': {
            title: 'Product Catalog Photography',
            description: 'Professional product shoots for e-commerce that improved conversion rate by 25%.',
            image: 'project4.jpg'
        },
        'project5': {
            title: 'Content Strategy for SaaS',
            description: '6-month editorial calendar and content creation that established the client as an industry thought leader.',
            image: 'project5.jpg'
        },
        'project6': {
            title: 'Instagram Growth Campaign',
            description: 'Organic growth strategy that increased followers by 300% and engagement by 500% in just 4 months.',
            image: 'project6.jpg'
        }
    };
    
    // Open lightbox when clicking portfolio items
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const project = this.getAttribute('data-lightbox');
            const projectData = portfolioData[project];
            
            // For demo purposes, we'll use the placeholder instead of actual images
            // In a real project, you'd use projectData.image
            lightboxImg.src = projectData ? `#` : '#';
            lightboxTitle.textContent = projectData ? projectData.title : 'Project Title';
            lightboxDesc.textContent = projectData ? projectData.description : 'Project Description';
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
        });
    });
    
    // Close lightbox on click
    close.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close lightbox when clicking outside content
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close lightbox with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill out all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real project, you would send this data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            form.style.display = 'none';
            formSuccess.classList.add('active');
            
            // Reset form after 5 seconds and hide success message
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                formSuccess.classList.remove('active');
            }, 5000);
        });
    }
}

// Scroll effects using Intersection Observer
function initScrollEffects() {
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    // Create Intersection Observer only if supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px' // Trigger a bit before the element comes into view
        });
        
        // Observe each element
        animatedElements.forEach(element => {
            // Add initial class
            element.classList.add('aos-init');
            
            // Add animation delay if specified
            const delay = element.getAttribute('data-aos-delay');
            if (delay) {
                element.style.transitionDelay = `${delay}ms`;
            }
            
            observer.observe(element);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        animatedElements.forEach(element => {
            element.classList.add('aos-animate');
        });
    }
}

// Back to top button functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
