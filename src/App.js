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

  render() {
    const {activeCart, activeHome} = this.state
    return (
      <HeaderContext.Provider
        value={{
          activeCart,
          activeHome,
          onClickHome: this.onClickHome,
          onClickCart: this.onClickCart,
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
