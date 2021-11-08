import {BsStarFill} from 'react-icons/bs'
import Counter1 from '../Counter1'

import './index.css'

const AddItem = props => {
  const {productList, onMinus, onAdd, addButton} = props
  const {imageUrl, name, rating, cost, id, quantity} = productList

  const onClickBtn = () => {
    addButton({...productList, quantity})
  }

  return (
    <li className="restarent-list0264" testid="foodItem">
      <div>
        <img src={imageUrl} className="restarent-image" alt="restaurant" />
      </div>
      <div className="second-side1">
        <h1 className="head3">{name}</h1>
        <p className="para">{cost}</p>
        <div className="rating">
          <BsStarFill />
          <p>{rating}</p>
        </div>
        {quantity === 0 ? (
          <button type="button" onClick={onClickBtn}>
            Add
          </button>
        ) : (
          <Counter1
            quantity={quantity}
            onAdd={onAdd}
            onMinus={onMinus}
            id={id}
          />
        )}
      </div>
    </li>
  )
}

export default AddItem
