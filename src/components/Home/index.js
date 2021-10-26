import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

import Restaurents from '../Restaurents/index'

import SimpleSlider from '../Slick'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <SimpleSlider />
      <Restaurents />
    </>
  )
}

export default Home
