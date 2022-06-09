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
      ({ id, title, poster_path, genre_ids, release_date }) => {
        return {
          id,
          title,
          poster_path: this.#IMG_BASE_URL + poster_path,
          release_date: release_date.slice(0, 4),
          genre_ids: this.#getGenreNames(genre_ids).slice(0, 4).join(', '),
        };
      }
    );
  }
}
