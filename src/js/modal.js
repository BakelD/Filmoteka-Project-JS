import { MovieApi } from './movieApi';
import fillModalMarkup from './templates/fillModalMarkup.hbs';
import localStorageApi from './storage';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

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
  toWatched: [],
  toQueue: [],
};
const toWatchedKey = localStorageApi.load('toWatched');
const toQueueKey = localStorageApi.load('toQueue');



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

      if (!toWatchedKey) {
        if (!arrInLocalStrg.toWatched.map(({ id }) => id).includes(data.id)) {
        arrInLocalStrg.toWatched.push(data);
        localStorageApi.save('toWatched', arrInLocalStrg.toWatched);
      }
      }
      if (toWatchedKey.length===0) {
        if (!arrInLocalStrg.toWatched.map(({ id }) => id).includes(data.id)) {
        arrInLocalStrg.toWatched.push(data);
        localStorageApi.save('toWatched', arrInLocalStrg.toWatched);
      }
      }
      if (!toWatchedKey.map(({ id }) => id).includes(data.id)) {
        toWatchedKey.push(data);
        localStorageApi.save('toWatched', toWatchedKey)
      }
    });

    links.btnAddQueue.addEventListener('click', e => {
       if (!toQueueKey) {
        if (!arrInLocalStrg.toQueue.map(({ id }) => id).includes(data.id)) {
        arrInLocalStrg.toQueue.push(data);
        localStorageApi.save('toQueue', arrInLocalStrg.toQueue);
      }
       }
      if (toQueueKey.length===0) {
        if (!arrInLocalStrg.toQueue.map(({ id }) => id).includes(data.id)) {
        arrInLocalStrg.toQueue.push(data);
        localStorageApi.save('toQueue', arrInLocalStrg.toQueue);
      }
      }
      if (!toQueueKey.map(({ id }) => id).includes(data.id)) {
        toQueueKey.push(data);
        localStorageApi.save('toQueue', toQueueKey)
      }


    });
  } catch (err) {
    console.log(err);
  }
}

// function checkKeyInLocalStorage(arrFromLclStrg, arrToLclStrg, obj, key) {
//   if (!arrFromLclStrg) {
//         console.log(arrToLclStrg.key);
//         if (!arrToLclStrg.key.map(({ id }) => id).includes(obj.id)) {
//         arrToLclStrg.key.push(obj);
//         localStorageApi.save(key, arrToLclStrg.key);
//       }
//       }

//       if (arrFromLclStrg.length===0) {
//         if (!arrToLclStrg.key.map(({ id }) => id).includes(obj.id)) {
//         arrToLclStrg.key.push(obj);
//         localStorageApi.save(key, arrToLclStrg.key);
//       }
//       }
//       if (!arrFromLclStrg.map(({ id }) => id).includes(obj.id)) {
//         arrFromLclStrg.push(obj);
//         localStorageApi.save('toWatched', arrFromLclStrg)
//       }

//  };











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
