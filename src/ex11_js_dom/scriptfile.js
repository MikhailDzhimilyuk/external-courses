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
  document.getElementById('left').disabled = true;

  function clearLeft() {
    images[current].classList.remove('prev');
    document.getElementById('left').disabled = false;
  }

  setTimeout(clearLeft, 1100);
};

document.querySelector('.right').onclick = function () {
  setTimeout(slider, 0);

  if (current + 1 === images.length) { current = 0; } else { current += 1; }

  images[current].classList.add('next');
  document.getElementById('right').disabled = true;

  function clearRight() {
    images[current].classList.remove('next');
    document.getElementById('right').disabled = false;
  }

  setTimeout(clearRight, 1100);
};
