import React, { useEffect, useState } from 'react'
import { getProducts, addToCart } from '../../Handlers/handler';
import { Addcart } from '../../products/product'
import { Star } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
toast.configure()

function Addcarts(props) {

    const [cartDeals, setCartDeals] = useState([]);
    const navigate = useNavigate();

    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        if (props.props === true) {
            setLoginStatus(props.props);
        }
        else {
            setLoginStatus(false);
        }
    }, [props]);

    const handleAddToCart = (proId) => {
        if (loginStatus) {
            addToCart(proId).then((response) => {
                if (response.data.token === false) {
                    navigate('/login')
                }
                else if(response.data.response){
                    toast("Added to Cart Successfully")
                }
            })
        }
        else {
            navigate('/login')
        }
    }

    useEffect(() => {
        let data = { type: "fourth-category" };
        getProducts(data).then((res) => {
            if (res.data) {
                setCartDeals([...res.data])
            } else {
                setCartDeals(Addcart)
            }
        }).catch((err) => {
            setCartDeals(Addcart)
        })

        return () => {

        }
    }, []);

    return (
        <div className="heading-addcart m-5">
            <h2>Hotsale!</h2>
            <div className="cards-hotsale">
                <div className="row add-cart">
                    {cartDeals.map((elem, index) => {
                        return (
                            <div key={index} className="col-2">
                                <div className="card card-add-to-cart ms-5" style={{ width: "11rem" }}>
                                    <img src={elem.image} className="card-img-top card-img-top-add-to img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ font: "bold" }}>{elem.name}</h5>
                                        <p className="card-text add-to-cart-price"><b>${elem.price}</b></p>
                                        <div style={{ display: "flex" }}>
                                            <div className="align-left">
                                                <strike className="card-text add-to-cart-cut-price">${elem.cut}</strike>
                                            </div>
                                            <div className="align-right">
                                                <p style={{ textAlign: "end", fontSize: "12px" }}>4.5<Star style={{ color: "blue", height: "17px" }} /></p>
                                            </div>
                                        </div>

                                        <button  style={{ cursor: "pointer" }} onClick={() => handleAddToCart(elem._id)} type="button" className="btn btn-model-add-to-cart">Add to cart</button>

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

export default Addcarts;
