const mobileMenu = document.querySelector('.menu-hidden');
const burger = document.querySelector('.checkbox1');

burger.addEventListener('change', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('open');
});
