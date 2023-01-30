import { Navigation } from "../Navigation/Navigation"

export const Register = () => {
    return (
        <>
            <Navigation />
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="contact_main">
                        <h1 className="request_text">Register</h1>
                        <form >
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
                        </form>
                        <div className="send_btn">
                            <a href="/">REGISTER</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}