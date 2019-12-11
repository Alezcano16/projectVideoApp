function videos(state = {}, action) {
  switch (action.type) {
    case 'SET_MOVIE_CATEGORIES': {
      return {...state, ...action.payload};
    }
    case 'SET_SUGGESTION_LIST': {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default videos;
