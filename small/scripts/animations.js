const navbarOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.getElementById('navbar').classList.add("navbar--in-view");
        } else {
            document.getElementById('navbar').classList.remove("navbar--in-view");
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 1
});

navbarOnScroll.observe(document.getElementById('navbar-dummie'));