import types from './actionTypes'

let actions = {
  saveMenu: (date, menu) => {
    return {
      type: types.SAVE_MENU,
      date,
      menu,
    }
  },
  saveDish: (dish) => {
    return {
      type: types.SAVE_DISH,
      dish
    }
  },
}

export default actions
