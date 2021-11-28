import React, { useEffect, useState } from 'react'
import { Star } from '@material-ui/icons'
import { BestDeals } from '../products/product'

function Recently_Viewed() {
    const [bestDeals, setBestDeals] = useState([]);
    useEffect(() => {
        let newArr = [];
        for (let i = 0; i < 5; i++) {
            newArr.push(BestDeals[i]);
        }
        setBestDeals(newArr)
        return () => {

        }
    }, [BestDeals]);
    return (
        <div className="product_first_row_main mt-5">
            <h3>Recently Viewed</h3>
            <div className="row">
                {
                    bestDeals.map((elem, index) => {
                        return (
                            <div className="best-deals-product col-2 p-1 m-3">

                                <div className="img-product-1">
                                    <img className="best-deals-img img-fluid" src={elem.image} alt="" />
                                </div>
                                <div className="best-deals-name">
                                    <span className="best-deal-product-name"><b>{elem.name}</b></span><br />
                                    <p className="best-deal-product-price"><b>$ {elem.price}</b></p>
                                    <div className="best-deal-product-div-2">
                                        <p className="best-deal-product-star">

                                            <Star style={{ height: "17px", width: "15px", fontSize: "bold" }} />
                                            <Star style={{ height: "17px", width: "15px", fontSize: "bold" }} />
                                            <Star style={{ height: "17px", width: "15px", fontSize: "bold" }} />
                                            <Star style={{ height: "17px", width: "15px", fontSize: "bold" }} />

                                        </p>
                                        <p className="best-deal-star-rating">(12)</p>
                                    </div>

                                </div>

                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Recently_Viewed
