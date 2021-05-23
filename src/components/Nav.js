import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <nav>
      <ul>
        <h2>CryptoMarkets 🚀 </h2>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/price">
          <li>Price</li>
        </Link>
      </ul>
    </nav>
  )
}
export default Nav
