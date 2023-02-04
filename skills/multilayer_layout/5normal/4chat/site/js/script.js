const openButton = document.querySelector('.chat-button');
const chat = document.getElementById('chat');

const openButtonClickHandler = () => {
  openButton.style.display = 'none';
  chat.style.display = 'block';
};

const receiveMessage = (ev) => {
  if (ev.data === 'closeChat') {
    chat.style.display = 'none';
    openButton.style.display = 'block';
  }
};

const init = () => {
  openButton.addEventListener('click', openButtonClickHandler);
  window.addEventListener("message", receiveMessage, false);
};

init();
