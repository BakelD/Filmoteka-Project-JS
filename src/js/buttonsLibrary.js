import { movieApi } from './library';
import localStorageApi from './storage';
import fillLibraryModalMarkup from './templates/fillLibraryModalMarkup.hbs';
import Notiflix from 'notiflix';
import { renderLibrary } from './library';
import {
  getCurrentPage,
  setPagesInfoToLocalStorage,
  getTotalPages,
} from './paginationUserLibrary';
import './trailer.js';
import { onTrailerBtnClick } from './trailer.js';

const refs = {
  btnWatched: document.querySelector('[data-btn-watched]'),
  btnQueue: document.querySelector('[data-btn-queue]'),

  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  gallery: document.querySelector('.gallery__list'),
  modalContainer: document.querySelector('.modal__container'),
  galleryItemId: document.querySelector('.gallery__item'),
  backdrop: document.querySelector('.backdrop'),
};

const arrInLocalStrg = {
  watched: [],
  queue: [],
};

refs.btnQueue.addEventListener('click', onClickQueueBtn);
refs.btnWatched.addEventListener('click', onClickWathedBtn);

refs.gallery.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', () => {
  document.removeEventListener('keydown', closeByEsc);
});
refs.backdrop.addEventListener('click', onBackdropClick);

let id = null;

function onOpenModal(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }

  document.addEventListener('keydown', closeByEsc);
  toggleModal();
  id = Number(e.target.closest('LI').id);
  localStorage.setItem('idForTrailer', JSON.stringify(id));
  try {
    let data;

    const keyInfo = JSON.parse(localStorage.getItem('keyInfo'));

    if (keyInfo === 'toWatched') {
      data = movieApi.getMovieFromWatchedStorageById(id);
    } else {
      data = movieApi.getMovieFromQueueStorageById(id);
    }

    refs.modalContainer.innerHTML = '';
    refs.modalContainer.insertAdjacentHTML(
      'beforeend',
      fillLibraryModalMarkup(data)
    );

    const links = {
      removeBtnEl: document.querySelector('[data-remove]'),
      moveBtnEl: document.querySelector('[data-move]'),
      btnTrailer: document.querySelector('[data-trailer]'),
    };

    links.btnTrailer.addEventListener('click', onTrailerBtnClick);

    links.removeBtnEl.addEventListener('click', () => {
      if (refs.btnWatched.classList.contains('activeted')) {
        arrInLocalStrg.watched = localStorageApi.load('toWatched');

        removeMovieById(arrInLocalStrg.watched, 'toWatched');
      } else if (refs.btnQueue.classList.contains('activeted')) {
        arrInLocalStrg.queue = localStorageApi.load('toQueue');

        removeMovieById(arrInLocalStrg.queue, 'toQueue');
      }
    });

    if (refs.btnQueue.classList.contains('activeted')) {
      links.moveBtnEl.textContent = 'move to watched';
    }

    links.moveBtnEl.addEventListener('click', () => {
      if (refs.btnWatched.classList.contains('activeted')) {
        arrInLocalStrg.watched = localStorageApi.load('toWatched');
        arrInLocalStrg.queue = localStorageApi.load('toQueue');

        moveMovieByid('toWatched', arrInLocalStrg.watched, 'toQueue');
      } else if (refs.btnQueue.classList.contains('activeted')) {
        arrInLocalStrg.watched = localStorageApi.load('toWatched');
        arrInLocalStrg.queue = localStorageApi.load('toQueue');

        moveMovieByid('toQueue', arrInLocalStrg.queue, 'toWatched');
      }
    });
  } catch (err) {
    console.log(err);
  }
}

function onClickQueueBtn(e) {
  refs.btnWatched.classList.remove('activeted');
  refs.btnWatched.classList.add('deactivated');

  refs.btnQueue.classList.remove('deactivated');
  refs.btnQueue.classList.add('activeted');
}

function onClickWathedBtn(e) {
  refs.btnWatched.classList.remove('deactivated');
  refs.btnWatched.classList.add('activeted');

  refs.btnQueue.classList.remove('activeted');
  refs.btnQueue.classList.add('deactivated');
}

function removeMovieById(arr, key) {
  const index = arr.findIndex(el => el.id === id);

  if (index === -1) {
    Notiflix.Notify.failure(
      'Your movie has already been successfully moved or deleted!'
    );
    return;
  }

  if (index === 10 && index === arr.length - 1) {
    setPagesInfoToLocalStorage(getTotalPages() - 1, 1);
  } else if (index % 10 === 0 && index === arr.length - 1) {
    setPagesInfoToLocalStorage(getTotalPages() - 1, getCurrentPage() - 1);
  }

  arr.splice(index, 1);
  localStorageApi.save(key, arr);
  document.getElementById(id).remove();

  const keyInfo = JSON.parse(localStorage.getItem('keyInfo'));
  renderLibrary(keyInfo, getCurrentPage());

  Notiflix.Notify.success(
    'Your movie has been successfully removed from the list'
  );
  toggleModal();
}

function moveMovieByid(key, arr, keyForMove) {
  console.log(getCurrentPage());
  const index = arr.findIndex(el => el.id === id);

  if (index === -1) {
    Notiflix.Notify.failure(
      'Your movie has already been successfully moved or deleted!'
    );
    return;
  }

  if (index === 10 && index === arr.length - 1) {
    setPagesInfoToLocalStorage(getTotalPages() - 1, 1);
    window.scrollTo(0, 0);
  } else if (index % 10 === 0 && index === arr.length - 1) {
    setPagesInfoToLocalStorage(getTotalPages() - 1, getCurrentPage());
  }

  localStorageApi.save(key, arr);
  const newArr = arr.splice(index, 1);
  const arrForMovie = localStorageApi.load(keyForMove);

  if (!arrForMovie) {
    const obj = [newArr[0]];
    localStorage.setItem(keyForMove, JSON.stringify(obj));
    // document.getElementById(id).remove();

    const keyInfo = JSON.parse(localStorage.getItem('keyInfo'));
    renderLibrary(keyInfo, getCurrentPage());
    Notiflix.Notify.success('Your movie has been successfully moved!');
    toggleModal();
    return;
  }

  if (!arrForMovie.map(el => el.id).includes(newArr[0].id)) {
    arrForMovie.unshift(newArr[0]);
    localStorageApi.save(keyForMove, arrForMovie);
    // document.getElementById(id).remove();

    const keyInfo = JSON.parse(localStorage.getItem('keyInfo'));
    console.log(keyInfo);
    console.log(getCurrentPage());
    renderLibrary(keyInfo, getCurrentPage());
    Notiflix.Notify.success('Your movie has been successfully moved!');
    toggleModal();
  } else {
    const indexUpdatedArr = arrForMovie.findIndex(el => el.id === id);
    arrForMovie.splice(indexUpdatedArr, 1);
    arrForMovie.unshift(newArr[0]);
    localStorageApi.save(keyForMove, arrForMovie);
    // document.getElementById(id).remove();

    const keyInfo = JSON.parse(localStorage.getItem('keyInfo'));

    renderLibrary(keyInfo, getCurrentPage());

    Notiflix.Notify.success('Your movie has been successfully moved!');
    toggleModal();
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
