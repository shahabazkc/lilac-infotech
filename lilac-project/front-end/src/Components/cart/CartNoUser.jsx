import React from 'react'
import {Link} from 'react-router-dom'
function CartNoUser() {
    return (
        <div className="container">
            <div className="text-center">
                <h3>Login to View Your Cart</h3>
               <Link to="/login"> <button className="btn btn-lg btn-primary">Login</button></Link>
            </div>
        </div>
    )
}

export default CartNoUser
