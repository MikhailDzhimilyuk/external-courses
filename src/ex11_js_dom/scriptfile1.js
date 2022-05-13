const books = [
{titles: 'Jewels of Nizam', authors: 'Geeta Devi', mustReadTitles: 1, bestOfList: 1, classicNovels: 0, nonFiction: 0, freeBooks: 0, ratings: 5, num: 0,},
{titles: 'Cakes & Bakes', authors: 'Sanjeev Kapoor', mustReadTitles: 1, bestOfList: 1, classicNovels: 0, nonFiction: 1, freeBooks: 0, ratings: 5, num: 1,},
{titles: "Jamie's Kitchen", authors: 'Jamie Oliver', mustReadTitles: 1, bestOfList: 1, classicNovels: 1, nonFiction: 0, freeBooks: 1, ratings: 4.5, num: 2,},
{titles: 'Inexpensive Family Meals', authors: 'Simon Holst', mustReadTitles: 1, bestOfList: 0, classicNovels: 1, nonFiction: 1, freeBooks: 0, ratings: 4, num: 3,},
{titles: 'Paleo Slow Cooking', authors: 'Chrissy Gower', mustReadTitles: 1, bestOfList: 0, classicNovels: 0, nonFiction: 0, freeBooks: 1, ratings: 4.5, num: 4,},
{titles: 'Cook Like an Italian', authors: 'Tobie Puttock', mustReadTitles: 0, bestOfList: 0, classicNovels: 0, nonFiction: 1, freeBooks: 0, ratings: 4, num: 5,},
{titles: 'Suneeta Vaswani', authors: 'Geeta Devi', mustReadTitles: 0, bestOfList: 1, classicNovels: 1, nonFiction: 0, freeBooks: 1, ratings: 5, num: 6,},
{titles: 'Jamie Does', authors: 'Jamie Oliver', mustReadTitles: 0, bestOfList: 1, classicNovels: 1, nonFiction: 1, freeBooks: 0, ratings: 4, num: 7,},
{titles: "Jamie's Italy", authors: 'Jamie Oliver', mustReadTitles: 0, bestOfList: 1, classicNovels: 0, nonFiction: 0, freeBooks: 1, ratings: 5, num: 8,},
{titles: 'Vegetables Cookbook', authors: 'Mathhew Biggs', mustReadTitles: 0, bestOfList: 0, classicNovels: 0, nonFiction: 1, freeBooks: 1, ratings: 3.5, num: 9,},
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
  for (let j = 0; j <= 4; j += 1) {
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

books.forEach((element) => {
  const container = document.createElement('div');
  container.className = 'container';
  container.id = `container${element.num}`;
  container.innerHTML = `<img src="img/books/${element.titles}.png"><br>
  <span>${element.titles}</span><br>
  <span>by ${element.authors}</span>
  <div class="rating" id="rating${element.num}">
    <span class="star${element.num}0"></span>
    <span class="star${element.num}1"></span>
    <span class="star${element.num}2"></span>
    <span class="star${element.num}3"></span>
    <span class="star${element.num}4"></span>
  </div>`
  document.querySelector(".list-books").appendChild(container);
  
  containerClassAdd(element.mustReadTitles, 'must-read-titles', element.num);
  containerClassAdd(element.bestOfList, 'best-of-list', element.num);
  containerClassAdd(element.classicNovels, 'classic-novels', element.num);
  containerClassAdd(element.nonFiction, 'non-fiction', element.num);
  containerClassAdd(element.freeBooks, 'free-books', element.num);

  if (element.ratings === 5) { document.querySelector(`#container${[element.num]}`).classList.add('most-popular'); }

  changeRatingSite(element.num);

  buttonFilters.forEach(elem => document.querySelector(Object.keys(elem)).addEventListener('click', () => showFilter(Object.values(elem), element.num)));
  document.querySelector('#btn-all-books').addEventListener('click', () => {clearFilter('hide-container', element.num); clearFilter('hide-container2', element.num); clearFilter('hide-container3', element.num)});

  function searchFunc(text) {
    if (element.titles !== text && element.authors !== text) {
      document.querySelector(`#container${[element.num]}`).classList.add('hide-container3');
    }

    if (text == '') {
      document.querySelector(`#container${[element.num]}`).classList.remove('hide-container3');
    }
  }

  document.querySelector('.btn-search').addEventListener('click', () => searchFunc(document.querySelector('.search').value));
});

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
    num: books.length,
  };

  const container = document.createElement('div');
  container.className = 'container';
  container.id = `container${books.length - 1}`;
  container.innerHTML = `<img src="img/books/${document.querySelector('.book-cover').files[0].name}"><br>
  <span>${books[books.length - 1].titles}</span><br>
  <span>by ${books[books.length - 1].authors}</span>
  <div class="rating" id="rating${books.length - 1}">
    <span class="star${books.length - 1}0"></span>
    <span class="star${books.length - 1}1"></span>
    <span class="star${books.length - 1}2"></span>
    <span class="star${books.length - 1}3"></span>
    <span class="star${books.length - 1}4"></span>
  </div>`
  document.querySelector(".list-books").appendChild(container);

  changeRatingSite(books.length - 1);

  document.querySelector(`#container${[books.length - 1]}`).classList.add('most-recent');
  containerClassAdd(books[books.length - 1].mustReadTitles, 'must-read-titles', books.length - 1);
  containerClassAdd(books[books.length - 1].bestOfList, 'best-of-list', books.length - 1);
  containerClassAdd(books[books.length - 1].classicNovels, 'classic-novels', books.length - 1);
  containerClassAdd(books[books.length - 1].nonFiction, 'non-fiction', books.length - 1);
  containerClassAdd(books[books.length - 1].freeBooks, 'free-books', books.length - 1);

  if (books[books.length - 1].ratings === 5) { document.querySelector(`#container${[books.length - 1]}`).classList.add('most-popular'); }

  buttonFilters.forEach(elem => document.querySelector(Object.keys(elem)).addEventListener('click', () => showFilter(Object.values(elem), books.length - 1)));
  document.querySelector('#btn-all-books').addEventListener('click', () => {clearFilter('hide-container', books.length - 1); clearFilter('hide-container2', books.length - 1); clearFilter('hide-container3', books.length - 1)});

  document.querySelector(".modal").style.display = "none";
});

