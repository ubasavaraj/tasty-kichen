import React from 'react'

const HeaderContext = React.createContext({
  activeHome: false,
  activeCArt: false,
  onClickHome: () => {},
  onClickCart: () => {},
  onAddBtn24: () => {},
})

export default HeaderContext
