// Soothing scroll reveal
(function () {
    'use strict';

    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

        reveals.forEach((el) => io.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add('visible'));
    }
})();
