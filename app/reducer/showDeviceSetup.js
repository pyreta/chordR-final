import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  TOGGLE_DEVICE_SETUP,
} = actionTypes;

export default handleActions(
  {
    [TOGGLE_DEVICE_SETUP]: state => !state,
  },
  initialState.showDeviceSetup
);
