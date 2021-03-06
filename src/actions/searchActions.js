import * as types from '../constants/actionTypes';

export function saveSearchResults(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_SEARCH_RESULTS,
      settings
    });
  };
}
