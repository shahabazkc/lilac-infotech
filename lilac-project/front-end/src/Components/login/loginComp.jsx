import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import { loginSubmit, userLoginCheck } from '../../Handlers/handler';
import LoaderComp from '../loader/loaderComp';

function LoginCompon() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errParagraph = useRef()
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        userLoginCheck().then((response) => {
            setLoader(true);
            if (response.data.status) {
                navigate("/")
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const loginHandler = async () => {
        const data = { email, password };
        let res = await loginSubmit(data);
        if (res.data.payload) {
            if (res.data.payload.status) {
                localStorage.setItem('token', res.data.payload.token);
                navigate('/');
            }
            else {
                errParagraph.current.style.display = "block";
                errParagraph.current.innerText = "Something went wrong"
            }
        }
        else {
            errParagraph.current.style.display = "block";
            errParagraph.current.innerText = "Invalid credentials"
        }
    }

    return (
        <div className="login-wrap">
            {
                !loader ? <LoaderComp /> :
                    <div className="login-html">
                        <p style={{ display: "none", color: "red" }} ref={errParagraph}></p>

                        <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="email" className="label">Username</label>
                                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="input" placeholder="Enter email here" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" type="password" placeholder="Enter password here" value={password} onChange={(e) => setPassword(e.target.value)} className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <input onClick={loginHandler} type="submit" className="button" value="Sign In" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <Link style={{textDecoration:"none"}} to="/signup">Signup</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default LoginCompon
