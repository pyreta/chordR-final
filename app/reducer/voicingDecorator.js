import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  TOGGLE_VOICING_DECORATOR,
} = actionTypes;

export default handleActions(
  {
    [TOGGLE_VOICING_DECORATOR]: (decorator, { payload }) =>
      decorator === payload ? 'identity' : payload
  },
  initialState.voicingDecorator
);
