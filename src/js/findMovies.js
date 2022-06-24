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

import fillFiltered from './templates/fillFiltered.hbs';

const movieApi = new MovieApi();
const formEl = document.querySelector('.header__form');
const warningEl = document.querySelector('.header__warn');
const galleryEl = document.querySelector('.gallery__list');
let previousQueue = '';

function removeCurrentFilter() {
  if (document.querySelector('.filter__current')) {
    document
      .querySelector('.filter__current')
      .classList.remove('filter__current');
  }
}

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  removeCurrentFilter();
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
      setTimeout(() => {
        warningEl.classList.add('is-hidden');
      }, 5000);
      Loading.remove();
      return;
    }
    setPagesInfoToLocalStorage(total_pages, page);

    const preparedData = movieApi.getPreparedData(results);

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

    movieApi.temproraryStoreMovies(preparedData);

    galleryEl.innerHTML = trendingAndSearchMarkUp(preparedData);
    checkPagination(getTotalPages(), getCurrentPage());
    setStorageCalledFunction('findMoviesByQuery', query);
  } catch (err) {
    console.log(err);
  }
}

// ***************Next Function************************

const refs = {
  btnNowPlaying: document.querySelector('.btn__now-playing'),
  btnTopRated: document.querySelector('.btn__top-rated'),
  btnUpcoming: document.querySelector('.btn__upcoming'),
};

refs.btnNowPlaying.addEventListener('click', onBtnFilterClick);
refs.btnTopRated.addEventListener('click', onBtnFilterClick);
refs.btnUpcoming.addEventListener('click', onBtnFilterClick);

function onBtnFilterClick(e) {
  const currentPage = 1;
  let query = null;
  if (document.querySelector('.filter__current')) {
    document
      .querySelector('.filter__current')
      .classList.remove('filter__current');
  }

  if (e.target.innerHTML.trim() === 'Now playing') {
    query = 'now_playing';
    refs.btnNowPlaying.classList.add('filter__current');
  } else if (e.target.innerHTML.trim() === 'Top Rated') {
    query = 'top_rated';
    refs.btnTopRated.classList.add('filter__current');
  } else {
    query = e.target.innerHTML.trim().toLowerCase();
    refs.btnUpcoming.classList.add('filter__current');
  }
  findMovieByFilter(query, currentPage);
}

export async function findMovieByFilter(query, currentPage) {
  document.querySelector('.header__form').reset();

  Loading.dots({
    svgColor: '#ff6b08',
  });
  try {
    let {
      data: { results, total_pages },
    } = await movieApi.getMoviesByFilter(query, currentPage);
    // #####Косяк сервера!!!!!!!!!!! 500 страниц нету!!!!
    if (query === 'top_rated') {
      total_pages -= 50;
      setPagesInfoToLocalStorage(total_pages, currentPage);
      const preparedData = movieApi.getPreparedData(results);
      movieApi.temproraryStoreMovies(preparedData);
      galleryEl.innerHTML = fillFiltered(preparedData);
      checkPagination(total_pages, currentPage);
      setStorageCalledFunction(query, query);
      Loading.remove();
      return;
    }

    setPagesInfoToLocalStorage(total_pages, currentPage);
    const preparedData = movieApi.getPreparedData(results);
    movieApi.temproraryStoreMovies(preparedData);

    galleryEl.innerHTML = fillFiltered(preparedData);
    checkPagination(total_pages, currentPage);
    setStorageCalledFunction(query, query);
    Loading.remove();
  } catch (err) {
    Loading.remove();
    console.log(err);
  }
}
