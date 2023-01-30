import { Navigation } from "../Navigation/Navigation"

export const Login = () => {
    return (
        <>
            <Navigation />
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="contact_main">
                        <h1 className="request_text">Login</h1>
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