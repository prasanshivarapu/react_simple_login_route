import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="head">
    <Link to="/about">
      <p className="para">About</p>
    </Link>

    <Link to="/">
      <p>Home</p>
    </Link>
  </div>
)

export default Header
