import { MovieApi } from './movieApi';
import trendingAndSearchMarkUp from './templates/trendingAndSearchMarkUp.hbs';
import './findMovies.js';
import './modal';
import './paginationTreading';


import {
  setStorageCalledFunction,
  setPagesInfoToLocalStorage,
  checkPagination,
  getTotalPages,
  getCurrentPage,
} from './paginationTreading';

// *****Для первого посещения страницы
if (!localStorage.getItem('pagesInfo')) {
  setPagesInfoToLocalStorage(1, 1);
}

// localStorage.setItem('toQueue', JSON.stringify([]));
// localStorage.setItem('toWatched', JSON.stringify([]));

const movieApi = new MovieApi();
const galleryEl = document.querySelector('[data="main-gallery"]');


const movieApi = new MovieApi();
movieApi.storeGenres();
localStorage.removeItem('temproraryStore');

const galleryEl = document.querySelector('[data="main-gallery"]');

export async function renderTrendingMovies(page) {
  try {
    const {
      data: { results, total_pages },
    } = await movieApi.getTrendingMovies(page);

    setPagesInfoToLocalStorage(total_pages, page);

    const preparedData = movieApi.getPreparedData(results);

    movieApi.temproraryStoreMovies(preparedData);

    galleryEl.innerHTML = trendingAndSearchMarkUp(preparedData);
    checkPagination(getTotalPages(), getCurrentPage());
    setStorageCalledFunction('renderTrendingMovies');
  } catch (err) {
    console.log(err);
  }
}
renderTrendingMovies(1);
