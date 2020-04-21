var mainMenu = document.querySelector('.main-menu');
var dropdown = document.querySelector('.main-menu__dropdown');

mainMenu.classList.remove('main-menu--nojs');

dropdown.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (mainMenu.classList.contains('main-menu--closed')) {
    mainMenu.classList.remove('main-menu--closed');
    mainMenu.classList.add('main-menu--opened');
  }else {
    mainMenu.classList.remove('main-menu--opened');
    mainMenu.classList.add('main-menu--closed');
  }
});
