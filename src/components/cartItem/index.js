import {BiMinus} from 'react-icons/bi'
import {IoIosAdd} from 'react-icons/io'

import './index.css'

const CartItem = props => {
  const {cartItem} = props
  const {imageUrl, name, foodItemsCost, quantity} = cartItem

  return (
    <li className="headContainer">
      <div>
        <img src={imageUrl} alt="cart" className="cartImage" />
        <h1>{name}</h1>
      </div>
      <div>
        <div className="pagination">
          <button type="button" testId="pagination-right-button">
            <BiMinus />
          </button>
          <p testId="active-page-number">{quantity}</p>

          <button type="button" testId="pagination-left-button">
            <IoIosAdd />
          </button>
        </div>
      </div>
      <div>
        <p>₹{quantity * foodItemsCost}</p>
      </div>
    </li>
  )
}

export default CartItem
