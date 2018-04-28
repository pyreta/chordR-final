import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  PLAY_CHORD,
} = actionTypes;

export default handleActions(
  {
    [PLAY_CHORD]: (state, { payload }) => payload
  },
  initialState.lastPlayedChord
);
