const $navham = document.querySelector('.nav__ham');

$navham.addEventListener('click', () => {
  $navham.classList.toggle('is-active');
  document.getElementById($navham.dataset.target).classList.toggle('is-active');
});

document.addEventListener('click', (e) => {
  if (
    e.target.parentNode !== $navham &&
    $navham.classList.contains('is-active')
  ) {
    $navham.classList.toggle('is-active');
    document
      .getElementById($navham.dataset.target)
      .classList.toggle('is-active');
  }
});
