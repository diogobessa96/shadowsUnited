// Show/hide scroll to top button and shrink navbar on scroll
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('nav img[alt="Shadows United Logo"]');
    
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.add('opacity-100');
    } else {
        scrollToTopBtn.classList.remove('opacity-100');
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
    
    // Shrink navbar when scrolling
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
        if (logo) {
            logo.classList.remove('h-14');
            logo.classList.add('h-10');
        }
    } else {
        nav.classList.remove('nav-scrolled');
        if (logo) {
            logo.classList.remove('h-10');
            logo.classList.add('h-14');
        }
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
