import { Navigation } from "../Navigation/Navigation"

export const About = () => {
    return (
        <>
            <Navigation />
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
        </>
    )
}