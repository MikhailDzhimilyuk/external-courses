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
const freeBooks = [0, 0, 1, 0, 1, 0, 1, 0, 1, 1]; 
const ratings = [5, 5, 4.5, 4, 4.5, 4, 5, 4, 5, 3.5];

for (let i = 0; i < titles.length; i += 1) {
  const d = document.createElement('div');
  d.className = 'container';
  document.querySelector('.list-books').appendChild(d);
  d.id = `container${[i]}`;
  
  function containerClassAdd(arrayElem, classNameAdd) {
    if (arrayElem === 1) { document.querySelector(`#container${[i]}`).classList.add(classNameAdd); }
  } 

  containerClassAdd(mustReadTitles[i], 'must-read-titles');
  containerClassAdd(bestOfList[i], 'best-of-list');
  containerClassAdd(classicNovels[i], 'classic-novels');
  containerClassAdd(nonFiction[i], 'non-fiction');
  containerClassAdd(freeBooks[i], 'free-books');

  if (ratings[i] === Math.min(...ratings)) { document.querySelector(`#container${[i]}`).classList.add('most-recent'); }

  if (ratings[i] === 5) { document.querySelector(`#container${[i]}`).classList.add('most-popular'); }

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

    if (ratings[i] - j >= 1) { document.querySelector(`#rating${[i]}`).appendChild(fullStar); } 
    else if (ratings[i] - j >= 0.5) { document.querySelector(`#rating${[i]}`).appendChild(halfStar); } 
    else if (ratings[i] - j <= 0) { document.querySelector(`#rating${[i]}`).appendChild(emptyStar); }
  }

  function clearFilter(hideElem) { //eslint-disable-line
    document.querySelector(`#container${[i]}`).classList.remove(hideElem);
  }

  function showFilter(className) { //eslint-disable-line
    let hideClass = 'hide-container';

    if (className === 'free-books' || className === 'most-recent' || className === 'most-popular') { clearFilter('hide-container2'); hideClass = 'hide-container2'; } else { clearFilter('hide-container'); }

    if (!document.querySelector(`#container${[i]}`).classList.contains(className)) {
      document.querySelector(`#container${[i]}`).classList.add(hideClass);
    }
  }

  document.querySelector('.btn-filters-mrt').addEventListener('click', () => showFilter('must-read-titles'));
  document.querySelector('.btn-filters-bol').addEventListener('click', () => showFilter('best-of-list'));
  document.querySelector('.btn-filters-cn').addEventListener('click', () => showFilter('classic-novels'));
  document.querySelector('.btn-filters-nf').addEventListener('click', () => showFilter('non-fiction'));
  document.querySelector('.btn-free-books').addEventListener('click', () => showFilter('free-books'));
  document.querySelector('.btn-most-recent').addEventListener('click', () => showFilter('most-recent'));
  document.querySelector('.btn-most-popular').addEventListener('click', () => showFilter('most-popular'));
  document.querySelector('#btn-all-books').addEventListener('click', () => {clearFilter('hide-container'); clearFilter('hide-container2')});
}

let prevClassName1 = 0;
let prevClassName2 = 0;
let prevClassName3 = 0;

function activeButton(generalClassName, className, buttonClassActive) {
  if (prevClassName1 !== 0 ) { document.querySelector(prevClassName1).classList.remove(buttonClassActive); }

  if (prevClassName2 !== 0 ) { document.querySelector(prevClassName2).classList.remove(buttonClassActive); }

  if (prevClassName3 !== 0 ) { document.querySelector(prevClassName3).classList.remove(buttonClassActive); }

  document.querySelector(className).classList.add(buttonClassActive);

  if (generalClassName === "btn-browse") { prevClassName1 = className; }

  if (generalClassName === "btn-left-panel") { prevClassName2 = className; }

  if (generalClassName === "btn-filters") { prevClassName3 = className; }
}

activeButton("btn-browse", ".btn-all-books", "btn-browse-active");
activeButton("btn-left-panel", ".btn-browse0", "btn-left-panel-active");
document.querySelector(".btn-all-books").addEventListener('click', () => { document.querySelector('.btn-filters-active').classList.remove('btn-filters-active'); });


document.querySelector(".btn-all-books").addEventListener('click', () => { activeButton("btn-browse", ".btn-all-books", "btn-browse-active"); });
document.querySelector(".btn-most-recent").addEventListener('click', () => { activeButton("btn-browse", ".btn-most-recent", "btn-browse-active"); });
document.querySelector(".btn-most-popular").addEventListener('click', () => { activeButton("btn-browse", ".btn-most-popular", "btn-browse-active"); });
document.querySelector(".btn-free-books").addEventListener('click', () => { activeButton("btn-browse", ".btn-free-books", "btn-browse-active"); });

document.querySelector(".btn-now-reading").addEventListener('click', () => { activeButton("btn-left-panel", ".btn-now-reading", "btn-left-panel-active"); });
document.querySelector(".btn-browse0").addEventListener('click', () => { activeButton("btn-left-panel", ".btn-browse0", "btn-left-panel-active"); });
document.querySelector(".btn-buy-books").addEventListener('click', () => { activeButton("btn-left-panel", ".btn-buy-books", "btn-left-panel-active"); });
document.querySelector(".btn-favourite-books").addEventListener('click', () => { activeButton("btn-left-panel", ".btn-favourite-books", "btn-left-panel-active"); });
document.querySelector(".btn-wishlist").addEventListener('click', () => { activeButton("btn-left-panel", ".btn-wishlist", "btn-left-panel-active"); });
document.querySelector(".btn-history").addEventListener('click', () => { activeButton("btn-left-panel", ".btn-history", "btn-left-panel-active"); });

document.querySelector(".btn-filters-mrt").addEventListener('click', () => { activeButton("btn-filters", ".btn-filters-mrt", "btn-filters-active"); });
document.querySelector(".btn-filters-bol").addEventListener('click', () => { activeButton("btn-filters", ".btn-filters-bol", "btn-filters-active"); });
document.querySelector(".btn-filters-cn").addEventListener('click', () => { activeButton("btn-filters", ".btn-filters-cn", "btn-filters-active"); });
document.querySelector(".btn-filters-nf").addEventListener('click', () => { activeButton("btn-filters", ".btn-filters-nf", "btn-filters-active"); });
