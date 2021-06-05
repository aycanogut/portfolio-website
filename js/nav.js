// hamburger toggler click event

// nav list and links
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__item');

// burger toggler and items
const burgerToggler = document.querySelectorAll('.toggler');
const firstChild = burgerToggler[0];
const secondChild = burgerToggler[1];
const thirdChild = burgerToggler[2];

// navbar visible function
const showNav = () => {
  // nav toggle action
  navList.classList.toggle('nav__show');

  // burger items
  firstChild.classList.toggle('toggler-1');
  secondChild.classList.toggle('toggler-2');
  thirdChild.classList.toggle('toggler-3');
}

// add event to all nav links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    removeNav();
  })
})

// reset the styles when a link clicked
const removeNav = () => {
  navList.classList.toggle('nav__show');
  firstChild.classList.toggle('toggler-1');
  secondChild.classList.toggle('toggler-2');
  thirdChild.classList.toggle('toggler-3');
}