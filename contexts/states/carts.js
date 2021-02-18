export const cartsState = {
  session: null,  
  total: 0,
  totalQty: 0,
  weight: 0,
  items: [
    {
      id: null,
      sku_id: null,
      qty: 0,
      price: 0,
      subtotal: 0,
      weight: 0
    }
  ]
}

export const cartsAction = (state, action) => {
  switch (action.type) {
    case 'APPEND':
      return {
        ...state,
        ...action.payload
      }
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, ...action.payload]
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items?.map(item => item.id !== action.payload)
      }
    case 'CLEAR':
      return {
        ...state,
        session: null,
        total: 0,
        totalQty: 0,
        weight: 0,
        items: []
      }
    default:
      return state
  }
}