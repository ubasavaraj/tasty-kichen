import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import HeaderContext from './components/context/HeaderContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import RestarentDetails from './components/RestarentDetails'
import Success from './components/success'

import './App.css'

// eslint-disable-next-line
const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class App extends Component {
  state = {
    activeHome: false,
    activeCart: false,
    cartList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    let localData = localStorage.getItem('cartData')
    localData = JSON.parse(localData)
    const list = localData
    console.log(list)
    this.setState({cartList: list})
  }

  onClickHome = () => {
    this.setState({
      activeHome: true,
    })
    this.setState({
      activeCart: false,
    })
  }

  onClickCart = () => {
    this.setState({
      activeCart: true,
    })
    this.setState({
      activeHome: false,
    })
  }

  onAdd = id => {
    this.getData()
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
    const {cartList} = this.state
    localStorage.setItem('cartData', JSON.stringify(cartList))
  }

  onMinus = id => {
    this.getData()
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
      localStorage.setItem('cartData', JSON.stringify(cartList))
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
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
  }

  render() {
    const {activeCart, activeHome} = this.state

    return (
      <HeaderContext.Provider
        value={{
          activeCart,
          activeHome,
          onClickHome: this.onClickHome,
          onClickCart: this.onClickCart,
          onAdd: this.onAdd,
          onMinus: this.onMinus,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/restaurant/:id"
            component={RestarentDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/cart/success" component={Success} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </HeaderContext.Provider>
    )
  }
}

export default App
