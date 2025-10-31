// ===== GLOBAL VARIABLES =====
let isLoading = true;
let currentSection = 'home';
let scrollDirection = 'down';
let lastScrollTop = 0;

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// ===== INITIALIZATION =====
function initializePortfolio() {
    // Show loading screen briefly for effect
    setTimeout(() => {
        hideLoadingScreen();
        initializeNavigation();
        initializeTypingEffect();
        initializeScrollAnimations();
        initializeSkillBars();
        initializeProjectFilters();
        initializeCounters();
        initializeContactForm();
        initializeParallax();
        
        // Re-initialize everything after data loads
        setTimeout(() => {
            console.log('Re-initializing after data load...');
            initializeProjectFilters();
            initializeSkillBars();
            initializeScrollAnimations();
        }, 2000);
    }, 1500);
}

// ===== LOADING SCREEN =====
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        isLoading = false;
    }, 500);
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effects
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for background effect
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Update active navigation link
        updateActiveNavLink();
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== ACTIVE NAVIGATION LINK =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    if (current !== currentSection) {
        currentSection = current;
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===== TYPING EFFECT =====
function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    
    // Get titles from data configuration or use defaults
    let titles = [
        'Data Scientist',
        'Research Analyst', 
        'ML Engineer',
        'Statistical Analyst',
        'AI Specialist'
    ];
    
    // Use data from configuration if available
    if (typeof portfolioData !== 'undefined' && portfolioData.personal.typingTitles) {
        titles = portfolioData.personal.typingTitles;
    }
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentTitle.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    if (typingElement) {
        typeText();
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Special handling for different elements
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
                
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll(`
        .timeline-item,
        .project-card,
        .skill-category,
        .publication-card,
        .about-text,
        .about-stats,
        .stat-item,
        .skill-item
    `);
    
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ===== SKILL BARS =====
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0%';
    });
}

function animateSkillBar(skillItem) {
    const progressBar = skillItem.querySelector('.skill-progress');
    if (progressBar && !progressBar.classList.contains('animated')) {
        const targetWidth = progressBar.getAttribute('data-width');
        
        setTimeout(() => {
            progressBar.style.width = targetWidth;
            progressBar.classList.add('animated');
        }, 200);
    }
}

// ===== PROJECT FILTERS =====
function initializeProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsCount = document.getElementById('projects-count');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');
            
            // Update active button with animation
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.style.transform = 'scale(1)';
            });
            btn.classList.add('active');
            btn.style.transform = 'scale(1.05)';
            
            let visibleCount = 0;
            
            // Filter projects with enhanced animation
            projectCards.forEach((card, index) => {
                const categories = card.getAttribute('data-category');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.classList.remove('hidden');
                    visibleCount++;
                    
                    // Staggered animation for showing cards
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) rotateY(0deg)';
                    }, index * 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8) rotateY(90deg)';
                    
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 400);
                }
            });
            
            // Update projects count with animation
            if (projectsCount) {
                projectsCount.style.transform = 'scale(1.2)';
                projectsCount.style.color = 'var(--secondary-color)';
                
                setTimeout(() => {
                    projectsCount.textContent = visibleCount;
                    projectsCount.style.transform = 'scale(1)';
                    projectsCount.style.color = 'var(--primary-color)';
                }, 200);
            }
        });
    });
    
    // Add click sound effect (optional)
    filterBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', () => {
            if (!btn.classList.contains('active')) {
                btn.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// ===== COUNTERS =====
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        counter.textContent = '0';
    });
}

