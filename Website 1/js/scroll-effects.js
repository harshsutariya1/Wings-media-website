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
