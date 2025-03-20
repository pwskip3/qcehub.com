document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.logo', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.neon-link', {
        opacity: 0,
        x: 20,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });

    gsap.from('.intro .neon-text', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out'
    });

    gsap.from('.intro .neon-subtext', {
        opacity: 0,
        y: 30,
        duration: 1.5,
        delay: 1,
        ease: 'power2.out'
    });
});
