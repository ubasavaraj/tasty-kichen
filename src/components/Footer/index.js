import {
  FaPinterestSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div className="container">
      <img
        className="website-logo"
        src="https://res.cloudinary.com/djvbsts8x/image/upload/v1635169409/login_logo_xu79ed.png"
        alt="website-footer-logo"
      />
      <h1 className="head2">Tasty Kitchens</h1>
      <p className="para2">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="container2">
        <div className="icon-container">
          <FaPinterestSquare className="icon-container" />
        </div>
        <div className="icon-container">
          <FaInstagram className="icon-container" />
        </div>
        <div className="icon-container">
          <FaTwitter className="icon-container" />
        </div>
        <div className="icon-container">
          <FaFacebookSquare className="icon-container" />
        </div>
      </div>
    </div>
  )
}
