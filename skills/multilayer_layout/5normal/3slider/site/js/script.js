'use strict';

const SLIDE_WIDTH = 960;

const navItems = document.querySelectorAll('.slider-navigation-link');
const slides = document.querySelector('.slides');
const slideList = document.querySelectorAll('.slide');
const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');

let currentSlide = '1';

const setSlideActive = () => {
  slides.style.transform = `translate3d(${- (currentSlide - 1) * SLIDE_WIDTH}px, 0, 0)`;
};

const setActiveNavItem = () => {
  navItems.forEach((item) => {
    item.classList.toggle('active', item.getAttribute('href') === '#' + 'slide-' + currentSlide);
  })
};

const setActiveButtons = () => {
  buttonPrev.toggleAttribute('disabled', currentSlide <= 1);

  buttonNext.toggleAttribute('disabled', currentSlide >= slideList.length);
};

const navItemClickHandler = (evt) => {
  evt.preventDefault();
  const item = evt.target;

  const anchor = item.getAttribute('href');
  if (!anchor) {
    return;
  }

  currentSlide = anchor.substring(7);

  setSlideActive();
  setActiveButtons();
  setActiveNavItem();
};

const buttonPrevClickHandler = () => {
  currentSlide--;

  setSlideActive();
  setActiveButtons();
  setActiveNavItem();
};

const buttonNextClickHandler = () => {
  currentSlide++;

  setSlideActive();
  setActiveButtons();
  setActiveNavItem();
};

const init = () => {
  navItems.forEach((item) => {
    item.addEventListener('click', navItemClickHandler);
  });

  buttonPrev.addEventListener('click', buttonPrevClickHandler);

  buttonNext.addEventListener('click', buttonNextClickHandler);
};

init();
