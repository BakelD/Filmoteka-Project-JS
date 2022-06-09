import axios from 'axios';

export class MovieApi {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '7a08eb81e1904340c78ad5cf16c16a84';

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

  getGenreNames(arrIds) {
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
}
