import {
  cartsAction
} from './states'

const reducers = (state, action) => {
  switch (action.name) {
    case 'CART':
      return {
        ...state,
        auth: cartsAction(state.carts, action)
      }
    default:
      return state
  }
}

export default reducers
