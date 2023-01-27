export const Footer = () => {
    return (
        <div className="footer_section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 padding_0">
                        <div className="map_main">
                            <div className="map-responsive">
                                <iframe
                                    title='frame'
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                                    width={600}
                                    height={400}
                                    frameBorder={0}
                                    style={{ border: 0, width: "100%" }}
                                    allowFullScreen=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="call_text">
                            <a href="/">
                                <img src="images/map-icon.png" alt='' />
                                <span className="padding_left_0">
                                    Page when looking at its layou
                                </span>
                            </a>
                        </div>
                        <div className="call_text">
                            <a href="/">
                                <img src="images/call-icon.png" alt='' />
                                <span className="padding_left_0">Call Now +01 123467890</span>
                            </a>
                        </div>
                        <div className="call_text">
                            <a href="/">
                                <img src="images/mail-icon.png" alt='' />
                                <span className="padding_left_0">demo@gmail.com</span>
                            </a>
                        </div>
                        <div className="social_icon">
                            <ul>
                                <li>
                                    <a href="/">
                                        <img src="images/fb-icon1.png" alt='' />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/twitter-icon.png" alt='' />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/linkedin-icon.png" alt='' />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="images/instagram-icon.png" alt='' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <input
                            type="text"
                            className="email_text"
                            placeholder="Enter Your Email"
                            name="Enter Your Email"
                        />
                        <div className="subscribe_bt">
                            <a href="/">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}