import { MovieApi } from './movieApi';

const movieApi = new MovieApi();

const renderTrendingMovies = async () => {
  try {
    const {
      data: { results },
    } = await movieApi.getTrendingMovies();

    console.log(movieApi.getGenreNames(results[10]['genre_ids']));
    console.log(results);
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
renderSearchMovies();
renderMovie();
