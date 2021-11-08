import Counter from '../Counter'
import './index.css'

<<<<<<< HEAD
const CartItems = props => {
  const {items, onAdd, onMinus} = props
  const {name, imageUrl, cost, quantity, id} = items
  return (
    <li className="list-cart" testid="cartItem">
      <div className="cart-name-img">
        <img src={imageUrl} alt="restaurant-id" className="cart-image" />
        <h1 className="cart-item-name">{name}</h1>
=======
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
>>>>>>> 66941f77968daa1b73b993da239db1d0c33f7856
      </div>
      <Counter quantity={quantity} onAdd={onAdd} onMinus={onMinus} id={id} />
      <p className="cost-total">₹ {quantity * cost}</p>
    </li>
  )
}

export default CartItems
