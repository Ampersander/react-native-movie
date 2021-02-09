import { ToggleSeenMovies } from '../Reducers/seenMoviesReducer';

export default function toggleSeenMovies(dispatch, film) {
  dispatch({
    type: ToggleSeenMovies,
    payload: film
  });
}
