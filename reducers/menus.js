import types from '../actions/actionTypes'

export const menus = (state = {}, action) => {
  switch (action.type) {
    case types.SAVE_MENU:
      return {...state, [action.date]: action.menu}
    default:
      return state;
  }
}
