import { renderTrendingMovies } from './index';
import { findMoviesByQuery, findMovieByFilter } from './findMovies';

// *****для динамики SVG
const base = document.querySelector('.header__icon use').href.baseVal;
export const baseUrlSVG = base.slice(0, base.indexOf('#') + 1);
// *********************

export function setPagesInfoToLocalStorage(totalPages, currentPage) {
  localStorage.setItem(
    'pagesInfo',
    JSON.stringify({ totalPages, currentPage })
  );
}
export function getTotalPages() {
  const obj = JSON.parse(localStorage.getItem('pagesInfo'));
  return obj.totalPages;
}
export function getCurrentPage() {
  const obj = JSON.parse(localStorage.getItem('pagesInfo'));
  return obj.currentPage;
}

let paginationMarkup = '';
let previousPage = null;
const pointsMarkUp = `
        <svg class="icon-points">
          <use href="${baseUrlSVG}icon-points"></use>
        </svg>
      `;
const paginationEL = document.querySelector('.pagination');
const btnRightEl = document.querySelector('.btn-right');
const btnLeftEl = document.querySelector('.btn-left');
const paginationWrapperEl = document.querySelector('.pagination-wrapper');
paginationEL.addEventListener('click', onPaginationClick);
btnRightEl.addEventListener('click', onPaginationBtnRightClick);
btnLeftEl.addEventListener('click', onPaginationBtnLeftClick);

const iconLeft = `<svg class="btn-icon">
<use href="${baseUrlSVG}icon-left"></use>
</svg>`;

const iconRight = `<svg class="btn-icon">
<use href="${baseUrlSVG}icon-right"></use>
</svg>
`;

function lessSevenPagesRender(number, currentPage) {
  for (let i = 1; i <= number; i += 1) {
    if (currentPage === i) {
      paginationMarkup += `<a class="current-page" href="">${i}</a>`;

      continue;
    }
    paginationMarkup += `<a href="">${i}</a>`;
  }

  paginationEL.innerHTML = paginationMarkup;
}

function startPagination(number, currentPage) {
  for (let i = 1; i <= 5; i += 1) {
    if (currentPage === i) {
      paginationMarkup += `<a class="current-page" href="">${i}</a>`;
      continue;
    }
    paginationMarkup += `<a href="">${i}</a>`;
  }

  paginationMarkup += pointsMarkUp;
  paginationMarkup += `<a class="start-end-el" href="">${number}</a>`;
  paginationEL.innerHTML = paginationMarkup;
}

function middlePagination(number, currentPage) {
  paginationMarkup = `<a class="start-end-el" href="">1</a>`;
  paginationMarkup += pointsMarkUp;

  const start = currentPage - 2;
  const finish = currentPage + 2;
  for (let i = start; i <= finish; i += 1) {
    if (currentPage === i) {
      paginationMarkup += `<a class="current-page" href="">${i}</a>`;
      continue;
    }
    paginationMarkup += `<a href="">${i}</a>`;
  }

  paginationMarkup += pointsMarkUp;
  paginationMarkup += `<a class="start-end-el" href="">${number}</a>`;
  paginationEL.innerHTML = paginationMarkup;
}

function endPagination(number, currentPage) {
  paginationMarkup = `<a class="start-end-el" href="">1</a>`;
  paginationMarkup += pointsMarkUp;
  for (let i = number - 4; i <= number; i += 1) {
    if (currentPage === i) {
      paginationMarkup += `<a class="current-page" href="">${i}</a>`;
      continue;
    }
    paginationMarkup += `<a href="">${i}</a>`;
  }

  paginationEL.innerHTML = paginationMarkup;
}

function checkBtnAvailability(totalPages, currentPage) {
  if (currentPage === 1) {
    btnLeftEl.disabled = true;
    btnLeftEl.innerHTML = '';

    btnRightEl.disabled = false;
    btnRightEl.innerHTML = iconRight;
    return;
  }
  if (currentPage === totalPages) {
    btnRightEl.disabled = true;
    btnRightEl.innerHTML = '';

    btnLeftEl.disabled = false;
    btnLeftEl.innerHTML = iconLeft;
    return;
  }

  btnLeftEl.disabled = false;
  btnRightEl.disabled = false;

  btnRightEl.innerHTML = iconRight;
  btnLeftEl.innerHTML = iconLeft;
}

