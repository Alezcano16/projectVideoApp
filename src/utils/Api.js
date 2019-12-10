const BASE_API = 'https://yts.lt/api/v2/';
class Api {
  async getSuggestion(id) {
    const query = await fetch(`https://silaba.com/movie_suggestions.json`);
    const {data} = await query.json();
    //console.log(data);
    return data.movies;
  }
  async getMovies() {
    const query = await fetch('https://silaba.com/list_movies.json');
    const {data} = await query.json();
    //console.log(data);
    return data.movies;
  }
}

export default new Api();
