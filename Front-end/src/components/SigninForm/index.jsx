import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from "../../Store/userlogin";

import './index.scss';

const SigninForm = () => {
    const [email, setEmail] = useState('tony@stark.com');
    const [password, setPassword] = useState('password123');

    const bDebug = false
    let button
    if (bDebug) {
        button = <a href="./profile" className="sign-in-button">Sign In</a>
    } else {
        button = <button className="sign-in-button">Sign In</button>
    }

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault();
        let userInfo = {
            email: email,
            password: password
        }
        dispatch(loginUser(userInfo)).then((result) => {
            if (result.payload) { // Vérifie le statut de la réponse
                console.log("Connexion completed");
                navigate('/profile');
            }
            else {
                console.log("Connexion échouée");
            }
        })
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label ><input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label ><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me" >Remember me</label >
                </div>
                {button}
            </form>
        </section>
    )
}

export default SigninForm