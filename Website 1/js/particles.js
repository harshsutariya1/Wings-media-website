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
