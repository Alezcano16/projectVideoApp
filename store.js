import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './src/reducer/videos';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// const store = createStore(reducer, {
//   MoviesSuggestion: [],
//   MoviesCategories: [],
// });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
