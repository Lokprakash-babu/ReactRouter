import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul className="navLink">
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
        </ul>
    </nav>
  );
}

export default Nav;
