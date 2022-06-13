 const refs = {
   openModalBtn: document.querySelector('.team-modal-open-btn'),
   teamBackdrop: document.querySelector('#team-modal'),
   footerCloseBtn: document.querySelector('.team-modal-close-btn'),
   teamModal: document.querySelector('.team-modal'),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.footerCloseBtn.addEventListener("click", toggleModal);

  refs.teamBackdrop.addEventListener('click', onBackdropClick);
 
  refs.footerCloseBtn.addEventListener('click', () => {
    document.removeEventListener('keydown', closeByEsc);
  });

  function toggleModal() {
    refs.teamBackdrop.classList.toggle("is-hidden");
  }

  function openModal(){
    document.addEventListener('keydown', closeByEsc);
  toggleModal(); 
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

