import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext/authContext";
import { authService } from "../../services/authServise/authService";
import { Navigation } from "../Navigation/Navigation"

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.target));

        authService("/login", email, password).then((result) => {
            userLogin(result);
            navigate("/");
        });
    }
    return (
        <>
            <Navigation />
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="contact_main">
                        <h1 className="request_text">Login</h1>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="email-bt"
                                    placeholder="Email"
                                    name="email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="email-bt"
                                    placeholder="Password"
                                    name="password"
                                />
                            </div>
                        </form>
                        <div className="send_btn">
                            <a href="/">LOGIN</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}