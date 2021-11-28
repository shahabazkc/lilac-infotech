import React from 'react'
import { UrgentSelling } from '../products/product'
function Product_Second() {
    return (
        <div>
            <div className="cards_product">
                <div className="row Second_col">
                    {UrgentSelling.map((elem) => {
                        return (
                            
                            <div className="col-2 p-2 m-3">
                                <div className="card ms-5" style={{width: "14rem"}}>
                                    <img src={elem.image} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{elem.name}</h5>
                                        <p className="card-text">${elem.price}</p>
                                        <p className="card-text">{elem.place}</p>
                                    </div>
                                </div>

                            </div>



                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Product_Second
