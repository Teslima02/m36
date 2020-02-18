/*
 *
 * LanguageProvider actions
 *
 */

import { SHOW_MESSAGE, HIDE_MESSAGE } from './constants';

export function showMessage(options) {
  return {
    type: SHOW_MESSAGE,
    options,
  };
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE
  };
}
