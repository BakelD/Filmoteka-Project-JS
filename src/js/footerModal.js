const refs ={
    footerCloseBtn: document.querySelector('.team-modal__btn'),
    teamBackdrop: document.querySelector('#team-modal'),
    openModalBtn: document.querySelector('.footer-close-btn'),
    teamModal: document.querySelector('.team-modal')
   }
 
 refs.openModalBtn.addEventListener('click', onOpenTeamModal);
 
 refs.footerCloseBtn.addEventListener('click', onCloseTeamModal)
 
function onOpenTeamModal(){
    refs.teamBackdrop.style.display='block';
}

function onCloseTeamModal(){
    refs.teamBackdrop.style.display='none';
}

window.addEventListener('click', onWindowClick);

function onWindowClick(event){
    if(event.target === refs.teamModal){
        refs.teamBackdrop.style.display='none';
    }
}




