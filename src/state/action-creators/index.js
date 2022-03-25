export const updatePromoCode = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'updatePromoCode',
      payload: data,
    })
  }
}
