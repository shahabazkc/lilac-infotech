import React from 'react'
import { MailOutline } from '@material-ui/icons'
function News_letter() {
    return (
        <div className="news_letter">
            <div className="row news_letter_row ">
                <div className="left-align col-6">
                    <div className="row">
                        <div className="col-3">
                            <MailOutline style={{ height: "85px", width: "85px",color:"#efefef" }} />
                        </div>
                        <div className="col-9">
                            <h3>Sign Up for Newsletter</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perspiciatis.</p>
                        </div>

                    </div>

                </div>
                <div className="align-right-news_leter col-6">
                    <input placeholder="Enter your email here" type="text" className="custom-newsletter-input" />
                    <button className="custom-newsletter-button">Subscribe</button>
                </div>
            </div>

        </div>
    )
}

export default News_letter
