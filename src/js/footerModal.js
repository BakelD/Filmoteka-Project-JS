const refs = {
  openModalBtn: document.querySelector('.team-modal-open-btn'),
  teamBackdrop: document.querySelector('#team-modal'),
  footerCloseBtn: document.querySelector('.team-modal-close-btn'),
  teamModal: document.querySelector('.team-modal'),
  body: document.querySelector('body'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.footerCloseBtn.addEventListener('click', toggleModal);

refs.teamBackdrop.addEventListener('click', onBackdropClick);
refs.footerCloseBtn.addEventListener('click', () => {
  document.removeEventListener('keydown', closeByEsc);
});

function openModal() {
  refs.body.style.overflow = 'hidden';
  document.addEventListener('keydown', closeByEsc);
  toggleModal();
}

function toggleModal() {
  refs.teamBackdrop.classList.toggle('is-hidden');
  // refs.body.style.overflow = 'visible';
}

function closeByEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }
  toggleModal();
  document.removeEventListener('keydown', closeByEsc);
  refs.body.style.overflow = 'visible';
}

function onBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  toggleModal();
  document.removeEventListener('keydown', closeByEsc);
  refs.body.style.overflow = 'visible';
}
