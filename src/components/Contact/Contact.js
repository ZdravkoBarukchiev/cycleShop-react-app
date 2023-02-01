import { Footer } from "../Footer/Footer"
import { Navigation } from "../Navigation/Navigation"

export const Contact = () => {
    return (
        <>
            <Navigation />
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="contact_main">
                        <h1 className="request_text">A Call Back</h1>
                        <form >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="email-bt"
                                    placeholder="Name"
                                    name="name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="email-bt"
                                    placeholder="Email"
                                    name="name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="email-bt"
                                    placeholder="Phone Numbar"
                                    name="email"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="massage-bt"
                                    placeholder="Massage"
                                    rows={5}
                                    id="comment"
                                    name="Massage"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="send_btn">
                                <button>SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}