import { MovieApi } from './movieApi';
import trendingAndSearchMarkUp from './templates/trendingAndSearchMarkUp.hbs';

import {
  setStorageCalledFunction,
  setPagesInfoToLocalStorage,
  checkPagination,
  getTotalPages,
  getCurrentPage,
} from './paginationTreading';

import { Loading } from 'notiflix/build/notiflix-loading-aio';

const movieApi = new MovieApi();
const formEl = document.querySelector('.header__form');
const warningEl = document.querySelector('.header__warn');
const galleryEl = document.querySelector('[data="main-gallery"]');
let previousQueue = '';

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const page = 1;
  const query = e.target.elements['input-search'].value.trim();

  if (!query || previousQueue === query) {
    return;
  }

  warningEl.classList.add('is-hidden');
  Loading.dots({
    svgColor: '#ff6b08',
  });

  try {
    const {
      data: { results, total_pages },
    } = await movieApi.searchMovie(query, page);

    if (!total_pages) {
      warningEl.classList.remove('is-hidden');
      Loading.remove();
      return;
    }
    setPagesInfoToLocalStorage(total_pages, page);

    const preparedData = movieApi.getPreparedData(results);
    console.log(preparedData);
    movieApi.temproraryStoreMovies(preparedData);

    galleryEl.innerHTML = trendingAndSearchMarkUp(preparedData);
    checkPagination(getTotalPages(), getCurrentPage());
    setStorageCalledFunction('findMoviesByQuery', query);
    previousQueue = query;

    Loading.remove();
  } catch (err) {
    console.log(err);
  }
});

export async function findMoviesByQuery(query, currentPage) {
  try {
    const {
      data: { results, total_pages },
    } = await movieApi.searchMovie(query, currentPage);

    setPagesInfoToLocalStorage(total_pages, currentPage);

    const preparedData = movieApi.getPreparedData(results);
    console.log(preparedData);

    movieApi.temproraryStoreMovies(preparedData);

    galleryEl.innerHTML = trendingAndSearchMarkUp(preparedData);
    checkPagination(getTotalPages(), getCurrentPage());
    setStorageCalledFunction('findMoviesByQuery', query);
  } catch (err) {
    console.log(err);
  }
}
