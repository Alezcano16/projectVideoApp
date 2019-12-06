const BASE_API = 'https://yts.am/api/v2/';

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}list_movies.json?movie_id=${id}`);
    const {data} = await query.json();
    //console.log(data);
    return data.movies;
  }
}
// class Api {
//   async getSuggestion(id) {
//     const query = await fetch('https://app.silaba.com/QUOTE/models/v1/');
//     const data = await query.json();
//     //console.log(data);
//     return data;
//   }
// }

export default new Api();
