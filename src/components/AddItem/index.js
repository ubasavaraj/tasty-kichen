import {BsStarFill} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import {IoIosAdd} from 'react-icons/io'
import Counter from '../Counter'

import './index.css'

const AddItem = props => {
  const {productList, onMinus, onAdd, addButton, cartList} = props
  console.log(cartList)
  const {imageUrl, name, rating, cost, id, quantity} = productList

  const onClickMinus = () => {
    onMinus(id)
  }
  const onClickAdd = () => {
    onAdd(id)
  }

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
<<<<<<< HEAD
          <Counter
            quantity={quantity}
            onAdd={onAdd}
            onMinus={onMinus}
            id={id}
          />
=======
          <div className="pagination">
            <button
              type="button"
              testid="decrement-count"
              onClick={onClickMinus}
            >
              <BiMinus />
            </button>
            <p testid="active-count">{quantity}</p>

            <button type="button" testid="increment-count" onClick={onClickAdd}>
              <IoIosAdd />
            </button>
          </div>
>>>>>>> 66941f77968daa1b73b993da239db1d0c33f7856
        )}
      </div>
    </li>
  )
}

export default AddItem
