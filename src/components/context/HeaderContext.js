import React from 'react'

const HeaderContext = React.createContext({
  activeHome: false,
  activeCArt: false,
  onClickHome: () => {},
  onClickCart: () => {},
})

export default HeaderContext
