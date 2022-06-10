import { MovieApi } from './movieApi';
import fillModalMarkup from './templates/fillModalMarkup.hbs';

const movieApi = new MovieApi();

//? ********* refs - selectors ********* //
const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  gallery: document.querySelector('.gallery__list'),
  modalContainer: document.querySelector('.modal__container'),
  galleryItemId: document.querySelector('.gallery__item'),
};

refs.gallery.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}


async function onOpenModal(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }

  document.addEventListener('keydown', closeByEsc);
  toggleModal();

    const id = e.target.closest('LI').id;

    try {
      const { data } = await movieApi.getMovieInfo(id);
    
        data.genres = data.genres.map(({ name }) => name).join(', ');
        data.poster_path = e.target.closest('IMG').src;

      refs.modalContainer.innerHTML = "";
      refs.modalContainer.insertAdjacentHTML('beforeend', fillModalMarkup(data));
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
