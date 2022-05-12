const books = [
{titles: 'Jewels of Nizam', authors: 'Geeta Devi', mustReadTitles: 1, bestOfList: 1, classicNovels: 0, nonFiction: 0, freeBooks: 0, ratings: 5,},
{titles: 'Cakes & Bakes', authors: 'Sanjeev Kapoor', mustReadTitles: 1, bestOfList: 1, classicNovels: 0, nonFiction: 1, freeBooks: 0, ratings: 5,},
{titles: "Jamie's Kitchen", authors: 'Jamie Oliver', mustReadTitles: 1, bestOfList: 1, classicNovels: 1, nonFiction: 0, freeBooks: 1, ratings: 4.5,},
{titles: 'Inexpensive Family Meals', authors: 'Simon Holst', mustReadTitles: 1, bestOfList: 0, classicNovels: 1, nonFiction: 1, freeBooks: 0, ratings: 4,},
{titles: 'Paleo Slow Cooking', authors: 'Chrissy Gower', mustReadTitles: 1, bestOfList: 0, classicNovels: 0, nonFiction: 0, freeBooks: 1, ratings: 4.5,},
{titles: 'Cook Like an Italian', authors: 'Tobie Puttock', mustReadTitles: 0, bestOfList: 0, classicNovels: 0, nonFiction: 1, freeBooks: 0, ratings: 4,},
{titles: 'Suneeta Vaswani', authors: 'Geeta Devi', mustReadTitles: 0, bestOfList: 1, classicNovels: 1, nonFiction: 0, freeBooks: 1, ratings: 5,},
{titles: 'Jamie Does', authors: 'Jamie Oliver', mustReadTitles: 0, bestOfList: 1, classicNovels: 1, nonFiction: 1, freeBooks: 0, ratings: 4,},
{titles: "Jamie's Italy", authors: 'Jamie Oliver', mustReadTitles: 0, bestOfList: 1, classicNovels: 0, nonFiction: 0, freeBooks: 1, ratings: 5,},
{titles: 'Vegetables Cookbook', authors: 'Mathhew Biggs', mustReadTitles: 0, bestOfList: 0, classicNovels: 0, nonFiction: 1, freeBooks: 1, ratings: 3.5,},
];

const buttonFilters = [
  {'.btn-filters-mrt': 'must-read-titles'},
  {'.btn-filters-bol': 'best-of-list'},
  {'.btn-filters-cn': 'classic-novels'},
  {'.btn-filters-nf': 'non-fiction'},
  {'.btn-free-books': 'free-books'},
  {'.btn-most-recent': 'most-recent'},
  {'.btn-most-popular': 'most-popular'},
];

function containerClassAdd(objElem, classNameAdd, currentElem) {
  if (objElem === 1) { document.querySelector(`#container${[currentElem]}`).classList.add(classNameAdd); }
}

function clearFilter(hideElem, currElem) {
  document.querySelector(`#container${[currElem]}`).classList.remove(hideElem);
}

function showFilter(className, currElem) {
  let hideClass = 'hide-container';

  if (className == 'free-books' || className == 'most-recent' || className == 'most-popular') { clearFilter('hide-container2', currElem); hideClass = 'hide-container2'; } else { clearFilter('hide-container', currElem); }

  if (!document.querySelector(`#container${[currElem]}`).classList.contains(className)) {
    document.querySelector(`#container${[currElem]}`).classList.add(hideClass);
  }
}

function createRating(i, j, fullStar, halfStar, emptyStar) {
  if (books[i].ratings - j >= 1) { document.querySelector(`.star${[i]}${[j]}`).appendChild(fullStar); }
  else if (books[i].ratings - j >= 0.5) { document.querySelector(`.star${[i]}${[j]}`).appendChild(halfStar); }
  else if (books[i].ratings - j <= 0) { document.querySelector(`.star${[i]}${[j]}`).appendChild(emptyStar); }
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
      books[i].ratings = j + 1;
      removeRating(i);
    });

    document.querySelector(`#rating${[i]}`).addEventListener('click', () => {
      createRating(i, j, fullStar, halfStar, emptyStar);
      if (books[i].ratings === 5) { document.querySelector(`#container${[i]}`).classList.add('most-popular'); } 
      else { document.querySelector(`#container${[i]}`).classList.remove('most-popular'); }
    });
  }
}

function addTittleAuthor(i) {
  document.querySelector(`#container${[i]}`).appendChild(document.createElement('br'));
  const title = document.createElement('span');
  title.className = `titles${[i]}`;
  document.querySelector(`#container${[i]}`).appendChild(title);
  document.querySelector(`.titles${[i]}`).innerHTML = books[i].titles;

  document.querySelector(`#container${[i]}`).appendChild(document.createElement('br'));
  const author = document.createElement('span');
  author.className = `authors${[i]}`;
  document.querySelector(`#container${[i]}`).appendChild(author);
  document.querySelector(`.authors${[i]}`).innerHTML = `by ${books[i].authors}`; 
}

function createContainer(i) {
  const d = document.createElement('div');
  d.className = 'container';
  document.querySelector('.list-books').appendChild(d);
  d.id = `container${[i]}`;
}

