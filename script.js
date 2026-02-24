document.addEventListener('DOMContentLoaded', function() {
    // Toggle Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navClose = document.querySelector('.nav-close');
    
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    // Close menu with close button
    navClose.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.remove('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Typing Effect
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    if (typedTextSpan) {
        const textArray = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
        let textArrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;
        let erasingDelay = 50;
        let newTextDelay = 2000;
        
        function type() {
            const currentText = textArray[textArrayIndex];
            
            if (isDeleting) {
                typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, newTextDelay);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textArrayIndex = (textArrayIndex + 1) % textArray.length;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(type, isDeleting ? erasingDelay : typingDelay);
            }
        }
        
        setTimeout(type, newTextDelay);
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkFade);
    window.addEventListener('resize', checkFade);
    checkFade(); // Check on load
    
    // Back to top button
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
    
    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.style.width; // Width already set in HTML
            }
        });
    }
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars();
    
    // Project Modal Functionality
    const projectData = {
        ecommerce: {
            title: 'E-Commerce Platform',
            icon: 'fas fa-shopping-cart',
            description: 'Platform belanja modern dengan fitur keranjang dinamis, sistem pembayaran terintegrasi, dan manajemen produk yang komprehensif. Dibangun dengan arsitektur yang scalable dan user experience yang intuitif.',
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
            title: 'Aplikasi Mobile',
            icon: 'fas fa-mobile-alt',
            description: 'Aplikasi manajemen tugas yang powerful dengan sinkronisasi real-time, notifikasi push otomatis, dan interface yang user-friendly. Membantu pengguna meningkatkan produktivitas mereka.',
            details: [
                {
                    label: 'Deskripsi',
                    content: 'Aplikasi mobile untuk manajemen tugas harian dengan fitur kolaborasi tim, deadline tracking, dan progress monitoring yang real-time.'
                },
                {
                    label: 'Fitur Utama',
                    content: 'Real-time sync, push notifications, offline mode, team collaboration, recurring tasks, priority management, dan analytics dashboard.'
                }
            ],
            technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'AsyncStorage'],
            github: '#',
            live: '#'
        },
        dashboard: {
            title: 'Dashboard Analytics',
            icon: 'fas fa-chart-line',
            image: 'icon/dasboard-analystic.png',
            description: 'Dashboard interaktif yang menyajikan visualisasi data bisnis secara real-time dengan grafik yang indah dan informatif. Membantu pengambilan keputusan yang lebih baik.',
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
            github: '#',
            live: 'https://ivomahendra.github.io/Dasboard-Analystics/'
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
    
    // Event listeners
    openProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = btn.getAttribute('data-project');
            openProjectModal(projectKey);
        });
    });
    
    modalClose.addEventListener('click', closeProjectModal);
    
    // Close modal when clicking on overlay
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    // Social Links Modal Functionality
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

    // Event listeners for social modal
    socialModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openSocialModal();
    });

    socialModalClose.addEventListener('click', closeSocialModal);

    // Close social modal when clicking on overlay
    socialModal.addEventListener('click', (e) => {
        if (e.target === socialModal) {
            closeSocialModal();
        }
    });

    // Close social modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && socialModal.classList.contains('active')) {
            closeSocialModal();
        }
    });
});