function animateCounter(statItem) {
    const counter = statItem.querySelector('.stat-number');
    const target = parseInt(statItem.getAttribute('data-count'));
    
    if (counter && !counter.classList.contains('animated')) {
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, stepTime);
        
        counter.classList.add('animated');
    }
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) {
        console.warn('Contact form not found');
        return;
    }
    
    console.log('Initializing contact form...');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        
        // Add loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        if (!submitBtn) {
            console.error('Submit button not found');
            return;
        }
        
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        console.log('Form data:', { name, email, subject, message });
        
        // Validate required fields
        if (!name || !email || !subject || !message) {
            showEnhancedNotification('Please fill in all fields.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            return;
        }
        
        // Simulate sending delay for better UX
        setTimeout(() => {
            try {
                // Get email from data or use default
                let recipientEmail = 'smasaduzzaman95@gmail.com';
                if (typeof portfolioData !== 'undefined' && portfolioData.personal.email) {
                    recipientEmail = portfolioData.personal.email;
                }
                
                // Create mailto link
                const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                
                console.log('Opening mailto link:', mailtoLink);
                
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message with animation
                showEnhancedNotification('Message prepared! Your email client should open shortly.', 'success');
                
                // Reset form with animation
                form.style.transition = 'all 0.3s ease';
                form.style.transform = 'scale(0.95)';
                form.style.opacity = '0.7';
                
                setTimeout(() => {
                    form.reset();
                    form.style.transform = 'scale(1)';
                    form.style.opacity = '1';
                    
                    // Reset floating labels
                    const labels = form.querySelectorAll('label');
                    labels.forEach(label => {
                        label.style.top = 'var(--space-4)';
                        label.style.fontSize = 'var(--font-size-base)';
                        label.style.color = 'var(--text-light)';
                    });
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 500);
                
            } catch (error) {
                console.error('Error processing form:', error);
                showEnhancedNotification('Error sending message. Please try again.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }, 1000);
    });
    
    // Floating label effect
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const label = input.nextElementSibling;
            if (label) {
                label.style.top = '-10px';
                label.style.fontSize = 'var(--font-size-sm)';
                label.style.color = 'var(--primary-color)';
            }
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                const label = input.nextElementSibling;
                if (label) {
                    label.style.top = 'var(--space-4)';
                    label.style.fontSize = 'var(--font-size-base)';
                    label.style.color = 'var(--text-light)';
                }
            }
        });
    });
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showEnhancedNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} enhanced`;
    
    // Determine icon and title based on type
    let icon = 'info-circle';
    let title = 'Info';
    if (type === 'success') {
        icon = 'check-circle';
        title = 'Success!';
    } else if (type === 'error') {
        icon = 'exclamation-circle';
        title = 'Error';
    }
    
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="notification-text">
                <strong>${title}</strong>
                <p>${message}</p>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Determine colors based on type
    let backgroundGradient = '#3b82f6, #2563eb'; // default blue
    let glowColor = 'rgba(59, 130, 246, 0.7)';
    
    if (type === 'success') {
        backgroundGradient = '#10b981, #059669';
        glowColor = 'rgba(16, 185, 129, 0.7)';
    } else if (type === 'error') {
        backgroundGradient = '#ef4444, #dc2626';
        glowColor = 'rgba(239, 68, 68, 0.7)';
    }
    
    // Add enhanced styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, ${backgroundGradient});
        color: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        z-index: 10000;
        transform: translateX(100%) scale(0.8);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        min-width: 300px;
        animation: pulseGlow 0.6s ease-out;
    `;
    
    // Add internal styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 ${glowColor}; }
            70% { box-shadow: 0 0 0 10px ${glowColor.replace('0.7', '0')}; }
            100% { box-shadow: 0 0 0 0 ${glowColor.replace('0.7', '0')}; }
        }
        .notification.enhanced .notification-content {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }
        .notification.enhanced .notification-icon {
            font-size: 1.5rem;
            margin-top: 0.25rem;
        }
        .notification.enhanced .notification-text strong {
            display: block;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        .notification.enhanced .notification-text p {
            margin: 0;
            opacity: 0.9;
            font-size: 0.875rem;
            line-height: 1.4;
        }
        .notification.enhanced .notification-close {
            background: none;
            border: none;
            color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            padding: 0.25rem;
            border-radius: 4px;
            transition: all 0.2s ease;
        }
        .notification.enhanced .notification-close:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 400);
    });
    
    // Auto remove after delay
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%) scale(0.8)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
                if (document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            }, 400);
        }
    }, 5000);
}

