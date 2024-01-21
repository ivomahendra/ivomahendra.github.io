// Toggle class active
const navbarNav = document.querySelector('.div-navbar');

// ketika hamburger menu di klik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik diluar side bar utk menghilangkan hamburger
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function (e){
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});