import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext/authContext";

export const Navigation = () => {
    const { loginData } = useContext(AuthContext);
    if (loginData._id) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="logo">
                    <img src="images/logo.png" alt='' />
                </Link>
                <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            {loginData.email}
                        </Link>
                    </li>
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cycles">
                            Our Cycle
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">
                            News
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Logout
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            <img src="images/trolly-icon.png" alt='' />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <img src="images/search-icon.png" alt='' />
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="logo">
                <img src="images/logo.png" alt='' />
            </Link>
            <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cycles">
                        Our Cycle
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/news">
                        News
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                        Contact Us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <img src="images/trolly-icon.png" alt='' />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <img src="images/search-icon.png" alt='' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}