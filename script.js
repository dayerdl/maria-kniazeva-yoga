// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 1)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Smooth scroll offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Language switching functionality
let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Observe all cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    setLanguage(currentLang);
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    const animatedElements = document.querySelectorAll(
        '.service-card, .cert-card, .contact-item, .timeline-item, .gallery-item'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Create floating mystical elements
    createFloatingElements();
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.querySelector('.page-loader');
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 500);
    });
});

// Create magical floating elements
function createFloatingElements() {
    const hero = document.querySelector('.hero');
    const gallery = document.querySelector('.gallery');
    
    // Create stars
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'floating-element star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 6 + 's';
        star.style.animationDuration = (Math.random() * 4 + 4) + 's';
        hero.appendChild(star);
    }
    
    // Create moons
    for (let i = 0; i < 3; i++) {
        const moon = document.createElement('div');
        moon.className = 'floating-element moon';
        moon.style.left = Math.random() * 100 + '%';
        moon.style.top = Math.random() * 100 + '%';
        moon.style.animationDelay = Math.random() * 8 + 's';
        hero.appendChild(moon);
    }
}

// Parallax effect for hero and scroll effects
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Hero parallax
    if (hero && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        
        // Hide scroll indicator when scrolling
        if (scrollIndicator) {
            scrollIndicator.style.opacity = 1 - (scrolled / 300);
        }
    }
    
    // Add scroll direction class
    if (scrolled > lastScrollY) {
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
    } else {
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
    }
    lastScrollY = scrolled;
});

// Add cursor trail effect
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        document.body.appendChild(trail);
        
        cursorTrail.push(trail);
        
        setTimeout(() => {
            trail.remove();
            cursorTrail.shift();
        }, 1000);
        
        if (cursorTrail.length > maxTrailLength) {
            const oldest = cursorTrail.shift();
            oldest.remove();
        }
    }
});

// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const overlay = item.querySelector('.gallery-overlay h3');
            
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = overlay ? overlay.textContent : '';
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Make entire contact card clickable
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const link = item.querySelector('a');
            if (link && e.target !== link) {
                link.click();
            }
        });
    });
});

