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
