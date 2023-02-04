const closeButton = document.querySelector('.dialog-close');

const closeButtonClickHandler = () => {
  var parentWindow = window.parent;
  parentWindow.postMessage("closeChat", "*");
};

const init = () => {
  closeButton.addEventListener('click', closeButtonClickHandler);
};

init();
