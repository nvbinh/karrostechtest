import axios from "axios";

export const baseUrl = "https://api.themoviedb.org";

export default {
  getConfig: () =>
    axios
      .get(`${baseUrl}/3/configuration`, {
        params: {api_key: process.env.API_KEY}
      })
      .then(res => res.data)
      .catch(error => console.log(error)),
  
  getLatestMovies: () =>
    axios
      .get(`${baseUrl}/3/discover/movie`, {
        params: {
          api_key: process.env.API_KEY,
          primary_release_year: 2017,
          sort_by: "popularity.desc"
        }
      })
      .then(res => res.data)
      .catch(error => console.log(error)),
  
  getGenres: () =>
      axios
        .get(`${baseUrl}/3/genre/movie/list`, {
          params: { api_key: process.env.API_KEY }
        })
        .then(res => res.data.genres)
        .catch(error => console.log(error))
};