function cb(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-quotes');
    }
  });
}

let options = {
  root: null,
  rootMargin: '-10px',
  threshold: 1,
};

let observer = new IntersectionObserver(cb, options);

document.querySelectorAll('.section-quotes__box').forEach((el) => {
  observer.observe(el);
});
