const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
})

document.querySelectorAll('.nav-item').forEach((n) =>
  n.addEventListener("click", function () {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  })
);