for (let n = 1; n <= 5; n += 1) {
  const image = document.createElement('img');
  image.src = `img/${n}.jpg`;
  document.querySelector('.slider').appendChild(image);
}

const images = document.querySelectorAll('.slider img');
let current = 0;

function slider() {
  for (let i = 0; i < images.length; i += 1) {
    images[i].classList.add('opacity0');
  }

  images[current].classList.remove('opacity0');
}

slider();

function sliderAnimation(direction) {
  if (direction === 'next') {
    if (current + 1 === images.length) { current = 0; } else { current += 1; }
  } else if (current === 0) { current = images.length - 1; } else { current -= 1; }

  slider();
  images[current].classList.add(direction);
  document.getElementById(direction).disabled = true;

  function cleaner() {
    images[current].classList.remove(direction);
    document.getElementById(direction).disabled = false;
  }

  setTimeout(cleaner, 1100);
}

document.querySelector('.right').addEventListener('click', () => sliderAnimation('next'));
document.querySelector('.left').addEventListener('click', () => sliderAnimation('prev'));
