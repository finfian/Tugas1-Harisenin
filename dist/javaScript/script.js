// Navbar fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

if (window.scrollY > fixedNav) {
  header.classList.add('navbar-fixed');
} else {
  header.classList.remove('navbar-fixed');
}
};

// iconsLine
const iconsLine = document.querySelector('#iconsLine');
const navMenu = document.querySelector('#menu-navbar');

iconsLine.addEventListener('click', function() {
  iconsLine.classList.toggle('iconsLine-active');
  navMenu.classList.toggle('hidden');
});