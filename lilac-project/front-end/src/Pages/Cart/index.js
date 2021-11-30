import React, { useEffect, useState } from 'react'
import CartTop from '../../Components/cart/cart'
import CartNoUser from '../../Components/cart/CartNoUser';
import { userLoginCheck } from '../../Handlers/handler';

function Cart() {
    const [userLogin, setUserLogin] = useState();
    useEffect(() => {
        userLoginCheck().then((response) => {
            console.log(response.data);
            if (response.data.status) {
                setUserLogin(true);
            }
            else {
                setUserLogin(false);
            }
        }).catch((err) => {
            setUserLogin(false);
            console.log(err);
        })
    }, []);

    return (
        <div>
            {
                userLogin === true ? <CartTop /> : userLogin === false ? <CartNoUser /> : null
            }

        </div>

    )
}

export default Cart
