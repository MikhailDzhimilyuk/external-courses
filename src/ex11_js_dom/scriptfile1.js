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

function containerClassAdd(arrayElem, classNameAdd, currentElem) {
  if (arrayElem === 1) { document.querySelector(`#container${[currentElem]}`).classList.add(classNameAdd); }
}

function clearFilter(hideElem, currElem) {
  document.querySelector(`#container${[currElem]}`).classList.remove(hideElem);
}

function showFilter(className, currElem) {
  let hideClass = 'hide-container';

  if (className === 'free-books' || className === 'most-recent' || className === 'most-popular') { clearFilter('hide-container2', currElem); hideClass = 'hide-container2'; } else { clearFilter('hide-container', currElem); }

  if (!document.querySelector(`#container${[currElem]}`).classList.contains(className)) {
    document.querySelector(`#container${[currElem]}`).classList.add(hideClass);
  }
}

function createRating(i, j, fullStar, halfStar, emptyStar) {
  if (ratings[i] - j >= 1) { document.querySelector(`.star${[i]}${[j]}`).appendChild(fullStar); }
  else if (ratings[i] - j >= 0.5) { document.querySelector(`.star${[i]}${[j]}`).appendChild(halfStar); }
  else if (ratings[i] - j <= 0) { document.querySelector(`.star${[i]}${[j]}`).appendChild(emptyStar); }
}

function removeRating(currElem) {
  for (let k = 0; k <= 4; k += 1) {
    document.querySelector(`.star${[currElem]}${[k]}`).removeChild(document.querySelector(`.star${[currElem]}${[k]}`).firstChild);
  }
}

function changeRatingSite(i) { 
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

    createRating(i, j, fullStar, halfStar, emptyStar);

    document.querySelector(`.star${[i]}${[j]}`).addEventListener('click', () => {
      ratings[i] = j + 1;
      removeRating(i);
    });

    document.querySelector(`#rating${[i]}`).addEventListener('click', () => {
      createRating(i, j, fullStar, halfStar, emptyStar);
      if (ratings[i] === 5) { document.querySelector(`#container${[i]}`).classList.add('most-popular'); } 
      else { document.querySelector(`#container${[i]}`).classList.remove('most-popular'); }
    });
  }
}

function addTittleAuthor(i) {
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
}

function createContainer(i) {
  const d = document.createElement('div');
  d.className = 'container';
  document.querySelector('.list-books').appendChild(d);
  d.id = `container${[i]}`;
}

for (let i = 0; i < titles.length; i += 1) {
  createContainer(i);

  containerClassAdd(mustReadTitles[i], 'must-read-titles', i);
  containerClassAdd(bestOfList[i], 'best-of-list', i);
  containerClassAdd(classicNovels[i], 'classic-novels', i);
  containerClassAdd(nonFiction[i], 'non-fiction', i);
  containerClassAdd(freeBooks[i], 'free-books', i);

  if (ratings[i] === 5) { document.querySelector(`#container${[i]}`).classList.add('most-popular'); }

  const image = document.createElement('img');
  image.src = `img/books/${titles[i]}.png`;
  document.querySelector(`#container${[i]}`).appendChild(image);

  addTittleAuthor(i);
  changeRatingSite(i);

  document.querySelector('.btn-filters-mrt').addEventListener('click', () => showFilter('must-read-titles', i));
  document.querySelector('.btn-filters-bol').addEventListener('click', () => showFilter('best-of-list', i));
  document.querySelector('.btn-filters-cn').addEventListener('click', () => showFilter('classic-novels', i));
  document.querySelector('.btn-filters-nf').addEventListener('click', () => showFilter('non-fiction', i));
  document.querySelector('.btn-free-books').addEventListener('click', () => showFilter('free-books', i));
  document.querySelector('.btn-most-recent').addEventListener('click', () => showFilter('most-recent', i));
  document.querySelector('.btn-most-popular').addEventListener('click', () => showFilter('most-popular', i));
  document.querySelector('#btn-all-books').addEventListener('click', () => {clearFilter('hide-container', i); clearFilter('hide-container2', i); clearFilter('hide-container3', i)});

  function searchFunc(text) {
    if (titles[i] !== text && authors[i] !== text) {
      document.querySelector(`#container${[i]}`).classList.add('hide-container3');
    }

    if (text == '') {
      document.querySelector(`#container${[i]}`).classList.remove('hide-container3');
    }
  }

  document.querySelector('.btn-search').addEventListener('click', () => searchFunc(document.querySelector('.search').value));

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

document.querySelector(".btn-add").addEventListener('click', () => {
  document.querySelector(".modal").style.display = "block";
});

document.querySelector(".close").addEventListener('click', () => {
  document.querySelector(".modal").style.display = "none";
});

document.querySelector(".accept").addEventListener('click', () => {
  titles[titles.length] = document.querySelector('.inp-tittle').value;
  authors[authors.length] = document.querySelector('.inp-author').value;
  ratings[ratings.length] = 0;
  mustReadTitles[mustReadTitles.length] = 0;
  bestOfList[bestOfList.length] = 0;
  classicNovels[classicNovels.length] = 0;
  nonFiction[nonFiction.length] = 0;
  freeBooks[freeBooks.length] = 0; 

  createContainer(authors.length - 1);

  const image = document.createElement('img');
  image.src = `img/books/${document.querySelector('.book-cover').files[0].name}`;
  document.querySelector(`#container${[authors.length - 1]}`).appendChild(image);

  addTittleAuthor(authors.length - 1);
  changeRatingSite(authors.length - 1);

  document.querySelector(`#container${[authors.length - 1]}`).classList.add('most-recent');
  containerClassAdd(mustReadTitles[titles.length - 1], 'must-read-titles', titles.length - 1);
  containerClassAdd(bestOfList[bestOfList.length - 1], 'best-of-list', bestOfList.length - 1);
  containerClassAdd(classicNovels[classicNovels.length - 1], 'classic-novels', classicNovels.length - 1);
  containerClassAdd(nonFiction[nonFiction.length - 1], 'non-fiction', nonFiction.length - 1);
  containerClassAdd(freeBooks[freeBooks.length - 1], 'free-books', freeBooks.length - 1);

  document.querySelector('.btn-filters-mrt').addEventListener('click', () => showFilter('must-read-titles', authors.length - 1));
  document.querySelector('.btn-filters-bol').addEventListener('click', () => showFilter('best-of-list', authors.length - 1));
  document.querySelector('.btn-filters-cn').addEventListener('click', () => showFilter('classic-novels', authors.length - 1));
  document.querySelector('.btn-filters-nf').addEventListener('click', () => showFilter('non-fiction', authors.length - 1));
  document.querySelector('.btn-free-books').addEventListener('click', () => showFilter('free-books', authors.length - 1));
  document.querySelector('.btn-most-recent').addEventListener('click', () => showFilter('most-recent', authors.length - 1));
  document.querySelector('.btn-most-popular').addEventListener('click', () => showFilter('most-popular', authors.length - 1));
  document.querySelector('#btn-all-books').addEventListener('click', () => {clearFilter('hide-container', authors.length - 1); clearFilter('hide-container2', authors.length - 1); clearFilter('hide-container3', authors.length - 1)});
  document.querySelector(".modal").style.display = "none";
});
