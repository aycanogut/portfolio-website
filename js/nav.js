// hamburger toggler click event
const showNav = () => {
  // nav toggle action
  const navList = document.querySelector('.nav__list');
  navList.classList.toggle('nav__show');

  // burger toggler animation
  const burgerToggler = document.querySelectorAll('.toggler');
  const firstChild = burgerToggler[0];
  const secondChild = burgerToggler[1];
  const thirdChild = burgerToggler[2];

  // burger items
  firstChild.classList.toggle('toggler-1');
  secondChild.classList.toggle('toggler-2');
  thirdChild.classList.toggle('toggler-3');
}