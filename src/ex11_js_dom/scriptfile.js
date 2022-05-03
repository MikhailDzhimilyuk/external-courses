const titles = [
  'Jewels of Nizam',
  'Cakes & Bakes',
  "Jamie's Kitchen",
  'Inexpensive Family Meals',
  'Paleo Slow Cooking',
  'Cook Like an Italian',
  'Suneeta Vaswani',
  'Jamie Does',
  "Jamie's Italy",
  'Vegetables Cookbook',
];

const authors = [
  'Geeta Devi',
  'Sanjeev Kapoor',
  'Jamie Oliver',
  'Simon Holst',
  'Chrissy Gower',
  'Tobie Puttock',
  'Geeta Devi',
  'Jamie Oliver',
  'Jamie Oliver',
  'Mathhew Biggs',
];

const mustReadTitles = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
const bestOfList = [1, 1, 1, 0, 0, 0, 1, 1, 1, 0];
const classicNovels = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0];
const nonFiction = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
const ratings = [5, 5, 4.5, 4, 4.5, 4, 5, 4, 5, 3.5];

for (let i = 0; i < titles.length; i += 1) {
  const d = document.createElement('div');
  d.className = 'container';
  document.querySelector('.list-books').appendChild(d);
  d.id = `container${[i]}`;

  if (mustReadTitles[i] === 1) { document.querySelector(`#container${[i]}`).classList.add('must-read-titles'); }

  if (bestOfList[i] === 1) { document.querySelector(`#container${[i]}`).classList.add('best-of-list'); }

  if (classicNovels[i] === 1) { document.querySelector(`#container${[i]}`).classList.add('classic-novels'); }

  if (nonFiction[i] === 1) { document.querySelector(`#container${[i]}`).classList.add('non-fiction'); }

  const image = document.createElement('img');
  image.src = `img/books/${titles[i]}.png`;
  document.querySelector(`#container${[i]}`).appendChild(image);

  document.querySelector(`#container${[i]}`).appendChild(document.createElement('br'));
  const title = document.createElement('span');
  title.className = `titles${[i]}`;
  document.querySelector(`#container${[i]}`).appendChild(title);
  document.querySelector(`.titles${[i]}`).innerHTML = titles[i];

  document.querySelector(`#container${[i]}`).appendChild(document.createElement('br'));
  const author = document.createElement('span');
  author.className = `authors${[i]}`;
  document.querySelector(`#container${[i]}`).appendChild(author);
  document.querySelector(`.authors${[i]}`).innerHTML = `by ${authors[i]}`;

  const rating = document.createElement('div');
  rating.className = 'rating';
  document.querySelector(`#container${[i]}`).appendChild(rating);
  rating.id = `rating${[i]}`;

  for (let j = 0; j <= 4; j += 1) {
    const star = document.createElement('span');
    star.className = `star${[i]}${[j]}`;
    document.querySelector(`#rating${[i]}`).appendChild(star);

    const emptyStar = document.createElement('img');
    const fullStar = document.createElement('img');
    const halfStar = document.createElement('img');

    emptyStar.src = 'img/empty star.png';
    fullStar.src = 'img/full star.png';
    halfStar.src = 'img/half star.png';

    if (ratings[i] - j >= 1) { document.querySelector(`#rating${[i]}`).appendChild(fullStar); } else if (ratings[i] - j >= 0.5) { document.querySelector(`#rating${[i]}`).appendChild(halfStar); } else if (ratings[i] - j <= 0) { document.querySelector(`#rating${[i]}`).appendChild(emptyStar); }
  }

  function clearFilter() { //eslint-disable-line
    document.querySelector(`#container${[i]}`).classList.remove('hide-container');
  }

  function hideContainer(className) { //eslint-disable-line
    clearFilter();

    if (!document.querySelector(`#container${[i]}`).classList.contains(className)) {
      document.querySelector(`#container${[i]}`).classList.add('hide-container');
    }
  }

  document.querySelector('.btn-filters-mrt').addEventListener('click', () => hideContainer('must-read-titles'));
  document.querySelector('.btn-filters-bol').addEventListener('click', () => hideContainer('best-of-list'));
  document.querySelector('.btn-filters-cn').addEventListener('click', () => hideContainer('classic-novels'));
  document.querySelector('.btn-filters-nf').addEventListener('click', () => hideContainer('non-fiction'));
  document.querySelector('.list-books').addEventListener('click', clearFilter);
}
