import * as ActionTypes from '../constants/TextBoxActionTypes';
import { v4 } from 'node-uuid';

const initialState = {
  [v4()]: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TEXT_BOX:
      return {
        ...state,
        [v4()]: {
          text: ''
        }
      };

    case ActionTypes.UPDATE_TEXT_BOX:
      return {
        ...state,
        [action.id]: { text: action.text }
      };

    default:
      return state;
  }
};