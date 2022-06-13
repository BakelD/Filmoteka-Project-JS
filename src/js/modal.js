import { MovieApi } from './movieApi';
import fillModalMarkup from './templates/fillModalMarkup.hbs';
import localStorageApi from './storage';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Notiflix from 'notiflix';

const movieApi = new MovieApi();

//? ********* refs - selectors ********* //
const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  gallery: document.querySelector('.gallery__list'),
  modalContainer: document.querySelector('.modal__container'),
  galleryItemId: document.querySelector('.gallery__item'),
  backdrop: document.querySelector('.backdrop'),
};
export const arrInLocalStrg = {
  watched: [],
  queue: [],
};
const toWatchedKey = localStorageApi.load('toWatched');
const toQueueKey = localStorageApi.load('toQueue');
console.log(toWatchedKey);

refs.gallery.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', () => {
  document.removeEventListener('keydown', closeByEsc);
});
refs.backdrop.addEventListener('click', onBackdropClick);


async function onOpenModal(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }

  document.addEventListener('keydown', closeByEsc);
  toggleModal();
  const id = Number(e.target.closest('LI').id);
  Loading.dots({
    svgColor: '#ff6b08',
    });

  try {

    const data = movieApi.getMovieFromStorageById(id);
    Loading.remove();

    refs.modalContainer.innerHTML = '';
    refs.modalContainer.insertAdjacentHTML('beforeend', fillModalMarkup(data));

    const links = {
      btnAddWatch: refs.modal.querySelector('[data-add-watch]'),
      btnAddQueue: refs.modal.querySelector('[data-add-queue]'),
    };

    links.btnAddWatch.addEventListener('click', e => {
      if (!toWatchedKey || toWatchedKey.length === 0) {
        if (!arrInLocalStrg.watched.map(({ id }) => id).includes(data.id)) {
        arrInLocalStrg.watched.splice(0,0,data);
          localStorageApi.save('toWatched', arrInLocalStrg.watched);
          addNotifyWatchedSuccess();
        } else {
          addNotifyWatchedInfo();
      }
      }
      if (!toWatchedKey.map(({ id }) => id).includes(data.id)) {
        toWatchedKey.splice(0,0,data);
        localStorageApi.save('toWatched', toWatchedKey);
        addNotifyWatchedSuccess();
      } else {
        addNotifyWatchedInfo()
      }

    });

    links.btnAddQueue.addEventListener('click', e => {
      if (!toQueueKey || toQueueKey.length === 0) {
        if (!arrInLocalStrg.queue.map(({ id }) => id).includes(data.id)) {
        arrInLocalStrg.queue.splice(0,0,data);
          localStorageApi.save('toQueue', arrInLocalStrg.queue);
          addNotifyQueueSuccess();
        } else {
          addNotifyQueueInfo();
      }
      }
      if (!toQueueKey.map(({ id }) => id).includes(data.id)) {
        toQueueKey.splice(0,0,data);
        localStorageApi.save('toQueue', toQueueKey);
        addNotifyQueueSuccess();
      } else {
        addNotifyQueueInfo()
      }
    });
  } catch (err) {
    console.log(err);
  }
}

function closeByEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }
  toggleModal();
  document.removeEventListener('keydown', closeByEsc);
}
function onBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  toggleModal();
  document.removeEventListener('keydown', closeByEsc);
}
function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function addNotifyWatchedSuccess() {
  Notiflix.Notify.success(
    'This movie has been successfully added to Watched'
  );
}
function addNotifyWatchedInfo() {
  Notiflix.Notify.failure(
    'This movie you have in Watched'
  )
}
function addNotifyQueueSuccess() {
  Notiflix.Notify.success(
    'This movie has been successfully added to Queue'
  );
}
function addNotifyQueueInfo() {
  Notiflix.Notify.failure(
    'This movie you have in Queue'
  )
}


