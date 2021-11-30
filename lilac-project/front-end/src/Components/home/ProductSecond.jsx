import React, { useState, useEffect } from 'react'
import { UrgentSelling } from '../../products/product'
import { addToCart, getProducts } from '../../Handlers/handler';
import { useNavigate } from 'react-router-dom';
import {  LocationCity } from '@material-ui/icons';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function ProductSecond(props) {
    const [urgentSelling, setUrgentSelling] = useState([]);
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
        let data = { type: "second-category" };
        getProducts(data).then((res) => {
            if (res.data) {
                setUrgentSelling([...res.data])
            } else {
                setUrgentSelling(UrgentSelling)
            }
        }).catch((err) => {
            setUrgentSelling(UrgentSelling)
        })

        return () => {

        }
    }, []);
    return (
        <div>
            <div className="cards_product">
                <div className="row Second_col">
                    {urgentSelling.map((elem, index) => {
                        return (

                            <div style={{ cursor: "pointer" }} onClick={() => handleAddToCart(elem._id)} key={index} className="col-2 p-2 m-3">
                                <div className="card ms-5" style={{ width: "14rem" }}>
                                    <img src={elem.image} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title best-deal-product-name">{elem.name}</h5>
                                        <div className="flex">
                                            <div className="align-left">
                                                <p className="card-text best-deal-product-price"><b>${elem.price}</b></p>

                                            </div>
                                            <div className="align-right">
                                                <p className="card-text float-right"><b><LocationCity /> {elem.place}</b></p>
                                            </div>
                                        </div>


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

export default ProductSecond
