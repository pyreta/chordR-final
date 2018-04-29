import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  REGISTER_KEYBOARD_CHORD,
} = actionTypes;

export default handleActions(
  {
    [REGISTER_KEYBOARD_CHORD]: (state, { payload }) => (payload),
  },
  initialState.heldChord
);
