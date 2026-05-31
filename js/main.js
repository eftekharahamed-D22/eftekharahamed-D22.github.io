// =====================================================
// Eftekhar's Blog — soothing scroll reveal + share buttons
// =====================================================
(function () {
    'use strict';

    // ---------- Scroll reveal ----------
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
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
    }

    // ---------- Share & copy-link buttons ----------
    const shareButtons = document.querySelectorAll('[data-share]');
    if (!shareButtons.length) return;

    shareButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.dataset.share;
            const pageUrl = window.location.href;
            const pageTitle = document.title;
            const url = encodeURIComponent(pageUrl);
            const title = encodeURIComponent(pageTitle);

            // Copy link
            if (platform === 'copy') {
                const label = btn.querySelector('.share-label-text');
                const original = label ? label.textContent : '';

                const showCopied = () => {
                    btn.classList.add('copied');
                    if (label) label.textContent = 'Copied!';
                    setTimeout(() => {
                        btn.classList.remove('copied');
                        if (label) label.textContent = original;
                    }, 2000);
                };

                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(pageUrl).then(showCopied);
                } else {
                    // Fallback for older browsers
                    const ta = document.createElement('textarea');
                    ta.value = pageUrl;
                    ta.style.position = 'fixed';
                    ta.style.opacity = '0';
                    document.body.appendChild(ta);
                    ta.select();
                    try { document.execCommand('copy'); showCopied(); } catch (_) {}
                    document.body.removeChild(ta);
                }
                return;
            }

            // Open share window for social platforms
            const urls = {
                linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
                whatsapp: `https://wa.me/?text=${title}%20${url}`,
                facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                email: `mailto:?subject=${title}&body=${url}`
            };

            const target = urls[platform];
            if (!target) return;

            if (platform === 'email') {
                window.location.href = target;
            } else {
                window.open(target, '_blank', 'width=600,height=540,noopener,noreferrer');
            }
        });
    });
})();
