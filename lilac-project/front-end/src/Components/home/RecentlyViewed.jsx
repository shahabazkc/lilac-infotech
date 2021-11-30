import React, { useEffect, useState } from 'react'
import { Star } from '@material-ui/icons'
import { BestDeals } from '../../products/product'
import { addToCart, getProducts } from '../../Handlers/handler';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function RecentlyViewed(props) {
    const navigate = useNavigate();
    const [bestDeals, setBestDeals] = useState([]);
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
        let data = { type: "first-category" };
        getProducts(data).then((res) => {
            if (res.data) {
                let newArr = [];
                for (let i = 0; i < 5; i++) {
                    newArr.push(res.data[i]);
                }
                setBestDeals(newArr);
            } else {
                let newArr = [];
                for (let i = 0; i < 5; i++) {
                    newArr.push(BestDeals[i]);
                }
                setBestDeals(newArr)
            }
        }).catch((err) => {
            let newArr = [];
            for (let i = 0; i < 5; i++) {
                newArr.push(BestDeals[i]);
            }
            setBestDeals(newArr)
        })

        return () => {

        }
    }, []);
    return (
        <div className="product_first_row_main mt-5">
            <h3>Recently Viewed</h3>
            <div className="row">
                {
                    bestDeals.map((elem, index) => {
                        return (
                            <div style={{ cursor: "pointer" }} onClick={() => handleAddToCart(elem._id)} key={index} className="best-deals-product col-2 p-1 m-3">

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

export default RecentlyViewed
