import * as ActionTypes from '../constants/SettingsActionTypes';
import { v4 } from 'node-uuid';

const initialState = {
  width: 600
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WIDTH:
      return {
        ...state,
        width: action.width
      };

    default:
      return state;
  }
};