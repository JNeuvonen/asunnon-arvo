import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../state/index'

const Dispatchers = () => {
  const dispatch = useDispatch()
  const { updatePromoCode } = bindActionCreators(actionCreators, dispatch)

  return {
    updatePromoCode,
  }
}

export default Dispatchers
