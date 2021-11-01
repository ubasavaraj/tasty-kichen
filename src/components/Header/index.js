import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import HeaderContext from '../context/HeaderContext'

import './index.css'

const Header = props => (
  <HeaderContext.Consumer>
    {value => {
      const {activeHome, activeCart, onClickHome, onClickCart} = value
      const onClickCartButton = () => {
        onClickCart()
      }
      const onClickHomeButton = () => {
        onClickHome()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <nav className="nav-header">
          <div className="nav-content">
            <div className="nav-bar-mobile-logo-container">
              <Link to="/">
                <img
                  className="website-logo"
                  src="https://res.cloudinary.com/djvbsts8x/image/upload/v1635169409/login_logo_xu79ed.png"
                  alt="website logo"
                />
              </Link>
              <div>
                <h1 className="head">Tasty Kitchens</h1>
              </div>
            </div>
            <div className="nav-bar-large-container">
              <Link to="/">
                <img
                  className="website-logo"
                  src="https://res.cloudinary.com/djvbsts8x/image/upload/v1635169409/login_logo_xu79ed.png"
                  alt="website logo"
                />
              </Link>
              <div>
                <h1 className="head">Tasty Kitchens</h1>
              </div>

              <ul className="nav-menu">
                <li className="nav-menu-item" toggle="click">
                  <Link to="/" className="nav-link">
                    <button
                      type="button"
                      onClick={onClickHomeButton}
                      className={activeHome ? 'mark' : 'buttons'}
                    >
                      Home
                    </button>
                  </Link>
                </li>

                <li className="nav-menu-item">
                  <Link to="/cart" className="nav-link">
                    <button
                      type="button"
                      onClick={onClickCartButton}
                      className={activeCart ? 'mark' : 'buttons'}
                    >
                      cart
                    </button>
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>{' '}
          </div>
          <div className="nav-menu-mobile">
            <ul className="nav-menu-list-mobile">
              <li className="nav-menu-item-mobile">
                <Link to="/" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                    alt="nav home"
                    className="nav-bar-image"
                  />
                </Link>
              </li>

              <li className="nav-menu-item-mobile">
                <Link to="/cart" className="nav-link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                    alt="nav cart"
                    className="nav-bar-image"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }}
  </HeaderContext.Consumer>
)

export default withRouter(Header)
