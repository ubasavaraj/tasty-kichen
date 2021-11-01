import {Link} from 'react-router-dom'

import './index.css'

const Success = () => (
  <div className="success">
    <img
      alt="success"
      src="https://res.cloudinary.com/djvbsts8x/image/upload/v1635780833/check-circle.1_1_1_ligykb.png"
    />
    <h1>Payment Successful</h1>
    <p>Thank you for ordering Your payment is successfully completed.</p>
    <Link to="/">
      <button type="button">Go To Home Page</button>
    </Link>
  </div>
)

export default Success
