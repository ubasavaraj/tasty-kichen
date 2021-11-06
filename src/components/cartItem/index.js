import {BiMinus} from 'react-icons/bi'
import {IoIosAdd} from 'react-icons/io'

import './index.css'

const CartItem = props => {
  const {cartItem, onMinus, onAdd} = props
  const {imageUrl, name, cost, quantity, id} = cartItem

  const onClickMinus = () => {
    onMinus(id)
  }

  const onClickAdd = () => {
    onAdd(id)
  }

  return (
    <li testid="cartItem" className="headContainer">
      <div>
        <img src={imageUrl} alt="cart" className="cartImage" />
        <h1>{name}</h1>
      </div>
      <div>
        <div className="pagination">
          <button
            type="button"
            testid="decrement-quantity"
            onClick={onClickMinus}
          >
            <BiMinus />
          </button>
          <p testid="item-quantity">{quantity}</p>

          <button
            type="button"
            testid="increment-quantity"
            onClick={onClickAdd}
          >
            <IoIosAdd />
          </button>
        </div>
      </div>
      <div>
        <p>₹{quantity * cost}</p>
      </div>
    </li>
  )
}

export default CartItem
