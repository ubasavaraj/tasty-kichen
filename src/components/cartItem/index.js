import {BiMinus} from 'react-icons/bi'
import {IoIosAdd} from 'react-icons/io'
import './index.css'

const CartItems = props => {
  const {items, onAdd, onMinus} = props
  const {name, imageUrl, cost, quantity, id} = items

  const onClickMinus = () => {
    onMinus(id)
  }
  const onClickAdd = () => {
    onAdd(id)
  }
  return (
    <li className="list-cart" testid="cartItem">
      <div className="cart-name-img">
        <img src={imageUrl} alt="restaurant-id" className="cart-image" />
        <h1 className="cart-item-name">{name}</h1>
      </div>
      <div className="pagination">
        <button
          type="button"
          testid="decrement-quantity"
          onClick={onClickMinus}
        >
          <BiMinus />
        </button>
        <p testid="item-quantity">{quantity}</p>

        <button type="button" testid="increment-quantity" onClick={onClickAdd}>
          <IoIosAdd />
        </button>
      </div>
      <p className="cost-total">₹ {quantity * cost}</p>
    </li>
  )
}

export default CartItems
