import * as ActionTypes from '../constants/TextBoxActionTypes';

export const addTextBox = textBox => ({
  type: ActionTypes.ADD_TEXT_BOX,
  textBox
});