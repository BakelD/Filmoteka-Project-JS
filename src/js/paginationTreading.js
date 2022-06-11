let totalPages = 25;
let page = 1;
let currentPage = 2;
let paginationMarkup = '';
let previousPage = null;
const paginationEL = document.querySelector('.pagination');
const btnRightEl = document.querySelector('.btn-right');
const btnLeftEl = document.querySelector('.btn-left');
const paginationWrapperEl = document.querySelector('.pagination-wrapper');
// paginationWrapperEl.addEventListener('click', onPaginationWrapperBtnClick);
btnRightEl.addEventListener('click', onPaginationWrapperBtnClick);
btnLeftEl.addEventListener('click', onPaginationWrapperBtnClick);

function lessSevenPagesRender(number, currentPage) {
  for (let i = 1; i <= number; i += 1) {
    if (currentPage === i) {
      paginationMarkup += `<a class="current-page" href="">${i} </a>`;

      continue;
    }
    paginationMarkup += `<a href="">${i} </a>`;
  }
  console.log(paginationMarkup);
  paginationEL.innerHTML = paginationMarkup;
}

function startPagination(number, currentPage) {
  for (let i = 1; i <= 7; i += 1) {
    if (currentPage === i) {
      paginationMarkup += `<a class="current-page" href="">${i} </a>`;
      continue;
    }
    paginationMarkup += `<a href="">${i} </a>`;
  }
  paginationMarkup += `<a href="">...${number}</a>`;
  paginationEL.innerHTML = paginationMarkup;
}

function middlePagination(number, currentPage) {
  paginationMarkup = `<a href="">1</a>...`;
  const start = currentPage - 2;
  const finish = currentPage + 2;
  for (let i = start; i <= finish; i += 1) {
    if (currentPage === i) {
      paginationMarkup += `<a class="current-page" href="">${i} </a>`;
      continue;
    }
    paginationMarkup += `<a href="">${i} </a>`;
  }
  paginationMarkup += `...<a href="">${number}</a>`;
  paginationEL.innerHTML = paginationMarkup;
}

function endPagination(number, currentPage) {
  paginationMarkup = `<a href="">1</a>...`;
  for (let i = number - 6; i <= number; i += 1) {
    if (currentPage === i) {
      paginationMarkup += `<a class="current-page" href="">${i} </a>`;
      continue;
    }
    paginationMarkup += `<a href="">${i} </a>`;
  }

  paginationEL.innerHTML = paginationMarkup;
}

function checkPagination(totalPages, currentPage) {
  paginationEL.innerHTML = '';
  paginationMarkup = '';
  if (totalPages <= 7) {
    lessSevenPagesRender(totalPages, currentPage);
    if (totalPages === 1) {
      btnRightEl.style.display = 'none';
      btnLeftEl.style.display = 'none';
    }
  } else if (currentPage >= totalPages - 6) {
    endPagination(totalPages, currentPage);
  } else if (currentPage <= 7) {
    startPagination(totalPages, currentPage);
  } else {
    middlePagination(totalPages, currentPage);
  }

  previousPage = document.querySelector('.current-page');
}

function onPaginationWrapperBtnClick(event) {
  console.log(currentPage);
  if (event.currentTarget.classList.contains('btn-right')) {
    if (totalPages === currentPage) {
      return;
    }
    currentPage += 1;
    if (previousPage) {
      previousPage.classList.remove('current-page');
    }
    checkPagination(totalPages, currentPage);
    return;
  }

  if (currentPage === 1) {
    return;
  }

  currentPage -= 1;
  if (previousPage) {
    previousPage.classList.remove('current-page');
  }

  checkPagination(totalPages, currentPage);
}

checkPagination(totalPages, currentPage);
