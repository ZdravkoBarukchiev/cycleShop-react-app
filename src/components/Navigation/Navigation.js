import { Link } from "react-router-dom"
export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="logo">
                <img src="images/logo.png" alt='' />
            </Link>

            <ul className="navbar-nav mr-auto">
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
                    <Link className="nav-link" to="/">
                        Shop
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
                    <Link className="nav-link" to="/">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
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