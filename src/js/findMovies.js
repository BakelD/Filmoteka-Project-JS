import { MovieApi } from './movieApi';
import trendingAndSearchMarkUp from './templates/trendingAndSearchMarkUp.hbs';

const movieApi = new MovieApi();
const formEl = document.querySelector('.header__form');
const warningEl = document.querySelector('.header__warn');
const galleryEl = document.querySelector('[data="main-gallery"]');

let previousQueue = '';

formEl.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.elements['input-search'].value.trim();

  if (!query || previousQueue === query) {
    return;
  }

  warningEl.classList.add('is-hidden');

  try {
    const {
      data: { results, total_pages },
    } = await movieApi.searchMovie(query);

    if (!total_pages) {
      warningEl.classList.remove('is-hidden');
      return;
    }

    const preparedData = movieApi.getPreparedData(results);
    console.log(preparedData);
    movieApi.temproraryStoreMovies(preparedData);
    galleryEl.innerHTML = trendingAndSearchMarkUp(preparedData);

    previousQueue = query;
  } catch (err) {
    console.log(err);
  }
});

movieApi.getMovieFromStorageById(338953);
