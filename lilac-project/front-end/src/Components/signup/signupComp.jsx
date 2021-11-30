import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { signupSubmit, userLoginCheck } from '../../Handlers/handler';
import LoaderComp from '../loader/loaderComp';

function SignupComp() {
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

    const navigate = useNavigate();
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupName, setSignupName] = useState('');

    const errParagraph = useRef();

    const signupHandler = async () => {
        const data = { email: signupEmail, password: signupPassword, name: signupName };
        let res = await signupSubmit(data);
        if (res.data.status) {
            navigate('/login')
        }
        else {
            errParagraph.current.style.display = "block";
            errParagraph.current.innerText = "Something went wrong"
        }
    }

    return (
        <div className="login-wrap">
            {!loader ? <LoaderComp /> :
                <div>
                    <p style={{ display: "none", color: "red" }} ref={errParagraph}></p>
                    <div className="login-html">
                        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                        <div className="login-form">
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="name" className="label">Name</label>
                                    <input placeholder="Enter your name here" type="text" value={signupName} onChange={(e) => setSignupName(e.target.value)} className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="password" className="label">Password</label>
                                    <input value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} placeholder="Enter the password here" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="email-signup" placeholder="Enter the email here" className="label">Email Address</label>
                                    <input value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} placeholder="Enter your email here" id="email-signup" type="email" className="input" />
                                </div>
                                <div className="group">
                                    <input type="submit" onClick={signupHandler} className="button" value="Sign Up" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <Link style={{ textDecoration: "none" }} to="/login">Already a Member ?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }

        </div>
    )
}

export default SignupComp
