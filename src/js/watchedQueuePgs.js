import fillWatchedPage from './templates/fillWatchedMarkup.hbs';
import fillQueuePage from './templates/fillQueueMarkup.hbs'
import localStorageApi from './storage';

const refs = {
    gallery: document.querySelector('[data="main-gallery"]'),
    btnWatched: document.querySelector('[data-btn-watched]'),
    btnQueue: document.querySelector('[data-btn-queue]'),
}


refs.btnWatched.addEventListener('click', onBtnWatchedClick);
refs.btnQueue.addEventListener('click', onBtnQueueClick);


function onBtnWatchedClick() {
    const data = localStorageApi.load('toWatched');

    refs.gallery.innerHTML = '';
    refs.gallery.insertAdjacentHTML('beforeend', fillWatchedPage(data));
}
function onBtnQueueClick() {
    const data = localStorageApi.load('toQueue');

    refs.gallery.innerHTML = '';
    refs.gallery.insertAdjacentHTML('beforeend', fillQueuePage(data));
}