const $navham = document.querySelector('.nav__ham');

$navham.addEventListener('click', () => {
  $navham.classList.toggle('is-active');
  console.log('clicked');
});
