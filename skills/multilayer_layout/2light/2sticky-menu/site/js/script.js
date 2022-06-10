window.addEventListener(`scroll`, () => {
  const header = document.querySelector(`.header`);
  if (window.pageYOffset > 0) {
    header.classList.add(`header-sticky`);
  } else {
    header.classList.remove(`header-sticky`);
  }
});
