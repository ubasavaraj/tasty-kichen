import {BiMinus} from 'react-icons/bi'
import {IoIosAdd} from 'react-icons/io'

import './index.css'

const Counter = props => {
  const {quantity, onAdd, onMinus, id} = props
  const onClickMinus = () => {
    onMinus(id)
  }
  const onClickAdd = () => {
    onAdd(id)
  }
  return (
    <div className="pagination">
      <button type="button" testid="decrement-count" onClick={onClickMinus}>
        <BiMinus />
      </button>
      <p testid="active-count">{quantity}</p>

      <button type="button" testid="increment-count" onClick={onClickAdd}>
        <IoIosAdd />
      </button>
    </div>
  )
}

export default Counter
