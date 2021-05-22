import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <nav>
      <ul>
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
