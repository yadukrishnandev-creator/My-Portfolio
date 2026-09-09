/**
 * Yadu Krishnan - Developer Portfolio
 * JavaScript Module for Mobile Navigation Toggle
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select Navigation Elements
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const primaryNav = document.getElementById('primary-navigation');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!mobileMenuBtn || !primaryNav) return;

    /**
     * Toggle Mobile Navigation Drawer
     */
    function toggleMobileMenu() {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        
        mobileMenuBtn.classList.toggle('active');
        primaryNav.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    }

    /**
     * Close Mobile Navigation Drawer
     */
    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        primaryNav.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    // Event Listener: Hamburger Button Click
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Event Listener: Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Event Listener: Close menu when clicking outside header
    document.addEventListener('click', (e) => {
        const header = document.getElementById('header');
        if (header && !header.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Handle Active Nav Link Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
});
