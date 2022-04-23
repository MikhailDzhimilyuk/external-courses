const images = document.querySelectorAll('.slider img');
let current = 0;

function slider() {
  for (let i = 0; i < images.length; i += 1) {
    images[i].classList.add('opacity0');
  }

  images[current].classList.remove('opacity0');
}

slider();

document.querySelector('.left').onclick = function () {
  if (current === 0) { current = images.length - 1; } else { current -= 1; }

  setTimeout(slider, 0);
  images[current].classList.add('prev');

  function removePrev() { images[current].classList.remove('prev'); }

  setTimeout(removePrev, 1100);
};

document.querySelector('.right').onclick = function () {
  setTimeout(slider, 0);

  if (current + 1 === images.length) { current = 0; } else { current += 1; }

  images[current].classList.add('next');

  function removeNext() { images[current].classList.remove('next'); }

  setTimeout(removeNext, 1100);
};
