import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  onAdd1: () => {},
  onMinus1: () => {},
})

export default CartContext
