document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 1. Toggle Menu Navigasi untuk Mobile
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Mencegah event klik menyebar ke document
        navMenu.classList.toggle('active');
    });

    // 2. Tutup Menu Navigasi ketika link diklik (agar lebih baik di mobile)
    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 3. Menutup Menu ketika mengklik di luar area nav-menu atau menu-toggle
    document.addEventListener('click', function(e) {
        // Cek apakah klik berasal dari luar navMenu dan bukan dari menuToggle
        // `!navMenu.contains(e.target)`: Klik tidak berada di dalam navMenu
        // `e.target !== menuToggle`: Klik bukan pada tombol toggle itu sendiri
        
        if (!navMenu.contains(e.target) && e.target !== menuToggle && navMenu.classList.contains('active')) {
            // Hapus kelas 'active' jika menu sedang terbuka
            navMenu.classList.remove('active');
        }
    });

    // 3. (Opsional) Efek Header saat Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)'; // Sedikit transparan
        } else {
            header.style.backgroundColor = 'var(--bg-color)';
        }
    });

    // 4. (Opsional) Implementasi Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});