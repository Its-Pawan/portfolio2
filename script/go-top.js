const goTopButton = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > (window.innerHeight * 0.25)) {
    goTopButton.style.display = 'block';
  } else {
    goTopButton.style.display = 'none';
  }
});
