const up = document.querySelector('[data-name="up"]');
const circle = document.querySelector('.circle');

document.querySelector('.circle').innerHTML = 'TOCHKA PROJECT'
  .split('')
  .map((e, i) => `<span style="--rot:${i * 22}deg">${e}</span>`)
  .join('');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 370) {
    up.classList.remove('hidden');
  } else {
    up.classList.add('hidden');
  }

  if (window.pageYOffset > 510) {
    circle.classList.remove('hidden');
  } else {
    circle.classList.add('hidden');
  }
});

up.addEventListener('click', () => {
  window.scroll(0, 0);
});
