import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsStarFill} from 'react-icons/bs'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'
import AddItem from '../AddItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class RestarentDetails extends Component {
  state = {
    productData: {},
    foodItem: [],
    apiStatus: apiStatusConstants.initial,
    cartList: [],
  }

  componentDidMount() {
    this.getProductData()
  }

  getFormattedItemData = product => ({
    id: product.id,
    imageUrl: product.image_url,
    name: product.name,
    rating: product.rating,
    cost: product.cost,
    foodItemsFoodType: product.food_type,
    quantity: 0,
  })

  getFormattedData = product => ({
    costForTwo: product.cost_for_two,
    cuisine: product.cuisine,
    id: product.id,
    imageUrl: product.image_url,
    location: product.location,
    name: product.name,
    opensAt: product.opens_at,
    rating: product.rating,
    reviewsCount: product.reviews_count,
    itemsCount: product.items_count,
  })

  getProductData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = this.getFormattedData(fetchedData)
      const updatedFoodItemsData = fetchedData.food_items.map(eachFoodItems =>
        this.getFormattedItemData(eachFoodItems),
      )

      this.setState({
        productData: updatedData,
        foodItem: updatedFoodItemsData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onAdd = id => {
    this.setState(prevState => ({
      foodItem: prevState.foodItem.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
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
    this.setState(prevState => ({
      foodItem: prevState.foodItem.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity - 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
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

  addCartItem = product => {
    const {foodItem, cartList} = this.state
    const productObject = foodItem.find(
      eachCartItem => eachCartItem.id === product.id,
    )
    if (productObject) {
      this.setState(prevState => ({
        foodItem: prevState.foodItem.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + 1

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    }
    const productObject1 = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )
    if (productObject1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + 1

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]
      this.setState({cartList: updatedCartList})
    }
  }

  renderLoadingView = () => (
    <div
      className="products-details-loader-container"
      testid="restaurant-details-loader"
    >
      <Loader type="Circles" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
      <Link to="/">
        <button type="button" className="button">
          Continue order
        </button>
      </Link>
    </div>
  )

  renderProductDetailsView = () => {
    const {productData} = this.state
    const {
      cuisine,
      imageUrl,
      location,
      name,
      rating,
      reviewsCount,
      costForTwo,
    } = productData

    return (
      <div className="restarent-list5">
        <div>
          <img src={imageUrl} className="restarent-image1" alt="restaurant" />
        </div>
        <div className="container1">
          <h1>{name}</h1>
          <p>{cuisine}</p>
          <p>{location}</p>
          <div className="restarent-list1">
            <div>
              <div className="restarent-list2">
                <BsStarFill />
                <p>{rating}</p>
              </div>

              <p>{reviewsCount}+ Rewiews</p>
            </div>
            <hr />

            <div>
              <p>₹{costForTwo}</p>
              <p> Cost for Two</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderProductDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {foodItem, quantity, cartList} = this.state
    localStorage.setItem('cartData', JSON.stringify(cartList))
    console.log(foodItem)

    return (
      <>
        <Header />
        <div className="product-item-details-container">
          {this.renderProductDetails()}
        </div>

        <ul className="list-container4">
          {foodItem.map(product => (
            <AddItem
              cartList={cartList}
              quantity={quantity}
              productList={product}
              key={product.id}
              onMinus={this.onMinus}
              onAdd={this.onAdd}
              addButton={this.addCartItem}
            />
          ))}
        </ul>
        <Footer />
      </>
    )
  }
}

export default RestarentDetails
