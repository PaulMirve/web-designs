const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
});

document.querySelectorAll('.slide').forEach(el => {
    appearOnScroll.observe(el);
});

document.querySelectorAll('.fade-in').forEach(el => {
    appearOnScroll.observe(el);
});