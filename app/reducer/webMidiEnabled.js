import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  ENABLE_WEB_MIDI,
} = actionTypes;

export default handleActions(
  {
    [ENABLE_WEB_MIDI]: () => true
  },
  initialState.webMidiEnabled
);
