const $navham = document.querySelector('.nav__ham');

$navham.addEventListener('click', () => {
  $navham.classList.toggle('is-active');
  document.getElementById($navham.dataset.target).classList.toggle('is-active');
});

document.addEventListener('click', (e) => {
  if (e.target === $navham) return;

  // check if the target is within navham
  // i.e user clicks on span elements
  let isItFalseAlaram = false;
  $navham.querySelectorAll('.nav__ham-line').forEach((element) => {
    if (e.target === element) {
      isItFalseAlaram = true;
    }
  });

  if (isItFalseAlaram) return;

  if ($navham.classList.contains('is-active')) {
    $navham.classList.remove('is-active');
    document
      .getElementById($navham.dataset.target)
      .classList.remove('is-active');
  }
});
