import Immutable from 'seamless-immutable';

const initialState = Immutable({
  seenMovies: []
});

function toggleSeenMovies(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case ToggleSeenMovies: {
      const seenMovieIndex = state.seenMovies.findIndex(
        item => item.id === action.payload.id
      );
      if (seenMovieIndex !== -1) {
        // Film already in seen movies list therefore delete them
        nextState = {
          ...state,
          seenMovies: state.seenMovies.filter((item, index) => index !== seenMovieIndex)
        };
      } else {
        // Film not in seen movies therefore add them to favorite
        nextState = {
          ...state,
          seenMovies: [...state.seenMovies, action.payload]
        };
      }
      return nextState || state;
    }
    default:
      return state;
  }
}

export const ToggleSeenMovies = 'TOGGLE_SEEN_MOVIES';

export default toggleSeenMovies;
