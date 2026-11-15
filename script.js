// ==========================================
// MODERN GREEN PORTFOLIO - ENHANCED JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // NAVIGATION MENU
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navClose = document.querySelector('.nav-close');

    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    navClose.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.remove('active');
    });

    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ==========================================
    // TYPING EFFECT
    // ==========================================
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');

    if (typedTextSpan) {
        const textArray = ['Web Developer', 'UI/UX Designer', 'Digital Strategist', 'Problem Solver', 'Creative Thinker'];
        let textArrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = textArray[textArrayIndex];

            if (isDeleting) {
                typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textArrayIndex = (textArrayIndex + 1) % textArray.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        setTimeout(type, 1000);
    }

    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // ==========================================
    // SMOOTH SCROLLING
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // FADE IN ON SCROLL
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // ANIMATED STATISTICS COUNTER
    // ==========================================
    function animateStatistics() {
        const statNumbers = document.querySelectorAll('[data-count]');
        if (!statNumbers.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.getAttribute('data-count'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            element.textContent = target;
                            clearInterval(timer);
                        } else {
                            element.textContent = Math.floor(current);
                        }
                    }, 16);

                    observer.unobserve(element);
                }
            });
        }, {
            threshold: 0.5
        });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    animateStatistics();

    // ==========================================
    // ACTIVE NAVIGATION LINK
    // ==========================================
    function initActiveNavHighlighting() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        function highlightNavLink() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', highlightNavLink);
        highlightNavLink();
    }

    initActiveNavHighlighting();

    // ==========================================
    // PROJECT MODAL
    // ==========================================
    const projectData = {
        ecommerce: {
            title: 'E-Commerce Platform',
            icon: 'fas fa-shopping-cart',
            image: 'icon/resto&caffe.png',
            description: 'Platform belanja modern dengan fitur keranjang dinamis, sistem pembayaran terintegrasi, dan manajemen produk yang komprehensif.',
            details: [
                {
                    label: 'Deskripsi',
                    content: 'Platform e-commerce lengkap yang memungkinkan pengguna untuk browsing, mencari, dan membeli produk dengan mudah. Fitur pencarian advanced, review produk, dan sistem rekomendasi.'
                },
                {
                    label: 'Fitur Utama',
                    content: 'Keranjang belanja real-time, sistem pembayaran aman, tracking pesanan, wishlist, review & rating, promo code, dan admin dashboard.'
                }
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe API'],
            github: 'https://github.com/ivomahendra/resto-caffe',
            live: '#'
        },
        mobile: {
            title: 'Web App Banking',
            icon: 'fas fa-university',
            image: 'icon/Capture Web Banking.png',
            description: 'Web app perbankan modern dengan tampilan dashboard keuangan, riwayat transaksi, dan keamanan akun yang kuat.',
            details: [
                {
                    label: 'Deskripsi',
                    content: 'Web app perbankan untuk melihat saldo, mengelola transaksi, memantau pengeluaran, dan melakukan transfer dengan mudah.'
                },
                {
                    label: 'Fitur Utama',
                    content: 'Dashboard transaksi real-time, grafik pengeluaran, transfer dana, notifikasi, keamanan akun, dan laporan riwayat transaksi.'
                }
            ],
            technologies: ['React', 'Firebase', 'Tailwind CSS', 'JWT', 'API Banking'],
            github: 'https://github.com/ivomahendra/web-banking',
            live: '#'
        },
        dashboard: {
            title: 'Dashboard Analytics',
            icon: 'fas fa-chart-line',
            image: 'icon/dasboard-analystic.png',
            description: 'Dashboard interaktif yang menyajikan visualisasi data bisnis secara real-time dengan grafik yang indah dan informatif.',
            details: [
                {
                    label: 'Deskripsi',
                    content: 'Dashboard komprehensif untuk visualisasi dan analisis data bisnis dengan berbagai macam chart dan metrik performa yang dapat dikustomisasi.'
                },
                {
                    label: 'Fitur Utama',
                    content: 'Real-time data visualization, custom widgets, export reports, filtering & drilling down, responsive design, dan interactive charts.'
                }
            ],
            technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB', 'Chart.js', 'Axios'],
            github: 'https://github.com/ivomahendra/Dasboard-Analystics',
            live: '#'
        }
    };

    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const openProjectBtns = document.querySelectorAll('.open-project');

    function openProjectModal(projectKey) {
        const project = projectData[projectKey];
        if (!project) return;

        let detailsHTML = '';
        project.details.forEach(detail => {
            detailsHTML += `
                <div class="detail-group">
                    <h4>${detail.label}</h4>
                    <p>${detail.content}</p>
                </div>
            `;
        });

        let buttonsHTML = '';
        if (project.github !== '#') {
            buttonsHTML += `<a href="${project.github}" target="_blank" class="btn-primary">Repository <i class="fas fa-external-link-alt"></i></a>`;
        }
        if (project.live !== '#') {
            buttonsHTML += `<a href="${project.live}" target="_blank" class="btn-primary">Live Demo <i class="fas fa-external-link-alt"></i></a>`;
        }

        let imageHTML = '';
        if (project.image) {
            imageHTML = `<img src="${project.image}" alt="${project.title}" class="project-preview-image">`;
        }

        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <div class="project-image-large">
                <i class="${project.icon}"></i>
            </div>
            <h2>${project.title}</h2>
            <p class="project-description">${project.description}</p>
            ${imageHTML}
            <div class="project-details">
                ${detailsHTML}
            </div>
            <div class="detail-group">
                <h4>Teknologi</h4>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
            </div>
            ${buttonsHTML ? `<div class="modal-buttons">${buttonsHTML}</div>` : ''}
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    openProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = btn.getAttribute('data-project');
            openProjectModal(projectKey);
        });
    });

    modalClose.addEventListener('click', closeProjectModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    modal.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('project-preview-image')) {
            e.stopPropagation();
            openFullscreenImage(target.src, target.alt);
        }
    });

    function openFullscreenImage(src, alt) {
        const overlay = document.createElement('div');
        overlay.className = 'fullscreen-image-overlay';
        overlay.innerHTML = `<img src="${src}" alt="${alt}">`;
        overlay.addEventListener('click', () => overlay.remove());
        document.body.appendChild(overlay);

        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                overlay.remove();
                document.removeEventListener('keydown', escapeHandler);
            }
        };

        document.addEventListener('keydown', escapeHandler);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    // ==========================================
    // SOCIAL LINKS MODAL
    // ==========================================
    const socialModal = document.getElementById('socialModal');
    const socialModalBtn = document.getElementById('socialModalBtn');
    const socialModalClose = socialModal.querySelector('.modal-close');

    function openSocialModal() {
        socialModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSocialModal() {
        socialModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    socialModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openSocialModal();
    });

    socialModalClose.addEventListener('click', closeSocialModal);

    socialModal.addEventListener('click', (e) => {
        if (e.target === socialModal) {
            closeSocialModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && socialModal.classList.contains('active')) {
            closeSocialModal();
        }
    });

    // ==========================================
    // PARALLAX EFFECT FOR HERO
    // ==========================================
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', () => {
        if (heroBg) {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ==========================================
    // TILT EFFECT FOR CARDS
    // ==========================================
    const cards = document.querySelectorAll('.expertise-item, .project-item, .stat-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ==========================================
    // CURSOR GLOW EFFECT (Desktop only)
    // ==========================================
    if (window.innerWidth > 768) {
        const cursorGlow = document.createElement('div');
        cursorGlow.style.cssText = `
            position: fixed;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%);
            pointer-events: none;
            z-index: 0;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease;
        `;
        document.body.appendChild(cursorGlow);

        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // ==========================================
    // TEXT REVEAL ANIMATION
    // ==========================================
    const animateText = document.querySelector('.animate-text');
    
    if (animateText) {
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease-out';
                    textObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        textObserver.observe(animateText);
    }

    // ==========================================
    // SERVICE HOURS INDICATOR
    // ==========================================
    function updateServiceHours() {
        const now = new Date();
        const hours = now.getHours();
        const day = now.getDay();
        const isBusinessHours = (day >= 1 && day <= 5) && (hours >= 9 && hours < 17);

        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            const existingIndicator = document.querySelector('.service-indicator');
            if (existingIndicator) existingIndicator.remove();

            const indicator = document.createElement('p');
            indicator.className = 'service-indicator';
            indicator.innerHTML = `<i class="fas ${isBusinessHours ? 'fa-circle text-green-500' : 'fa-moon'}"></i> 
                ${isBusinessHours ? 'Online - Siap Melayani' : 'Offline - Akan membalas besok'}`;
            contactInfo.appendChild(indicator);
        }
    }

    updateServiceHours();
    setInterval(updateServiceHours, 60000);

    // ==========================================
    // PERFORMANCE LOGGING
    // ==========================================
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('=== PERFORMANCE METRICS ===');
                console.log(`Page Load Time: ${perfData.loadEventEnd - perfData.startTime}ms`);
            }, 0);
        });
    }

    // ==========================================
    // LAZY LOADING FOR IMAGES
    // ==========================================
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
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

    // ==========================================
    // DYNAMIC PAGE TITLE
    // ==========================================
    const originalTitle = document.title;

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
        });

        let newTitle = originalTitle;
        switch(currentSection) {
            case 'about':
                newTitle = 'Tentang Saya - ' + originalTitle;
                break;
            case 'expertise':
                newTitle = 'Keahlian - ' + originalTitle;
                break;
            case 'projects':
                newTitle = 'Proyek - ' + originalTitle;
                break;
            case 'contact':
                newTitle = 'Kontak - ' + originalTitle;
                break;
        }

        if (document.title !== newTitle && currentSection) {
            document.title = newTitle;
        } else if (!currentSection) {
            document.title = originalTitle;
        }
    });

    // ==========================================
    // STRUCTURED DATA (SEO)
    // ==========================================
    function injectStructuredData() {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ivo Mahendra",
            "jobTitle": "Web Developer & Digital Strategist",
            "description": "Profesional dengan latar belakang Ekonomi dan Hukum, spesialis dalam pengembangan web dan strategi digital untuk bisnis.",
            "email": "ivo.click@gmail.com",
            "telephone": "+6281225110044",
            "url": "https://ivomahendra.com",
            "sameAs": [
                "https://github.com/ivomahendra",
                "https://linkedin.com/in/ivomahendra",
                "https://instagram.com/ivo_mahendra"
            ],
            "knowsAbout": ["Web Development", "UI/UX Design", "Digital Strategy", "SEO Optimization"],
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID"
            }
        });

        document.head.appendChild(script);
    }

    injectStructuredData();

    // ==========================================
    // RIPPLE EFFECT ON BUTTONS
    // ==========================================
    document.querySelectorAll('.btn, .project-link').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple-effect 0.6s ease-out;
                pointer-events: none;
            `;

            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-effect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('🚀 Portfolio loaded successfully!');
});
