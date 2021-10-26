import {Component} from 'react'

import Slider from 'react-slick'

import Cookies from 'js-cookie'

import './index.css'

class SimpleSlider extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/restaurants-list/offers`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.offers.map(product => ({
        id: product.id,
        imageUrl: product.image_url,
      }))
      this.setState({
        productsList: updatedData,
      })
    }
  }

  render() {
    const settings = {
      dots: true,
    }
    const {productsList} = this.state
    return (
      <div>
        <ul>
          <Slider {...settings}>
            {productsList.map(product => (
              <li>
                <img className="offers" src={product.imageUrl} alt="offers" />
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    )
  }
}

export default SimpleSlider
