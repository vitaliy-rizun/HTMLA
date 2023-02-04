'use strict';

const SLIDE_WIDTH = 960;
const slides = document.querySelector('.slides');
const slideList = document.querySelectorAll('.slide');
const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');

let currentSlide = '1';

const setSlideActive = () => {
  slides.style.transform = `translate3d(${- (currentSlide - 1) * SLIDE_WIDTH}px, 0, 0)`;
};

const buttonPrevClickHandler = () => {
  currentSlide--;
  buttonPrev.toggleAttribute('disabled', currentSlide <= 1);
  buttonNext.removeAttribute('disabled');
  setSlideActive();
};

const buttonNextClickHandler = () => {
  currentSlide++;
  buttonNext.toggleAttribute('disabled', currentSlide >= slideList.length);
  buttonPrev.removeAttribute('disabled');
  setSlideActive();
};

const init = () => {
  buttonPrev.addEventListener('click', buttonPrevClickHandler);
  buttonNext.addEventListener('click', buttonNextClickHandler);
};

init();
