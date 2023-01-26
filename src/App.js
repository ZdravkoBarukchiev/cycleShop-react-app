import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      {/* cycle section start */}
      <div className="cycle_section layout_padding">
        <div className="container">
          <h1 className="cycle_taital">Our cycle</h1>
          <p className="cycle_text">
            It is a long established fact that a reader will be distracted by the{" "}
          </p>
          <div className="cycle_section_2 layout_padding">
            <div className="row">
              <div className="col-md-6">
                <div className="box_main">
                  <h6 className="number_text">01</h6>
                  <div className="image_2">
                    <img src="images/img-2.png" alt='' />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h1 className="cycles_text">Cycles</h1>
                <p className="lorem_text">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters
                </p>
                <div className="btn_main">
                  <div className="buy_bt">
                    <a href="/">Buy Now</a>
                  </div>
                  <h4 className="price_text">
                    Price <span style={{ color: "#f7c17b" }}>$</span>{" "}
                    <span style={{ color: "#325662" }}>200</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="cycle_section_3 layout_padding">
            <div className="row">
              <div className="col-md-6">
                <h1 className="cycles_text">Stylis Cycle</h1>
                <p className="lorem_text">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters
                </p>
                <div className="btn_main">
                  <div className="buy_bt">
                    <a href="/">Buy Now</a>
                  </div>
                  <h4 className="price_text">
                    Price <span style={{ color: "#f7c17b" }}>$</span>{" "}
                    <span style={{ color: "#325662" }}>200</span>
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box_main_3">
                  <h6 className="number_text_2">02</h6>
                  <div className="image_2">
                    <img src="images/img-3.png" alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cycle_section_2 layout_padding">
            <div className="row">
              <div className="col-md-6">
                <div className="box_main_3">
                  <h6 className="number_text_2">03</h6>
                  <div className="image_2">
                    <img src="images/img-4.png" alt='' />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h1 className="cycles_text">
                  Mordern <br />
                  Cycle
                </h1>
                <p className="lorem_text">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters
                </p>
                <div className="btn_main">
                  <div className="buy_bt">
                    <a href="/">Buy Now</a>
                  </div>
                  <h4 className="price_text">
                    Price <span style={{ color: "#f7c17b" }}>$</span>{" "}
                    <span style={{ color: "#325662" }}>200</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="read_btn_main">
            <div className="read_bt">
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* cycle section end */}
      {/* about section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <h1 className="about_taital">About Our cycle Store</h1>
          <p className="about_text">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters
          </p>
          <div className="about_main">
            <img src="images/img-5.png" className="image_5" alt='' />
          </div>
          <div className="read_bt_1">
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
      {/* about section end */}
      {/* client section start */}
      <div className="client_section layout_padding">
        <div id="my_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="client_main">
                  <h1 className="client_taital">Says Customers</h1>
                  <div className="client_section_2">
                    <div className="client_left">
                      <div>
                        <img src="images/client-img.png" className="client_img" alt='' />
                      </div>
                    </div>
                    <div className="client_right">
                      <div className="quote_icon">
                        <img src="images/quote-icon.png" alt='' />
                      </div>
                      <p className="client_text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters
                      </p>
                      <h3 className="client_name">Channery</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="client_main">
                  <h1 className="client_taital">Says Customers</h1>
                  <div className="client_section_2">
                    <div className="client_left">
                      <div>
                        <img src="images/client-img.png" className="client_img" alt='' />
                      </div>
                    </div>
                    <div className="client_right">
                      <div className="quote_icon">
                        <img src="images/quote-icon.png" alt='' />
                      </div>
                      <p className="client_text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters
                      </p>
                      <h3 className="client_name">Channery</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="client_main">
                  <h1 className="client_taital">Says Customers</h1>
                  <div className="client_section_2">
                    <div className="client_left">
                      <div>
                        <img src="images/client-img.png" className="client_img" alt='' />
                      </div>
                    </div>
                    <div className="client_right">
                      <div className="quote_icon">
                        <img src="images/quote-icon.png" alt='' />
                      </div>
                      <p className="client_text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters
                      </p>
                      <h3 className="client_name">Channery</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#my_slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </a>
          <a
            className="carousel-control-next"
            href="#my_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
      {/* client section end */}
      {/* news section start */}
      <div className="news_section layout_padding">
        <div className="container">
          <h1 className="news_taital">News</h1>
          <p className="news_text">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using{" "}
          </p>
          <div className="news_section_2 layout_padding">
            <div className="row">
              <div className="col-sm-4">
                <div className="box_main_1">
                  <div className="zoomout frame">
                    <img src="images/img-6.png" alt='' />
                  </div>
                  <div className="padding_15">
                    <h2 className="speed_text">Speed cycle</h2>
                    <div className="post_text">
                      Post by : Den{" "}
                      <span style={{ float: "right" }}>20-12-2019</span>
                    </div>
                    <p className="long_text">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box_main_1">
                  <div className="zoomout frame">
                    <img src="images/img-7.png" alt='' />
                  </div>
                  <div className="padding_15">
                    <h2 className="speed_text">Speed cycle</h2>
                    <div className="post_text">
                      Post by : Den{" "}
                      <span style={{ float: "right" }}>20-12-2019</span>
                    </div>
                    <p className="long_text">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box_main_1">
                  <div className="zoomout frame">
                    <img src="images/img-8.png" alt='' />
                  </div>
                  <div className="padding_15">
                    <h2 className="speed_text">Jaump cycle</h2>
                    <div className="post_text">
                      Post by : Den{" "}
                      <span style={{ float: "right" }}>20-12-2019</span>
                    </div>
                    <p className="long_text">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news section end */}
      {/* contact section start */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="contact_main">
            <h1 className="request_text">A Call Back</h1>
            <form action="/action_page.php">
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Numbar"
                  name="Email"
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
            </form>
            <div className="send_btn">
              <a href="/">SEND</a>
            </div>
          </div>
        </div>
      </div>
      {/* contact section end */}
      {/* footer section start */}
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
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            Copyright 2019 All Right Reserved By.
            <a href="https://html.design"> Free html Templates</a>
          </p>
          <a href="https://html.design">''</a>
        </div>
        <a href="https://html.design">''</a>
      </div>
      <a href="https://html.design">''</a>
    </>

  );
}

export default App;
