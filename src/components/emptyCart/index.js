import './index.css'

const EmptyCart = () => (
  <div className="empty">
    <img
      alt="empty cart"
      src="https://res.cloudinary.com/djvbsts8x/image/upload/v1635776330/cooking_1_wgrbbc.png"
    />
    <h1>No Order Yet!</h1>
    <p>Your cart is empty. Add something from the menu.</p>
  </div>
)

export default EmptyCart
