/**
 * WingsMedia - Animations JavaScript File
 * Uses GSAP for advanced animations
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Custom cursor animation
    function initCustomCursor() {
        const cursor = document.querySelector('.custom-cursor');
        
        if (!cursor || window.innerWidth < 992) return; // Skip on mobile devices
        
        cursor.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            // Delay cursor movement for subtle trailing effect
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        });
        
        // Cursor interaction states
        document.addEventListener('mousedown', () => {
            cursor.classList.add('cursor-click');
        });
        
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor-click');
        });
        
        // Fade cursor in
        setTimeout(() => {
            cursor.classList.add('cursor-active');
        }, 1000);
        
        // Increase cursor on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, .work-item, .service-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '70px';
                cursor.style.height = '70px';
                cursor.style.borderWidth = '1px';
                cursor.style.backgroundColor = 'rgba(164, 107, 69, 0.1)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.borderWidth = '2px';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }

    // Hero section animations
    function animateHero() {
        const tl = gsap.timeline();
        
        tl.from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-cta', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-scroll', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.2')
        .from('.header', {
            y: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.8');
    }

    // Parallax scroll effects
    function initParallaxEffects() {
        // Create parallax effect for hero section
        gsap.to('.hero-background', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
        
        // Image reveal animations
        gsap.utils.toArray('.image-wrapper').forEach(wrapper => {
            gsap.from(wrapper, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top bottom-=100',
                    end: 'bottom center',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    // Staggered animations for sections
    function initSectionAnimations() {
        // Value cards staggered animation
        gsap.from('.value-card', {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.values-grid',
                start: 'top bottom-=100',
                end: 'bottom center',
                toggleActions: 'play none none none'
            }
        });
        
        // Service tabs animation
        gsap.from('.tab-btn', {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.services-tabs',
                start: 'top bottom-=100',
                toggleActions: 'play none none none'
            }
        });
        
        // Portfolio items animation
        gsap.from('.work-item', {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.work-grid',
                start: 'top bottom-=50',
                toggleActions: 'play none none none'
            }
        });
    }

    // Text animation effects
    function initTextAnimations() {
        // Split text animation for section titles
        let splitTitles = document.querySelectorAll('.section-title:not(.work-title)');
        
        splitTitles.forEach(title => {
            let chars = title.textContent.split('');
            title.innerHTML = '';
            
            chars.forEach(char => {
                let span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                span.style.transform = 'translateY(50px)';
                span.style.opacity = '0';
                title.appendChild(span);
            });
            
            ScrollTrigger.create({
                trigger: title,
                start: 'top bottom-=100',
                onEnter: () => {
                    gsap.to(title.childNodes, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.02,
                        ease: 'power3.out'
                    });
                }
            });
        });
    }

    // Menu animations
    function initMenuAnimations() {
        const menuTl = gsap.timeline({ paused: true });
        
        menuTl.to('.mobile-menu', {
            right: 0,
            duration: 0.3,
            ease: 'power2.inOut'
        })
        .from('.mobile-nav-item', {
            x: 50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.1')
        .from('.mobile-menu-footer', {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: 'power3.out'
        }, '-=0.2');
        
        // Toggle menu animation
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            if (this.classList.contains('active')) {
                menuTl.play();
            } else {
                menuTl.reverse();
            }
        });
    }

    // Hover animations
    function initHoverAnimations() {
        // Service card hover effect
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                    duration: 0.3
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                    duration: 0.3
                });
            });
        });
    }

    // Initialize animations if GSAP is available
    if (window.gsap) {
        gsap.registerPlugin(ScrollTrigger);
        
        // Initialize animations
        initCustomCursor();
        animateHero();
        initParallaxEffects();
        initSectionAnimations();
        initTextAnimations();
        initMenuAnimations();
        initHoverAnimations();
        
        // Additional scroll-triggered animations
        ScrollTrigger.batch('.fade-in', {
            start: 'top bottom-=100',
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            },
            once: true
        });
    }
});
