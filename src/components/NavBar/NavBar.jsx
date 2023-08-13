import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
    < div className='nav-container'>
    <nav className='navbar'>
    <h1 className='navbar-logo'>Schop</h1>
<Link className='seeCarrito' to= "/cart">🛒</Link>
       </nav>
        </div>

    );
};

export default NavBar;