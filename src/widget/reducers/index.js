import { combineReducers } from 'redux';
import textBoxes from './textBoxes';
import settings from './settings';

export default combineReducers({
  textBoxes,
  settings
});