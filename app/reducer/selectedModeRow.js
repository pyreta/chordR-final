import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  SELECT_MODE_ROW,
} = actionTypes;

export default handleActions(
  {
    [SELECT_MODE_ROW]: (state, { payload }) => payload,
  },
  initialState.selectedModeRow
);
