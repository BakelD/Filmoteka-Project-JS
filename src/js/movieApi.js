import axios from 'axios';
// https://api.themoviedb.org/3/movie/338953/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg?api_key=7a08eb81e1904340c78ad5cf16c16a84
///movie/{movie_id}/images
//338953
//"/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
export class MovieApi {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '7a08eb81e1904340c78ad5cf16c16a84';
  #IMG_BASE_URL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

  constructor() {}

  getTrendingMovies() {
    return axios.get(`${this.#BASE_URL}trending/movie/week`, {
      params: {
        api_key: this.#API_KEY,
        page: 1,
      },
    });
  }

  searchMovie(query) {
    return axios.get(`${this.#BASE_URL}search/movie`, {
      params: {
        api_key: this.#API_KEY,
        page: 1,
        query,
      },
    });
  }

  getMovieInfo(id) {
    return axios.get(`${this.#BASE_URL}movie/${id}`, {
      params: {
        api_key: this.#API_KEY,
      },
    });
  }

  async storeGenres() {
    try {
      const {
        data: { genres },
      } = await axios.get(`${this.#BASE_URL}genre/movie/list`, {
        params: {
          api_key: this.#API_KEY,
          language: 'en-US',
        },
      });

      localStorage.setItem('genres', JSON.stringify(genres));
    } catch (err) {
      console.log(err);
    }
  }

  #getGenreNames(arrIds) {
    return arrIds.map(id => {
      try {
        const data = JSON.parse(localStorage.getItem('genres'));
        const obj = data.find(el => el.id === id);

        return obj.name;
      } catch (err) {
        console.log(err);
      }
    });
  }

  getPreparedData(arrayOfData) {
    return arrayOfData.map(
      ({
        title,
        poster_path,
        genre_ids,
        release_date,
        overview,
        popularity,
        ...rest
      }) => {
        return {
          ...rest,
          popularity: popularity || 0,
          title: title || 'Unknown',
          overview: overview || 'No description for this movie',
          poster_path: this.#IMG_BASE_URL + poster_path,
          release_date: release_date.slice(0, 4) || 'in the futere',
          genre_ids:
            this.#getGenreNames(genre_ids).slice(0, 4).join(', ') ||
            'No genres',
        };
      }
    );
  }

  temproraryStoreMovies(preparedData) {
    localStorage.setItem('temproraryStore', JSON.stringify(preparedData));
  }

  getMovieFromStorageById(id) {
    try {
      const movies = JSON.parse(localStorage.getItem('temproraryStore'));
      const movie = movies.find(el => el.id === id);

      console.log(movie);
    } catch (err) {
      console.log(err);
    }
  }

  getMoviesFromStorageForLibrary(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.log(err);
    }
  }
}
