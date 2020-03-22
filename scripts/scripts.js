const button = document.querySelector('.hamburgerMenuButton');
const nav = document.querySelector('.mobileNav');

button.addEventListener('click', function () {
  nav.classList.toggle('open');
})