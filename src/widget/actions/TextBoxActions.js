import * as ActionTypes from '../constants/TextBoxActionTypes';

export const addTextBox = () => ({
  type: ActionTypes.ADD_TEXT_BOX
});

export const updateTextBox = (id, text) => ({
  type: ActionTypes.UPDATE_TEXT_BOX,
  id,
  text
});