import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
<<<<<<< HEAD
import Footer from '../Footer'
import CartItems from '../cartItem'
import './index.css'

=======

import CartItem from '../cartItem'

import EmptyCart from '../emptyCart'

import './index.css'

const cartList1 = JSON.parse(localStorage.getItem('cartData'))

>>>>>>> 66941f77968daa1b73b993da239db1d0c33f7856
class Cart extends Component {
  state = {order: true, status: 'progress'}

  componentDidMount() {
    this.getData()
  }

  totalAmount = list => {
    let total = 0
    list.forEach(each => {
      total += each.quantity * each.cost
    })

    return total
  }

  placeOrderBtn = () => {
    this.setState({order: false})
  }

  successPage = () => {
    localStorage.clear()

    return (
      <div className="success-page">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634229200/Vector_1_duq9qs.jpg"
          alt="empty cart"
        />
        <h1 className="payment-name">Payment Successful</h1>
        <p className="greet">
          Thank you for ordering Your payment is successfully completed.
        </p>
        <Link to="/">
          <button type="button" className="home-btn">
            Go to Home Page
          </button>
        </Link>
      </div>
    )
  }

  loader = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="Oval" color="orange" height="50" width="50" />
    </div>
  )

  getData = () => {
    this.setState({status: 'success'})
  }

  getEmpty = () => (
    <div className="cart-empty">
      <img
        src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634229306/cooking_1_cubbmw.jpg"
        alt="empty cart"
        className="no-order-img"
      />
      <h1 className="no-order">No Order Yet!</h1>
      <p className="cart-suggest">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/">
        <button type="button" className="order-now-btn">
          Order Now
        </button>
      </Link>
    </div>
  )

  getCartList = () => {
    const {order} = this.state
    let localData = localStorage.getItem('cartData')
    localData = JSON.parse(localData)
    const list = localData

    if (list !== null && list.length !== 0) {
      return (
        <div className="cart-page">
          {order ? (
            <div>
<<<<<<< HEAD
              <div className="show-cart-container">
                <div className="cart-container">
                  <p className="item-cart-title">Item</p>
                  <p className="quantity">Quantity</p>
                  <p className="price-name">price</p>
                </div>
                <ul className="items-unorder-list">
                  {list.map(each => (
                    <CartItems
                      items={each}
                      key={each.id}
                      onAdd={this.onAdd}
                      onMinus={this.onMinus}
                    />
                  ))}
                </ul>
                <hr className="cart-line" />
                <div className="order-summary">
                  <h1 className="order-name">Order Total:</h1>
                  <div className="place-order-cont">
                    <p className="final-amount" testid="total-price">
                      ₹ {this.totalAmount(list)}
                    </p>
                    <button
                      type="button"
                      className="place-order-btn"
                      onClick={this.placeOrderBtn}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
=======
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
>>>>>>> 66941f77968daa1b73b993da239db1d0c33f7856
              </div>
              <Footer />
            </div>
          ) : (
            this.successPage()
          )}
        </div>
      )
    }
    return <div>{this.getEmpty()}</div>
  }

  loadingStatus = () => {
    const {status} = this.state
    switch (status) {
      case 'success':
        return this.getCartList()
      case 'progress':
        return this.loader()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header home="cart" />
        <div>{this.loadingStatus()}</div>
      </div>
    )
  }
}

export default Cart
