import { MovieApi } from './movieApi';
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const movieApi = new MovieApi();

export async function onTrailerBtnClick() {
  const id = JSON.parse(localStorage.getItem('idForTrailer'));

  if (!(await getTrailer(id))) {
    Notiflix.Notify.failure('Sorry, do not worry, but trailer not found =)))');
    document.querySelector('.btn--trailer').disabled = true;
    return;
  }

  const modalTrailer = document.querySelector('.modal__trailer');
  modalTrailer.style.display = 'block';

  const btnClose = document.querySelector('[data-trailer-close]');
  btnClose.addEventListener(
    'click',
    () => {
      document.querySelector('.trailer').src = ``;
      modalTrailer.style.display = 'none';
    },
    { once: true }
  );
}

async function getTrailer(id) {
  Loading.dots({
    svgColor: '#ff6b08',
  });
  try {
    const {
      data: { results },
    } = await movieApi.getMovieTrailerById(id);

    if (!results.length) {
      Loading.remove();
      return false;
    }

    const trailer = results.find(el => el.type === 'Trailer');
    const trailerKey = trailer.key;
    const trailerEl = document.querySelector('.trailer');

    trailerEl.src = `https://www.youtube.com/embed/${trailerKey}`;
    Loading.remove();
    return true;
  } catch (err) {
    console.log(err);
  }
}
