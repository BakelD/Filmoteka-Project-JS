import { MovieApi } from './movieApi';

const movieApi = new MovieApi();

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Remove item error: ', error.message);
  }
};

export default {
  save,
  load,
  remove,
};

const wathesBtnEl = document.querySelector('.js__btn-watched');
const queueBtnEl = document.querySelector('.js__btn-queue');
const galleryListEl = document.querySelector('.gallery__list');

queueBtnEl.addEventListener('click', onClickQueueBtn);
wathesBtnEl.addEventListener('click', onClickWathedBtn);

function onClickQueueBtn(e) {
  wathesBtnEl.classList.remove('activeted');
  wathesBtnEl.classList.add('deactivated');

  queueBtnEl.classList.remove('deactivated');
  queueBtnEl.classList.add('activeted');

  galleryListEl.addEventListener('click', onOpenModal);

  function onOpenModal() {
    const removeBtnEl = document.querySelector('[data-modal-remove]');
    const moveBtnEl = document.querySelector('[data-modal-move]');

    removeBtnEl.addEventListener('click', onClickRemoveBtn);
    moveBtnEl.addEventListener('click', onClickMoveBtn);

    function onClickRemoveBtn() {
      const temproraryStoreData =
        movieApi.getMoviesFromStorageForLibrary('temproraryStore');
    }

    function onClickMoveBtn() {}
  }
}

function onClickWathedBtn(e) {
  wathesBtnEl.classList.remove('deactivated');
  wathesBtnEl.classList.add('activeted');

  queueBtnEl.classList.remove('activeted');
  queueBtnEl.classList.add('deactivated');

  galleryListEl.addEventListener('click', onOpenModal);

  function onOpenModal() {}
}

const valueLocalStorage =
  movieApi.getMoviesFromStorageForLibrary('temproraryStore');

function removeMovieById(id) {
  valueLocalStorage.find(el => {
    if (el.id === id) {
    }
  });
}
console.log(
  valueLocalStorage.find(el => {
    console.log(el.id);
  })
);

function addFilm(id) {}
