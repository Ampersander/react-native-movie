import { SetAvatar } from '../Reducers/avatarReducer';

export default function setAvatar(dispatch, avatar) {
  dispatch({
    type: SetAvatar,
    payload: avatar
  });
}
