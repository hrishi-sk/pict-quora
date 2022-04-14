import React, {useState} from 'react'
import './Login.css'
import { auth, provider} from "../../firebase"
import Img from './l1.jpg'

function Login() {
    const [email,setemail] =useState("");
    const [password, setpassword] =useState("");

    const signin = () =>{
        auth.signInWithPopup(provider).catch((e) => {
            alert(e.message);
        });
    };
    const handlesignin =(e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth) =>{
            console.log(auth);
        }).catch((e)=>alert(e.message));
        setemail("");
        setpassword("");
    };

    const handleregister =(e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
            if(auth){
                console.log(auth);
            }    
        }).catch((e)=>alert(e.message));
        setemail("");
        setpassword("");
    };

    return (
        <div className="login">
            <div classname="l_container">
                <div className="l_logo">
                    <img src={Img} alt="Quora LOGO"/>
                </div>
                <div className="l_desc">
                    <p style={ { color:"brown", fontSize:"35px"} }>One stop for all your queries </p>
                </div>
                <div className="auth">
                    <div className="authOps">
                        <div className="authOp">
                            <img src="data:image/png;base64,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" alt="GOOGLE LOGO"></img>
                            <p onClick={signin}>Continue with Google</p>
                        </div>
                    </div>
                    <div className="login_ep">
                        <div className="label">
                            <h4>Login</h4>
                        </div>
                        <div classname="input_fields">
                            <div className="input_field">
                                <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="Email"></input>
                            </div>
                            <div className="input_field">
                                <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password"></input>
                            </div>
                        </div>
                        <div className="button">
                            <small>Forgot Password?</small>
                            <button  type = "submit" onClick={handlesignin}>Login</button>
                            <button onClick={handleregister}>Register</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login