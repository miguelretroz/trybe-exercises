const socket = window.io();

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

socket.emit('joinRoom', { username, room });

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = inputMessage.value;
  socket.emit('roomClientMessage', { room, message });
  inputMessage.value = '';
  return false;
});

const createMessage = (message) => {
  const messageUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messageUl.appendChild(li);
};

socket.on('serverMessage', (message) => createMessage(message));
