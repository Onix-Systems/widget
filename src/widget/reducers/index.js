import * as ActionTypes from '../constants/TextBoxActionTypes';
import { v4 } from 'node-uuid';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TEXT_BOX:
      return {
        ...state,
        [v4()]: action.textBox
      };

    default:
      return state;
  }
};