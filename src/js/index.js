import { MovieApi } from './movieApi';
import trendingAndSearchMarkUp from './templates/trendingAndSearchMarkUp.hbs';
import './findMovies.js';
import './paginationTreading';

const movieApi = new MovieApi();
const galleryEl = document.querySelector('[data="main-gallery"]');

localStorage.removeItem('temproraryStore');

const renderTrendingMovies = async () => {
  try {
    const {
      data: { results, total_pages },
    } = await movieApi.getTrendingMovies();
    console.log(total_pages);
    console.log(results);
    const preparedData = movieApi.getPreparedData(results);
    console.log(preparedData);
    movieApi.temproraryStoreMovies(preparedData);
    galleryEl.innerHTML = trendingAndSearchMarkUp(preparedData);
  } catch (err) {
    console.log(err);
  }
};

const renderMovie = async () => {
  try {
    const data = await movieApi.getMovieInfo(507086);

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

movieApi.storeGenres();

renderTrendingMovies();
