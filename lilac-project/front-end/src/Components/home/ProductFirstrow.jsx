import { Star } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { addToCart, getProducts } from '../../Handlers/handler';
import { BestDeals } from '../../products/product'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function ProductFirstrow(props) {
    const navigate = useNavigate();
    const [bestDeals, setBestDeals] = useState([]);
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        if (props.props===true) {
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
        let data = { type: "first-category" };
        getProducts(data).then((res) => {
            if (res.data) {
                setBestDeals([...res.data])
            } else {
                setBestDeals(BestDeals)
            }
        }).catch((err) => {
            setBestDeals(BestDeals)
        });


        return () => {

        }
    }, []);

    return (
        <div className="product_first_row_main mt-5">
            <h3>Best Deals</h3>
            <div className="row">
                {
                    bestDeals.map((elem, index) => {
                        return (
                            <div style={{ cursor: "pointer" }} key={index} onClick={() => handleAddToCart(elem._id)} className="best-deals-product col-2 p-1 m-3">
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

export default ProductFirstrow
