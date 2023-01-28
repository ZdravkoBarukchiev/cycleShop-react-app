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
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <div className="login_menu">
                        <ul>
                            <li>
                                <a href="/">Login</a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="images/trolly-icon.png" alt='' />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="images/search-icon.png" alt='' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div />
                </form>
                
            </nav>
    )
}