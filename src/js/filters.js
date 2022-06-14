import { MovieApi } from "./movieApi";
import fillFiltered from './templates/fillFiltered.hbs'
import {
  setStorageCalledFunction,
  setPagesInfoToLocalStorage,
  checkPagination,
  getTotalPages,
  getCurrentPage,
} from './paginationTreading';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Notiflix from "notiflix";

const movieApi = new MovieApi();

const refs = {
    filterButtonsList: document.querySelector('.filter__buttons'),
  
    btnNowPlaying: document.querySelector('.btn__now-playing'),
    btnTopRated: document.querySelector('.btn__top-rated'),
    btnUpcoming: document.querySelector('.btn__upcoming'),
    gallery: document.querySelector('.gallery__list'),

    header: document.querySelector('header'),
};

refs.btnNowPlaying.addEventListener('click', onBtnFilterClick);
refs.btnTopRated.addEventListener('click', onBtnFilterClick);
refs.btnUpcoming.addEventListener('click', onBtnFilterClick);


async function onBtnFilterClick(e) {

    if (e.target.innerHTML.trim() === 'Now playing') {
        movieApi.query = 'now_playing';
    } else if (e.target.innerHTML.trim() === 'Top Rated') {
        movieApi.query = 'top_rated';
    } else {
        movieApi.query = e.target.innerHTML.trim().toLowerCase();
    }
    Loading.dots({
    svgColor: '#ff6b08',
    });
    try {
        const {
        data: { results, total_pages },
        } = await movieApi.getMoviesByFilter();
        
    const preparedData = movieApi.getPreparedData(results);
        console.log(preparedData);
        console.log(total_pages)

    movieApi.temproraryStoreMovies(preparedData);

    refs.gallery.innerHTML = fillFiltered(preparedData);
    checkPagination(getTotalPages(), getCurrentPage());
    Loading.remove();
    }
    catch (err) { console.log(err); }
    

}



// ****** clear the filters buttons at library html ******//
if (refs.header.classList.contains('library')) {
    refs.filterButtonsList.classList.add('visually-hidden');
}