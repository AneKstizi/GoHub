document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger-icon');
  const overlay = document.querySelector('.overlay');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  })


  setTimeout(() => {
    overlay.style.opacity = 0;
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = 'auto'
  }, 1000)
});