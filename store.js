import {createStore} from 'redux';
import reducer from './src/reducer/videos';

const store = createStore(reducer, {
  MoviesSuggestion: [],
  MoviesCategories: [],
});

export default store;
