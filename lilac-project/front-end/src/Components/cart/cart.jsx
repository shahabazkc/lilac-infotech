import React, { useState, useEffect } from 'react'
import { quantityUpdate, removeProduct, viewCart } from '../../Handlers/handler';
import styles from '../cart/cart.module.css'
import AddProduct from './addProduct';
import LoaderComp from '../loader/loaderComp';
function CartTop() {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [noCart, setNoCart] = useState(false);
    const cartReload = async () => {
        viewCart().then((response) => {
            if (response.data) {
                setCart([...response.data.cart])
                if (response.data.cart.length == 0) {
                    setNoCart(true);
                    setLoaded(true);
                } else {
                    setLoaded(true);
                    setNoCart(false);
                }
                setCartTotal([...response.data.cartTotal])
            }
            else {
                setLoaded(true);
                setCart([])
            }
        })
    }
    useEffect(() => {
        cartReload();
    }, []);

    const addQuantity = async (proId) => {
        let res = await quantityUpdate(proId, 1);
        if (res.data) {
            cartReload();
        }
        else {
            cartReload();
        }
    }
    const minusQuantity = async (proId) => {
        let res = await quantityUpdate(proId, -1);
        if (res.data) {
            cartReload();
        }
        else {
            cartReload();
        }
    }
    const removeProd = async (proId) => {
        let res = await removeProduct(proId, -1);
        if (res.data) {
            cartReload();
        }
        else {
            cartReload();
        }
    }
    return (
        <div>

            {
                loaded ?
                    noCart ? <AddProduct/> :
                        <div className={styles.shoppingcart}>
                            <div className={styles.title} >
                                Shopping Cart
                            </div >
                            {
                                cart.map((elem, index) => {
                                    return (
                                        <div key={index} className={styles.item}>
                                            <div className={styles.buttons}>
                                                <span onClick={() => removeProd(elem.item)} className={styles.deletebtn}></span>
                                            </div>

                                            <div className={styles.image}>
                                                <img className="img-fluid" style={{ height: "100px", width: "100px" }} src={elem.image} alt="" />
                                            </div>

                                            <div className={styles.description}>
                                                <span>{elem.name}</span>
                                            </div>

                                            <div className={styles.quantity}>
                                                <button onClick={() => addQuantity(elem.item)} className={styles.plustBtn} type="button" name="button">
                                                    <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                                                </button>
                                                <input type="text" name="name" placeholder={elem.quantity} />
                                                <button onClick={() => minusQuantity(elem.item)} className={styles.minusBtn} type="button" name="button">
                                                    <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                                                </button>
                                            </div>

                                            <div className={styles.totalprice}>{elem.price}</div>
                                        </div>
                                    )
                                })
                            }

                            < h3 > Cart details</h3 >
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <div className="pre container">
                                        <ul className="list-group mb-3 z-depth-1">
                                            {
                                                cart.map((elem, index) => {
                                                    return (
                                                        <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
                                                            <div>
                                                                <span className="text-muted">{elem.name} </span>
                                                                <span className="text-muted"> [{elem.quantity} X {elem.price}]</span>
                                                            </div>
                                                            <span className="text-muted">${elem.totalproduct}</span>
                                                        </li>
                                                    )
                                                })
                                            }

                                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                                <div>
                                                    <span className="text-muted">Taxes</span>

                                                </div>
                                                <span className="text-muted">$ 0</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span><strong>Total (USD)</strong></span>
                                                {cartTotal[0] ? <strong>$ {cartTotal[0].total}</strong> : <strong>0</strong>}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="sixth ml-3">
                                        <a href="/place-order"><button className="btn btn-success mb-2">Checkout</button></a>
                                    </div>
                                </div>
                            </div>
                        </div> :
                    <LoaderComp />
            }
        </div>


    )
}

export default CartTop
