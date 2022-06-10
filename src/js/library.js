import { MovieApi } from './movieApi';
import userLibraryMArkUp from './templates/userLibraryMArkUp.hbs';

const movieApi = new MovieApi();
const galleryEl = document.querySelector('[data="main-gallery"]');

const renderLibrary = (key, page) => {
  const movies = movieApi.getMoviesFromStorageForLibrary(key);
  const moviesForRender = movies.slice(0, 21);

  galleryEl.innerHTML = userLibraryMArkUp(moviesForRender);
};

renderLibrary('temproraryStore');
