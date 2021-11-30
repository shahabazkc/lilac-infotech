import React from 'react'
import image from '../../images/image2.png'
function SliderMain() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="img1">
                        <div className="slider_main_banner_1">
                            <img src={image} alt="" />
                        </div>
                        <div className="slider_quoteone"  style={{color:"black"}}>
                            <p>From students to senior citizen</p>
                            <p>This web portal of</p>
                            <h2><b>"Products And Classifields"</b></h2>
                            <p>provides it all</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="img1">
                        <div className="slider_main_banner_1">
                            <img src={image} alt="" />
                        </div>
                        <div className="slider_quoteone"  style={{color:"black"}}>
                            <p>From students to senior citizen</p>
                            <p>This web portal of</p>
                            <h2><b>"Products And Classifields"</b></h2>
                            <p>provides it all</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="img1">
                        <div className="slider_main_banner_1">
                            <img src={image} alt="" />
                        </div>
                        <div className="slider_quoteone"  style={{color:"black"}}>
                            <p>From students to senior citizen</p>
                            <p>This web portal of</p>
                            <h2><b>"Products And Classifields"</b></h2>
                            <p>provides it all</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default SliderMain
