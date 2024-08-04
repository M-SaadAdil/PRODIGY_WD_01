document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  let scrollPosition = 0;

  window.addEventListener('scroll', function () {
      scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
          navbar.style.backgroundColor = '#024086'; // Darker color when scrolled
      } else {
          navbar.style.backgroundColor = '#333'; // Original color
      }
  });
});
