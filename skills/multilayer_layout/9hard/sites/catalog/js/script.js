'use strict';

const openCatalogButton = document.querySelector('.button-catalog');
const closeCatalogButton = document.querySelector('.button-catalog-close');
const catalog = document.querySelector('.catalog');

const openCatalogButtonClickHandler = () => {
  catalog.classList.add('catalog-open');
};

const closeCatalogButtonClickHandler = () => {
  catalog.classList.remove('catalog-open');
};

const init = () => {
  openCatalogButton.addEventListener('click', openCatalogButtonClickHandler);
  closeCatalogButton.addEventListener('click', closeCatalogButtonClickHandler);
};

init();
