import Counter from '../Counter'
import './index.css'

const CartItems = props => {
  const {items, onAdd, onMinus} = props
  const {name, imageUrl, cost, quantity, id} = items
  return (
    <li className="list-cart" testid="cartItem">
      <div className="cart-name-img">
        <img src={imageUrl} alt="restaurant-id" className="cart-image" />
        <h1 className="cart-item-name">{name}</h1>
      </div>
      <Counter quantity={quantity} onAdd={onAdd} onMinus={onMinus} id={id} />
      <p className="cost-total">₹ {quantity * cost}</p>
    </li>
  )
}

export default CartItems
