const $nav = document.querySelector('.nav');

// let previousScrollTop = 0;
document.addEventListener('scroll', () => {
  const { scrollTop } = document.documentElement;
  $nav.classList.toggle('is-sticky', scrollTop > 95);

  // if (scrollTop === 0) {
  //   $nav.classList.remove('is-sticky');
  //   return;
  // }

  // if (scrollTop < previousScrollTop) {
  //   $nav.classList.add('is-sticky');
  // } else {
  //   $nav.classList.remove('is-sticky');
  // }
  // previousScrollTop = scrollTop;
});
