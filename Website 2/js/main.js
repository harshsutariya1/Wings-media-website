// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    if (typeof initNavigation === 'function') initNavigation();
    if (typeof initParticles === 'function') initParticles();
    if (typeof initTestimonialSlider === 'function') initTestimonialSlider();
    if (typeof initPortfolioLightbox === 'function') initPortfolioLightbox();
    if (typeof initContactForm === 'function') initContactForm();
    if (typeof initScrollEffects === 'function') initScrollEffects();
    if (typeof initBackToTop === 'function') initBackToTop();
});
