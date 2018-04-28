import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  TOGGLE_MODE,
} = actionTypes;

export default handleActions(
  {
    [TOGGLE_MODE]: (state, { payload: { scale, mode } }) => ({
      ...state,
      [scale]: {
        ...state[scale],
        [mode]: !state[scale][mode],
      }
    }),
  },
  initialState.modeRows
);
