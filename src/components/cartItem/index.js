import {BiMinus} from 'react-icons/bi'
import {IoIosAdd} from 'react-icons/io'

import './index.css'

const CartItem = props => {
  const {cartItem, onMinus, onAdd} = props
  const {imageUrl, name, cost, quantity, id} = cartItem
  console.log(imageUrl)
  const onClickMinus = () => {
    onMinus(id)
  }
  const onClickAdd = () => {
    onAdd(id)
  }

  return (
    <li className="headContainer">
      <div>
        <img src={imageUrl} alt="cart" className="cartImage" />
        <h1>{name}</h1>
      </div>
      <div>
        <div className="pagination">
          <button
            type="button"
            testId="pagination-right-button"
            onClick={onClickMinus}
          >
            <BiMinus />
          </button>
          <p testId="active-page-number">{quantity + 1}</p>

          <button
            type="button"
            testId="pagination-left-button"
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