export function checkPagination(totalPages, currentPage) {
  paginationEL.innerHTML = '';
  paginationMarkup = '';
  checkBtnAvailability(totalPages, currentPage);
  if (totalPages <= 5) {
    lessSevenPagesRender(totalPages, currentPage);
    if (totalPages === 1) {
      btnRightEl.style.display = 'none';
      btnLeftEl.style.display = 'none';
    }
  } else if (currentPage >= totalPages - 4) {
    endPagination(totalPages, currentPage);
  } else if (currentPage <= 5) {
    startPagination(totalPages, currentPage);
  } else {
    middlePagination(totalPages, currentPage);
  }

  previousPage = document.querySelector('.current-page');
}

function onPaginationBtnRightClick(event) {
  let currentPage = getCurrentPage();
  const totalPages = getTotalPages();

  if (totalPages === currentPage) {
    return;
  }
  currentPage += 1;

  if (previousPage) {
    previousPage.classList.remove('current-page');
  }
  setPagesInfoToLocalStorage(totalPages, currentPage);
  checkAndCallFunction(currentPage);
  checkPagination(totalPages, currentPage);
}

function onPaginationBtnLeftClick(event) {
  let currentPage = getCurrentPage();
  const totalPages = getTotalPages();
  if (currentPage === 1) {
    return;
  }

  currentPage -= 1;
  if (previousPage) {
    previousPage.classList.remove('current-page');
  }
  setPagesInfoToLocalStorage(totalPages, currentPage);
  checkAndCallFunction(currentPage);
  checkPagination(totalPages, currentPage);
}

function pointsPlus() {
  const totalPages = getTotalPages();
  if (getCurrentPage() + 5 >= totalPages) {
    const currentPage = totalPages;
    setPagesInfoToLocalStorage(currentPage, currentPage);
    checkAndCallFunction(currentPage);

    return;
  }
  const currentPage = getCurrentPage() + 5;
  setPagesInfoToLocalStorage(totalPages, currentPage);
  checkAndCallFunction(currentPage);
}
function pointsMinus() {
  if (getCurrentPage() - 5 <= 0) {
    const currentPage = 1;
    setPagesInfoToLocalStorage(getTotalPages(), currentPage);
    checkAndCallFunction(currentPage);

    return;
  }

  const totalPages = getTotalPages();
  const currentPage = getCurrentPage() - 5;
  setPagesInfoToLocalStorage(totalPages, currentPage);
  checkAndCallFunction(currentPage);
}

function onPaginationClick(event) {
  event.preventDefault();
  if (event.target.nodeName === 'svg') {
    if (Number(event.target.previousElementSibling.textContent) === 1) {
      pointsMinus();
    } else {
      pointsPlus();
    }
    return;
  }

  if (event.target.nodeName !== 'A') {
    return;
  }

  const totalPages = getTotalPages();
  const currentPage = Number(event.target.textContent.trim());
  setPagesInfoToLocalStorage(totalPages, currentPage);
  checkAndCallFunction(currentPage);
}

export function setStorageCalledFunction(functionName, searchingQuery) {
  if (functionName === 'renderTrendingMovies') {
    localStorage.setItem('calledFunction', JSON.stringify({ functionName }));
    return;
  }
  if (functionName === 'findMoviesByQuery') {
    const obj = { functionName, searchingQuery };
    localStorage.setItem('calledFunction', JSON.stringify(obj));
    return;
  }
  if (functionName === 'now_playing') {
    localStorage.setItem('calledFunction', JSON.stringify({ functionName }));
    return;
  }
  if (functionName === 'top_rated') {
    localStorage.setItem('calledFunction', JSON.stringify({ functionName }));
    return;
  }
  if (functionName === 'upcoming') {
    localStorage.setItem('calledFunction', JSON.stringify({ functionName }));
    return;
  }
}

function getStorageCalledFunction() {
  return JSON.parse(localStorage.getItem('calledFunction'));
}

function checkAndCallFunction(currentPage) {
  const obj = getStorageCalledFunction();
  if (obj.functionName === 'findMoviesByQuery') {
    findMoviesByQuery(obj.searchingQuery, currentPage);
    window.scrollTo(0, 0);
    return;
  }
  if (obj.functionName === 'renderTrendingMovies') {
    renderTrendingMovies(currentPage);
    window.scrollTo(0, 0);
    return;
  }
  if (obj.functionName === 'now_playing') {
    findMovieByFilter(obj.functionName, currentPage);
    window.scrollTo(0, 0);
    return;
  }
  if (obj.functionName === 'top_rated') {
    findMovieByFilter(obj.functionName, currentPage);
    window.scrollTo(0, 0);
    return;
  }
  if (obj.functionName === 'upcoming') {
    findMovieByFilter(obj.functionName, currentPage);
    window.scrollTo(0, 0);
    return;
  }
}
