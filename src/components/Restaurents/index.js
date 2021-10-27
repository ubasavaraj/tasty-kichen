import {Component} from 'react'

import Cookies from 'js-cookie'

import {BsFilterRight} from 'react-icons/bs'

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

import ListItem from '../ListItem'

import './index.css'

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

class Restaurents extends Component {
  state = {
    productsList: [],
    activeOptionId: sortByOptions[1].value,
    activePage: 1,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {activeOptionId, activePage} = this.state
    const offset = (activePage - 1) * 9
    const apiUrl = `https://apis.ccbp.in/restaurants-list?sort_by_rating=${activeOptionId}&offset=${offset}&limit=${9}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.restaurants.map(product => ({
        costForTwo: product.cost_for_two,
        cuisine: product.cuisine,
        groupByTime: product.group_by_time,
        hasOnlineDelivery: product.has_online_delivery,
        hasTableBooking: product.has_table_booking,
        id: product.id,
        imageUrl: product.image_url,
        isDeliveringNow: product.is_delivering_now,
        location: product.location,
        menuType: product.menu_type,
        name: product.name,
        opensAt: product.opens_at,
        rating: product.user_rating.rating,
        ratingColor: product.user_rating.rating_color,
        ratingText: product.user_rating.rating_text,
        totalReviews: product.user_rating.total_reviews,
      }))
      console.log(updatedData)
      this.setState({
        productsList: updatedData,
      })
    }
  }

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`)
    this.setState({activePage: pageNumber})
  }

  nextPage = () => {
    this.setState(
      prevState => ({
        activePage: prevState.activePage + 1,
      }),
      this.getProducts,
    )
  }

  prevpage = () => {
    this.setState(
      prevState => ({
        activePage: prevState.activePage - 1,
      }),
      this.getProducts,
    )
  }

  onChangeSortby = event => {
    this.setState({activeOptionId: event.target.value}, this.getProducts)
  }

  render() {
    const {activeOptionId, productsList, activePage} = this.state

    return (
      <>
        <div className="sort-container">
          <div>
            <h1>Popular Restaurants</h1>
            <p>
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>

          <div className="rating-container">
            <BsFilterRight className="sort-by-icon" />
            <p className="sort-by">Sort by</p>
            <select
              className="sort-by-select"
              value={activeOptionId}
              onChange={this.onChangeSortby}
            >
              <option className="select-option">Highest</option>
              <option className="select-option">Lowest</option>
            </select>
          </div>
        </div>

        <ul className="list-container">
          {productsList.map(product => (
            <ListItem productList={product} key={product.id} />
          ))}
        </ul>
        <div className="pagination">
          <button
            type="button"
            testid="pagination-left-button"
            onClick={this.nextPage}
          >
            <IoIosArrowForward />
          </button>
          <p>
            <span testid="active-page-number">{activePage}</span> of 4
          </p>
          <button
            type="button"
            testid="pagination-right-button"
            onClick={this.prevpage}
          >
            <IoIosArrowBack />
          </button>
        </div>
      </>
    )
  }
}

export default Restaurents
