import React from 'react'
import {Link} from 'react-router-dom'
function AddProduct() {
    return (
        <div className="container" style={{marginTop:"35vh"}}>
            <div className="text-center">
                <h3>Add Products To view cart</h3>
                <Link className="text-light" style={{textDecoration:"none"}} to="/"><button className="btn btn-lg btn-primary text-light">Home</button></Link>
            </div>
        </div>
    )
}

export default AddProduct
