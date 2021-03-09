const $nav = document.querySelector('.nav');

document.addEventListener('scroll', () => {
  const { scrollTop } = document.documentElement;
  $nav.classList.toggle('is-sticky', scrollTop > 95);
});
