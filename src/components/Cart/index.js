import {Link} from 'react-router-dom'
import Header from '../Header'

import CartItem from '../cartItem'
import EmptyCart from '../emptyCart'

import './index.css'

const Cart = () => {
  const cartList = JSON.parse(localStorage.getItem('my_cart'))
  const header = JSON.parse(localStorage.getItem('my_cart_header'))
  let total = 0
  cartList.forEach(eachCartItem => {
    total += eachCartItem.foodItemsCost * eachCartItem.quantity
  })
  console.log(total)
  return (
    <>
      <Header />

      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <div>
            <ul className="headContainer">
              {header.map(product => (
                <li>{product}</li>
              ))}
            </ul>
          </div>
          <ul>
            {cartList.map(product => (
              <CartItem key={product.id} cartItem={product} />
            ))}
          </ul>
          <div className="cart-summary-container">
            <h1>Order Total</h1>
            <h1 className="amount">Rs {total}/-</h1>
          </div>
          <Link to="/cart/success">
            <div className="button1">
              <button type="button">Place Order</button>
            </div>
          </Link>
        </div>
      )}
    </>
  )
}

export default Cart
