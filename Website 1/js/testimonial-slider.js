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
