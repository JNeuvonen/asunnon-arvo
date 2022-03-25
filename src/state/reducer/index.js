const reducer = (state, action) => {
  switch (action.type) {
    case 'updatePromoCode':
      return {
        ...state,
        promoCode: action.payload,
      }

    default:
      return { promoCode: null }
  }
}

export default reducer
