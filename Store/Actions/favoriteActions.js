import { ToggleFavorite } from '../Reducers/favoriteReducer';

export default function toggleFavorite(dispatch, film) {
  dispatch({
    type: ToggleFavorite,
    payload: film
  });
}
