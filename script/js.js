
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('mainHeader');
    const navbar = header.querySelector('.navbar');
    const menuToggle = header.querySelector('.menu-toggle');
    let ticking = false;

    function handleScroll() {
        if (window.scrollY > 80) {
            if (!header.classList.contains('fixed')) {
                header.classList.add('fixed');
                setTimeout(() => header.classList.add('visible'), 10);
            }
        } else {
            if (header.classList.contains('fixed')) {
                header.classList.remove('visible');
                setTimeout(() => header.classList.remove('fixed'), 400);
            }
        }
        ticking = false;
    }
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
                navbar.classList.remove('open');
            }
        }
    });

    // Optional: close menu on link click (mobile)
    navbar.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('open');
            }
        });
    });
});