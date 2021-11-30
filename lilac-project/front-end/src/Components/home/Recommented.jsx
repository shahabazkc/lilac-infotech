import React, { useEffect, useState } from 'react'
import { addToCart, getProducts } from '../../Handlers/handler';
import { useNavigate } from 'react-router-dom';

import { Recommended } from '../../products/product';
import { Star } from '@material-ui/icons';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
function Recommented(props) {
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(false);
    
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
        if (props.props===true) {
            setLoginStatus(props.props);
        }
        else {
            setLoginStatus(false);
        }
    }, [props]);

    const [recommendedDeals, setRecommendedDeals] = useState([]);
    useEffect(() => {
        let data = { type: "third-category" };
        getProducts(data).then((res) => {
            if (res.data) {
                setRecommendedDeals([...res.data])
            } else {
                setRecommendedDeals(Recommended)
            }
        }).catch((err) => {
            setRecommendedDeals(Recommended)
        });
    
    }, []);
    return (
        <div className="heading-recommented">
            <h3>Recommented</h3>
            <div className="cards_productsecond">
                <div className="row ">
                    {recommendedDeals.map((elem,index) => {
                        return (
                            <div style={{ cursor: "pointer" }} key={index} onClick={() => handleAddToCart(elem._id)} className="Recommented_col col-2 mt-5 ms-3">

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
