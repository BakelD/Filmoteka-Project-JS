import { MovieApi } from './movieApi';
import userLibraryMArkUp from './templates/userLibraryMArkUp.hbs';
import './buttonsLibrary.js';
import './paginationUserLibrary.js';
import {
  setPagesInfoToLocalStorage,
  checkPagination,
} from './paginationUserLibrary';
import './watchedQueuePgs';

localStorage.setItem('keyInfo', JSON.stringify('toWatched'));
// toQueue
if (localStorage.getItem('pagesInfo')) {
  setPagesInfoToLocalStorage(1, 1);
}

const previousUserlibrary = document.querySelector('.preview');
// previousUserlibrary.style.display = 'none';

export const movieApi = new MovieApi();
movieApi.storeGenres();
// localStorage.removeItem('temproraryStore');

const galleryEl = document.querySelector('.gallery__list');

export const renderLibrary = (keyLS, currentPage) => {
  if (!localStorage.getItem(keyLS)) {
    previousUserlibrary.style.display = 'block';
    // нету ключа
    return;
  }
  // нету элементов в ключе
  if (JSON.parse(localStorage.getItem(keyLS)).length === 0) {
    previousUserlibrary.style.display = 'block';
    return;
  }
  previousUserlibrary.style.display = 'none';
  console.log(keyLS);
  console.log(JSON.parse(localStorage.getItem('keyInfo')));
  // if (keyLS !== JSON.parse(localStorage.getItem('keyInfo'))) {
  //   currentPage = 1;
  //   console.log('Зашел в магаз');
  // }
  console.log(currentPage);
  let total_items = JSON.parse(localStorage.getItem(keyLS)).length;
  let totalPages = Math.ceil(total_items / 10);

  const moviesArr = getMoviesForUserLibrary(currentPage, total_items, keyLS);

  setPagesInfoToLocalStorage(totalPages, currentPage);

  galleryEl.innerHTML = userLibraryMArkUp(moviesArr);
  checkPagination(totalPages, currentPage);
};

function getMoviesForUserLibrary(currentPage, total_items, keyLS) {
  const arrOfMovieForPage = [];
  let end = Number(currentPage) * 10;
  const start = end - 10;
  if (end > total_items) {
    end = total_items;
  }
  const movies = JSON.parse(localStorage.getItem(keyLS));

  for (let i = start; i < end; i += 1) {
    arrOfMovieForPage.push(movies[i]);
  }
  return arrOfMovieForPage;
}

// *********Проверка что рисовать в начале
if (localStorage.getItem('toWatched')) {
  renderLibrary('toWatched', 1);
}
