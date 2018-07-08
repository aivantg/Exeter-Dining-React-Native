import types from '../actions/actionTypes'

export const dishes = (state = {}, action) => {
  switch (action.type) {
    case types.SAVE_DISH:
      let dishId = action.dish.name.replace(/\s+/g, '');
      return {...state, [dishId]: action.dish}
    default:
      return state;
  }
}
