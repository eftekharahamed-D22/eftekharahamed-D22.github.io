// Soothing scroll reveal + gentle parallax
(function () {
    'use strict';

    // Scroll reveal via IntersectionObserver
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
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

    // Gentle parallax on hero image + plants
    const heroImage = document.querySelector('.hero-image');
    const plants = document.querySelectorAll('.plant');
    const waterDrop = document.querySelector('.water-drop');

    if (heroImage || plants.length) {
        let ticking = false;

        const update = () => {
            const scrollY = window.scrollY;
            const winH = window.innerHeight;

            if (scrollY < winH * 1.2) {
                if (heroImage) {
                    heroImage.style.transform = `translateY(${scrollY * 0.35}px) scale(1.05)`;
                }
                if (waterDrop) {
                    waterDrop.style.transform = `translate(-50%, ${scrollY * 0.25}px)`;
                    waterDrop.style.opacity = Math.max(0, 1 - scrollY / (winH * 0.6));
                }
                plants.forEach((plant, i) => {
                    const speed = i % 2 === 0 ? 0.15 : -0.12;
                    const currentRotate = plant.style.getPropertyValue('--sway') || '0deg';
                    plant.style.transform = `translateY(${scrollY * speed}px)`;
                });
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            window.addEventListener('scroll', onScroll, { passive: true });
        }
    }
})();
