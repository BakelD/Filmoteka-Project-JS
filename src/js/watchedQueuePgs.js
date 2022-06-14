import fillWatchedPage from './templates/fillWatchedMarkup.hbs';
import fillQueuePage from './templates/fillQueueMarkup.hbs';
import localStorageApi from './storage';
import { renderLibrary } from './library';
import {
  getCurrentPage,
  setPagesInfoToLocalStorage,
  getTotalPages,
} from './paginationUserLibrary';

const refs = {
  gallery: document.querySelector('.gallery__list'),
  btnWatched: document.querySelector('[data-btn-watched]'),
  btnQueue: document.querySelector('[data-btn-queue]'),
};

refs.btnWatched.addEventListener('click', onBtnWatchedClick);
refs.btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnWatchedClick() {
  const data = localStorageApi.load('toWatched');

  refs.gallery.innerHTML = '';
  refs.gallery.insertAdjacentHTML('beforeend', fillWatchedPage(data));

  if (JSON.parse(localStorage.getItem('keyInfo')) === 'toQueue') {
    setPagesInfoToLocalStorage(getTotalPages(), 1);
    document.querySelector('.trailer').src = ``;
    document.querySelector('.modal__trailer').style.display = 'none';
  }
  localStorage.setItem('keyInfo', JSON.stringify('toWatched'));
  renderLibrary('toWatched', getCurrentPage());
}
function onBtnQueueClick() {
  const data = localStorageApi.load('toQueue');

  refs.gallery.innerHTML = '';
  refs.gallery.insertAdjacentHTML('beforeend', fillQueuePage(data));

  // ****** localStorage.getItem => localStorageApi.load() //
  // ****** localStorage.setItem => localStorageApi.save() //
  document.querySelector('.trailer').src = ``;
  document.querySelector('.modal__trailer').style.display = 'none';
  if (JSON.parse(localStorage.getItem('keyInfo')) === 'toWatched') {
    setPagesInfoToLocalStorage(getTotalPages(), 1);
  }
  localStorage.setItem('keyInfo', JSON.stringify('toQueue'));
  renderLibrary('toQueue', getCurrentPage());
}
