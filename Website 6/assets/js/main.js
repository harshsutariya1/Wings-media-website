/**
 * WingsMedia - Main JavaScript File
 */

// Ensure loader hides even if other scripts fail
document.addEventListener('DOMContentLoaded', function() {
    // Force hide loader after maximum wait time (3 seconds)
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        if (loader && !loader.classList.contains('fade-out')) {
            console.log('Forcing loader to hide after timeout');
            loader.classList.add('fade-out');
            document.body.classList.remove('loading');
        }
    }, 3000);
    
    // Existing initialization code
    initSite();
});

// Handle page load directly rather than waiting for all resources
window.addEventListener('load', function() {
    hideLoader();
});

// Additional failsafe - Add this function
function hideLoader() {
    // Animate progress bar to 100%
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = '100%';
    }
    
    // Hide preloader after animation
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.classList.add('fade-out');
            document.body.classList.remove('loading');
        }
    }, 500);
}

function initSite() {
    'use strict';

    // Global variables
    const header = document.getElementById('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
    const backToTop = document.getElementById('backToTop');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    // Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            disable: 'mobile'
        });
    }
    
    // Preloader
    window.addEventListener('load', function() {
        hideLoader();
    });
    
    // Handle header scroll state
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            
            // Toggle menu icon animation
            const lines = this.querySelectorAll('.line');
            lines[0].classList.toggle('rotate-down');
            lines[1].classList.toggle('fade-out');
        });
    }
    
    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('no-scroll');
            
            // Reset menu icon
            const lines = menuToggle.querySelectorAll('.line');
            lines[0].classList.remove('rotate-down');
            lines[1].classList.remove('fade-out');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const topOffset = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: topOffset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Services tab functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and content
            tabBtns.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked button and its content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Portfolio filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter items
            workItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                    
                    // Add animation after small delay
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    // Hide after transition
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
    
    // Testimonials slider initialization
    if (document.querySelector('.testimonial-slider')) {
        const testimonialSwiper = new Swiper('.testimonial-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.testimonial-next',
                prevEl: '.testimonial-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 40
                }
            },
            on: {
                init: function() {
                    animateTestimonialCards();
                },
                slideChangeTransitionStart: function() {
                    animateTestimonialCards();
                }
            }
        });
        
        function animateTestimonialCards() {
            const activeSlides = document.querySelectorAll('.swiper-slide-active, .swiper-slide-next');
            activeSlides.forEach(slide => {
                const card = slide.querySelector('.testimonial-card');
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }, 50);
            });
        }
    }
    
    // Contact form handling with EmailJS
    if (contactForm) {
        // Initialize EmailJS with your user ID
        emailjs.init("your_emailjs_user_id"); // Replace with your actual user ID
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Get form data
            const formData = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                subject: this.querySelector('#subject').value,
                message: this.querySelector('#message').value
            };
            
            // Send email using EmailJS
            emailjs.send('service_id', 'template_id', formData)
                .then(function() {
                    // Show success message
                    alert('Your message has been sent successfully!');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, function(error) {
                    console.error('Email error:', error);
                    alert('Sorry, there was an error sending your message. Please try again later.');
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
        });
    }
    
    // Newsletter form handling
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you'd send this to your server or email service
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with: ${email}`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Animate counter numbers
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            // Get target number
            const target = +(counter.textContent.replace(/\+/g, ''));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // Update every 16ms (60fps)
            
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    
                    if (current < target) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                    }
                }
            };
            
            // Start animation when element comes into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    // Initialize counter animations
    animateCounters();
}
