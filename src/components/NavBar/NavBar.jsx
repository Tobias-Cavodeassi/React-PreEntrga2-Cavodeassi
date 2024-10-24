import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.scss"

const NavBar = () => {
    return (
        <nav className="navbar">

            <ul>
                <li className="categories">
                    <Link to="/category/nike">Nike</Link>
                </li>
                <li className="categories">
                    <Link to="/category/adidas">Adidas</Link>
                </li>
                <li className="categories">
                    <Link to="/category/newbalance">New Balance</Link>
                </li>
            </ul>

            <Link to="/" className="brand_title">
                <p className="brand_title">Iceman</p>
            </Link>

            <CartWidget />
        </nav>
    )
}
export default NavBar