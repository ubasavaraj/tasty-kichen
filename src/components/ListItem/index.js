import {BsStar} from 'react-icons/bs'

import '../Restaurents/index.css'

const ListItem = props => {
  const {productList} = props
  const {
    imageUrl,
    name,
    cuisine,
    rating,
    ratingColor,
    totalReviews,
  } = productList
  return (
    <li testid="restaurant-item" className="restarent-list">
      <div>
        <img src={imageUrl} className="restarent-image" alt="restaurant" />
      </div>
      <div className="second-side">
        <h1 className="head1">{name}</h1>
        <p className="para">{cuisine}</p>
        <div className="rating">
          <BsStar style={{backgroundColor: `${ratingColor}`}} />
          <p>{rating}</p>
          <p>({totalReviews})</p>
        </div>
      </div>
    </li>
  )
}

export default ListItem
