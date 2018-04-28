import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';
import initialState from '../store/initialState';

const {
  TOGGLE_SCALES,
  TOGGLE_ROMAN_NUMERALS,
  TOGGLE_NEXT_CHORD,
  TOGGLE_DEVICE_SETUP,
  TOGGLE_SETTINGS,
  CLOSE_SETTINGS,
} = actionTypes;

export default handleActions(
  {
    [TOGGLE_SCALES]: settings => ({
      ...settings,
      showScales: !settings.showScales,
      show: !settings.show
    }),
    [TOGGLE_ROMAN_NUMERALS]: settings => ({
      ...settings,
      showRomanNumerals: !settings.showRomanNumerals
    }),
    [TOGGLE_NEXT_CHORD]: settings => ({
      ...settings,
      showNextChord: !settings.showNextChord
    }),
    [TOGGLE_DEVICE_SETUP]: settings => ({
      ...settings,
      showDeviceSetup: !settings.showDeviceSetup
    }),
    [TOGGLE_SETTINGS]: settings => ({
      ...settings,
      show: !settings.show
    }),
    [CLOSE_SETTINGS]: settings => ({
      ...settings,
      show: false
    }),
  },
  initialState.settings
);
