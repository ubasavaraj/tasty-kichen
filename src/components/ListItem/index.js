import {BsStarFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './index.css'

const ListItem = props => {
  const {productList} = props
  const {
    imageUrl,
    name,
    cuisine,
    rating,
    ratingColor,
    totalReviews,
    id,
  } = productList

  return (
    <Link to={`/restaurant/${id}`} className="restarent-list">
      <li testid="restaurant-item" className="restarent-list1">
        <div>
          <img src={imageUrl} className="restarent-image" alt="restaurant" />
        </div>
        <div className="second-side">
          <h1 className="head1">{name}</h1>
          <p className="para">{cuisine}</p>
          <div className="rating">
            <BsStarFill style={{color: `${ratingColor}`}} />
            <p>{rating}</p>
            <p>({totalReviews})</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default ListItem
