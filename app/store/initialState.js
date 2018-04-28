import noOpMidiDevice from '../helpers/noOpMidiDevice';

const progression = [
  { key: 0, scale: 'major', mode: 1, chord: 1, notes: { 1: 0, 3: 0, 5: 0, 7: 0 }},
  { key: 0, scale: 'major', mode: 1, chord: 2, notes: { 1: 0, 3: 0, 5: 0, 7: 0 }},
  { key: 0, scale: 'major', mode: 1, chord: 3, notes: { 1: 0, 3: 0, 5: 0, 7: 0 }},
  { key: 0, scale: 'major', mode: 1, chord: 4, notes: { 1: 0, 3: 0, 5: 0, 7: 0 }},
  { key: 0, scale: 'major', mode: 1, chord: 5, notes: { 1: 0, 3: 0, 5: 0, 7: 0 }},
  { key: 0, scale: 'major', mode: 1, chord: 6, notes: { 1: 0, 3: 0, 5: 0, 7: 0 }},
  { key: 0, scale: 'major', mode: 1, chord: 7, notes: { 1: 0, 3: 0, 5: 0, 7: 0 }},
];

export default {
  lastPlayedChord: {},
  webMidiEnabled: false,
  devices: {
    inputDevice: noOpMidiDevice,
    dawListener: noOpMidiDevice,
    outputDevice: noOpMidiDevice
  },
  tonic: 0,
  selectedModeRow: 0,
  chordBody: { 1: 0, 3: 0, 5: 0 },
  modeRowIndex: 0,
  keysPressed: {},
  voicingDecorator: 'rootNote',
  progression,
  modeRows: {
    // major: {1: true},
    major: { 1: true, 6: true },
    harmonicMinor: {},
    // harmonicMinor: {1: true, 5: true},
    melodicMinor: {}
    // melodicMinor: {1: true},
  },
  settings: {
    showRomanNumerals: false,
    showNextChord: true,
    showDeviceSetup: true,
    showScales: false
  },
  autoVoicing: true
};
