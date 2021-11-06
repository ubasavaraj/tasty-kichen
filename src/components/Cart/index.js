import {Link} from 'react-router-dom'
import {Component} from 'react'

import Header from '../Header'

import CartItem from '../cartItem'

import EmptyCart from '../emptyCart'

import './index.css'

const cartList1 = JSON.parse(localStorage.getItem('cartData'))

class Cart extends Component {
  state = {
    cartList: cartList1,
  }

  onAdd = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  onMinus = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({cartList: updatedCartList})
  }

  render() {
    const {cartList} = this.state
    let total = 0
    if (cartList.length > 0) {
      cartList.forEach(eachCartItem => {
        total += eachCartItem.cost * eachCartItem.quantity
      })
    }

    console.log(cartList)
    return (
      <>
        <Header />

        {cartList.length === 0 ? (
          <EmptyCart />
        ) : (
          <div>
            <div>
              <ul className="headContainer">
                <li>Items</li>
                <li>Quantity</li>
                <li>Price</li>
              </ul>
            </div>
            <ul>
              {cartList.map(product => (
                <CartItem
                  key={product.id}
                  cartItem={product}
                  onMinus={this.onMinus}
                  onAdd={this.onAdd}
                />
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
}

export default Cart
