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