// ===== PARALLAX EFFECTS =====
function initializeParallax() {
    const shapes = document.querySelectorAll('.shape');
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax for hero shapes
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.3;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
        
        // Parallax for floating icons
        floatingIcons.forEach((icon, index) => {
            const speed = (index + 1) * 0.2;
            icon.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== SMOOTH SCROLL =====
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 70; // Account for fixed navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Optimize scroll events
const optimizedScrollHandler = throttle(() => {
    if (!isLoading) {
        updateActiveNavLink();
    }
}, 100);

// Optimize resize events
const optimizedResizeHandler = debounce(() => {
    // Recalculate layouts if needed
    console.log('Window resized');
}, 250);

window.addEventListener('scroll', optimizedScrollHandler);
window.addEventListener('resize', optimizedResizeHandler);

// ===== INTERSECTION OBSERVER FOR LAZY LOADING =====
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
    
    // Arrow keys for section navigation
    if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        navigateToNextSection();
    } else if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        navigateToPrevSection();
    }
});

// ===== SECTION NAVIGATION =====
function navigateToNextSection() {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'publications', 'contact'];
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    smoothScrollTo(sections[nextIndex]);
}

function navigateToPrevSection() {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'publications', 'contact'];
    const currentIndex = sections.indexOf(currentSection);
    const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
    smoothScrollTo(sections[prevIndex]);
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initializeAccessibility() {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--primary-color)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
    
    // Announce section changes for screen readers
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionTitle = entry.target.querySelector('h2, h1');
                if (sectionTitle) {
                    // Create live region for screen readers
                    announceToScreenReader(`Entered ${sectionTitle.textContent} section`);
                }
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
}

function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ===== PARTICLE SYSTEM =====
function createGlobalParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'global-particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particlesContainer);
    
    // Create floating particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'global-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--secondary-color)'};
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            left: ${Math.random() * 100}%;
            animation: globalFloat ${Math.random() * 10 + 15}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add global particle animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes globalFloat {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: var(--particle-opacity, 0.3);
            }
            90% {
                opacity: var(--particle-opacity, 0.3);
            }
            100% {
                transform: translateY(-10vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .global-particle:nth-child(odd) {
            animation-direction: reverse;
        }
    `;
    document.head.appendChild(style);
}

// ===== ENHANCED FORM INTERACTIONS =====
function enhanceFormInteractions() {
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        // Add focus ripple effect
        input.addEventListener('focus', (e) => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                opacity: 0.2;
                pointer-events: none;
                z-index: -1;
                animation: inputRipple 0.6s ease-out;
            `;
            
            const formGroup = input.closest('.form-group');
            if (formGroup) {
                formGroup.style.position = 'relative';
                formGroup.appendChild(ripple);
                
                setTimeout(() => {
                    if (formGroup.contains(ripple)) {
                        formGroup.removeChild(ripple);
                    }
                }, 600);
            }
        });
        
        // Add typing animation to labels
        input.addEventListener('input', (e) => {
            const label = input.nextElementSibling;
            if (label && input.value) {
                label.style.animation = 'labelBounce 0.3s ease';
                setTimeout(() => {
                    label.style.animation = '';
                }, 300);
            }
        });
    });
    
    // Add input animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes inputRipple {
            0% {
                width: 0;
                height: 0;
                opacity: 0.2;
            }
            100% {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
        
        @keyframes labelBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
}

// ===== SCROLL PROGRESS INDICATOR =====
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 10001;
        transition: width 0.1s ease;
        box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = Math.min(scrolled, 100) + '%';
    });
}

// ===== INITIALIZE EVERYTHING =====
window.addEventListener('load', () => {
    initializeAccessibility();
    initializeLazyLoading();
    createGlobalParticles();
    enhanceFormInteractions();
    addScrollProgress();
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Optionally show user-friendly error message
});

// ===== BROWSER COMPATIBILITY =====
// Check for required features
if (!window.IntersectionObserver) {
    console.warn('IntersectionObserver not supported. Animations may not work properly.');
}

if (!CSS.supports('backdrop-filter', 'blur(10px)')) {
    console.warn('Backdrop filter not supported. Some visual effects may be degraded.');
}

// ===== SERVICE WORKER REGISTRATION (Optional) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== EXPORT FUNCTIONS FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializePortfolio,
        hideLoadingScreen,
        initializeNavigation,
        initializeTypingEffect,
        smoothScrollTo,
        showNotification
    };
}