import { MovieApi } from './movieApi';
import trendingMarkUp from './templates/trendingMarkUp.hbs';

const movieApi = new MovieApi();
const galleryEl = document.querySelector('[data="main-gallery"]');

const renderTrendingMovies = async () => {
  try {
    const {
      data: { results },
    } = await movieApi.getTrendingMovies();

    const preparedData = movieApi.getPreparedData(results);
    console.log(preparedData);
    galleryEl.innerHTML = trendingMarkUp(preparedData);
  } catch (err) {
    console.log(err);
  }
};

const renderSearchMovies = async () => {
  try {
    const {
      data: { results },
    } = await movieApi.searchMovie('bond');

    console.log(results);
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
// renderSearchMovies();
// renderMovie();