for (let i = 0; i < books.length; i += 1) {
  createContainer(i);

  containerClassAdd(books[i].mustReadTitles, 'must-read-titles', i);
  containerClassAdd(books[i].bestOfList, 'best-of-list', i);
  containerClassAdd(books[i].classicNovels, 'classic-novels', i);
  containerClassAdd(books[i].nonFiction, 'non-fiction', i);
  containerClassAdd(books[i].freeBooks, 'free-books', i);

  if (books[i].ratings === 5) { document.querySelector(`#container${[i]}`).classList.add('most-popular'); }

  const image = document.createElement('img');
  image.src = `img/books/${books[i].titles}.png`;
  document.querySelector(`#container${[i]}`).appendChild(image);

  addTittleAuthor(i);
  changeRatingSite(i);

  buttonFilters.forEach(element => document.querySelector(Object.keys(element)).addEventListener('click', () => showFilter(Object.values(element), i)));

  document.querySelector('#btn-all-books').addEventListener('click', () => {clearFilter('hide-container', i); clearFilter('hide-container2', i); clearFilter('hide-container3', i)});

  function searchFunc(text) {
    if (books[i].titles !== text && books[i].authors !== text) {
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
  if (prevClassName1 != 0 ) { document.querySelector(prevClassName1).classList.remove(buttonClassActive); }

  if (prevClassName2 != 0 ) { document.querySelector(prevClassName2).classList.remove(buttonClassActive); }

  if (prevClassName3 != 0 ) { document.querySelector(prevClassName3).classList.remove(buttonClassActive); }

  document.querySelector(className).classList.add(buttonClassActive);

  if (generalClassName == "btn-browse") { prevClassName1 = className; }

  if (generalClassName == "btn-left-panel") { prevClassName2 = className; }

  if (generalClassName == "btn-filters") { prevClassName3 = className; }
}

activeButton("btn-browse", ".btn-all-books", "btn-browse-active");
activeButton("btn-left-panel", ".btn-browse0", "btn-left-panel-active");

document.querySelector(".btn-all-books").addEventListener('click', () => { document.querySelector('.btn-filters-active').classList.remove('btn-filters-active'); });

const activeButtons = [
  {"btn-browse": ".btn-all-books"},
  {"btn-browse": ".btn-most-recent"},
  {"btn-browse": ".btn-most-popular"},
  {"btn-browse": ".btn-free-books"},
  {"btn-left-panel": ".btn-now-reading"},
  {"btn-left-panel": ".btn-browse0"},
  {"btn-left-panel": ".btn-buy-books"},
  {"btn-left-panel": ".btn-favourite-books"},
  {"btn-left-panel": ".btn-wishlist"},
  {"btn-left-panel": ".btn-history"},
  {"btn-filters": ".btn-filters-mrt"},
  {"btn-filters": ".btn-filters-bol"},
  {"btn-filters": ".btn-filters-cn"},
  {"btn-filters": ".btn-filters-nf"},
];

activeButtons.forEach(element => document.querySelector(Object.values(element)).addEventListener('click', () => {
  if (Object.keys(element) == "btn-browse") { activeButton(Object.keys(element), Object.values(element), "btn-browse-active"); }

  if (Object.keys(element) == "btn-left-panel") { activeButton(Object.keys(element), Object.values(element), "btn-left-panel-active"); }

  if (Object.keys(element) == "btn-filters") { activeButton(Object.keys(element), Object.values(element), "btn-filters-active"); }
}));

document.querySelector(".btn-add").addEventListener('click', () => {
  document.querySelector(".modal").style.display = "block";
});

document.querySelector(".close").addEventListener('click', () => {
  document.querySelector(".modal").style.display = "none";
});

document.querySelector(".accept").addEventListener('click', () => {
  books[books.length] = {
    titles: document.querySelector('.inp-tittle').value,
    authors: document.querySelector('.inp-author').value,
    mustReadTitles: 0,
    bestOfList: 0,
    classicNovels: 0,
    nonFiction: 0,
    freeBooks: 0,
    ratings: 0,
  };

  createContainer(books.length - 1);

  const image = document.createElement('img');
  image.src = `img/books/${document.querySelector('.book-cover').files[0].name}`;
  document.querySelector(`#container${[books.length - 1]}`).appendChild(image);

  addTittleAuthor(books.length - 1);
  changeRatingSite(books.length - 1);

  document.querySelector(`#container${[books.length - 1]}`).classList.add('most-recent');
  containerClassAdd(books[books.length - 1].mustReadTitles, 'must-read-titles', books.length - 1);
  containerClassAdd(books[books.length - 1].bestOfList, 'best-of-list', books.length - 1);
  containerClassAdd(books[books.length - 1].classicNovels, 'classic-novels', books.length - 1);
  containerClassAdd(books[books.length - 1].nonFiction, 'non-fiction', books.length - 1);
  containerClassAdd(books[books.length - 1].freeBooks, 'free-books', books.length - 1);

  buttonFilters.forEach(element => document.querySelector(Object.keys(element)).addEventListener('click', () => showFilter(Object.values(element), books.length - 1)));
  document.querySelector('#btn-all-books').addEventListener('click', () => {clearFilter('hide-container', books.length - 1); clearFilter('hide-container2', books.length - 1); clearFilter('hide-container3', books.length - 1)});

  document.querySelector(".modal").style.display = "none";
});
