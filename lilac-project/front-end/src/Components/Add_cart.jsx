import React from 'react'
import { Addcart } from '../products/product'
import {Star} from '@material-ui/icons'
function Add_cart() {
    return (
        <div className="heading-addcart m-5">
            <h2>Hotsale!</h2>
            <div className="cards-hotsale">
                <div className="row add-cart">
                    {Addcart.map((elem) => {
                        return (
                            <div className="col-2">
                                <div className="card card-add-to-cart ms-5" style={{ width: "11rem" }}>
                                    <img src={elem.image} className="card-img-top card-img-top-add-to img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ font: "bold" }}>{elem.name}</h5>
                                        <p className="card-text add-to-cart-price"><b>${elem.price}</b></p>
                                       <div style={{display:"flex"}}>
                                           <div className="align-left">
                                           <strike className="card-text add-to-cart-cut-price">${elem.cut}</strike>
                                           </div>
                                           <div className="align-right">
                                           <p style={{textAlign:"end",fontSize:"12px"}}>4.5<Star style={{color:"blue",height:"17px"}}/></p>
                                           </div>
                                       </div>
                  
                                        <button type="button" class="btn btn-model-add-to-cart">Add to cart</button>

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

export default Add_cart
