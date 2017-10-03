import '../css/main.css';

const els = document.querySelectorAll('section');
const len = els.length;
const hashes = toArray(els).map(el => el.getAttribute('id'));

function toArray(list) {
  const arr = [];
  const len = list.length;

  for (let i = 0; i < len; i += 1) {
    arr.push(list[i]);
  }

  return arr;
}

function render() {
  const index = Math.floor(len * Math.random());

  window.location.hash = hashes[index];
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.className = 'js';

  if (!window.location.hash) {
    render();
  }
});

window.addEventListener('keyup', e => {
  // Space bar
  if (e.keyCode === 32) {
    render();
  }
});
