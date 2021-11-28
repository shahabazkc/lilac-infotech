import React from 'react'
import { Recommended } from '../products/product';
import {Star} from '@material-ui/icons'
function Recommented() {
    return (

        <div className="heading-recommented">
            <h3>Recommented</h3>
            <div className="cards_productsecond">
                <div className="row ">
                    {Recommended.map((elem) => {
                        return (
                            <div className="Recommented_col col-2 mt-5 ms-3">

                                <div className="card">
                                    <img src={elem.image} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{elem.name}</h5>
                                        <p className="card-text add-to-cart-price"><b>${elem.price}</b></p>
                                        <div style={{ display: "flex" }}>
                                            <div className="align-left">
                                                <strike className="card-text add-to-cart-cut-price">${elem.cut}</strike>
                                            </div>
                                            <div className="align-right">
                                                <p style={{ textAlign: "end", fontSize: "12px" }}>4.5<Star style={{ color: "blue", height: "17px" }} /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>


    )
}

export default Recommented
