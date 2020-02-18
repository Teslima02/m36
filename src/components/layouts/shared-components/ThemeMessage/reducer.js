/*
 *
 * ThemeMessage reducer
 *
 */

import produce from 'immer';

import { SHOW_MESSAGE, HIDE_MESSAGE } from './constants';

export const initialState = {
  state: null,
  options: {
    anchorOrigin    : {
        vertical    : 'top',
        horizontal  : 'center'
    },
    autoHideDuration: 6000,
    message         : "Hi",
    variant         : null
  }
};

/* eslint-disable default-case, no-param-reassign */
const messageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_MESSAGE:
        draft.state = true
        draft.options = {
          ...state.options,
          ...action.options
        }
        break;

      case HIDE_MESSAGE:
        draft.state = null
        break;
    }
  });

export default messageReducer;
