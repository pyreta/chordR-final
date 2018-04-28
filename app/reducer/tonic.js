import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  CHANGE_KEY,
} = actionTypes;

export default handleActions(
  {
    [CHANGE_KEY]: (state, { payload }) => payload
  },
  initialState.tonic
);
