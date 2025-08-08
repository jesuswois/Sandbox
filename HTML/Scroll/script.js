let text = document.querySelector('#main-text');

let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        entries[0].target.classList.add('entry')
    } else {
        entries[0].target.classList.remove('entry')
    }
}, {
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 1.0,
});
observer.observe(text)
