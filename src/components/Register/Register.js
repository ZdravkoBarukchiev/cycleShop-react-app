import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation"
import { AuthContext } from "../../contexts/authContext/authContext";
import { authService } from "../../services/authServise/authService";

export const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = Object.fromEntries(new FormData(e.target));
        if (password !== confirmPassword) {
            return;
        }
        authService("/register", email, password).then((result) => {
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
                        <h1 className="request_text">Register</h1>
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
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="email-bt"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                />
                            </div>
                            <div className="send_btn">
                                <button>REGISTER</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}