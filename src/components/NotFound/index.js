import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/djvbsts8x/image/upload/v1635352583/erroring_1_pmgm4s.png"
      alt="not found"
      className="not-found-img"
    />
    <h1>Page Not Found</h1>
    <p>we are sorry, the page you requested could not be found</p>
    <Link to="./">
      <button
        type="button"
        style={{backgroundColor: '#F7931E', color: '#ffffff'}}
      >
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
