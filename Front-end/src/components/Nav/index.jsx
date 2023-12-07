import { NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/argentBankLogo.png"
import { useEffect, useState } from "react"
import { logOutUser } from "../../Store/userlogin"
import { useDispatch } from "react-redux"
import { getUserAccount } from "../../Store/useraccount"

import './index.scss';

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userConnected = localStorage.getItem("user")

    const [firstName, setFirstName] = useState("")

    useEffect(() => {
        if (userConnected) {
            dispatch(getUserAccount()).then((userData) => {
                if (userData) {
                    console.log(userData)
                    setFirstName(userData.payload.body.firstName)
                }
            });
        }
    }, [userConnected, navigate, dispatch])

    const handleDisconnect = () => {
        // Appelez logOutUser à l'aide de dispatch
        dispatch(logOutUser())
    
        // Réinitialisez l'élément "user" du localStorage et isAuthenticated
        localStorage.removeItem("user")
    
        // Redirigez l'utilisateur vers la page de connexion
        navigate("/login")
    };


    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {userConnected
                    ? <>
                        <NavLink className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle"></i>
                            {firstName}
                        </NavLink>
                        <NavLink className="main-nav-item" onClick={handleDisconnect} to="/login">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </>
                    
                    : <NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                }
            </div>            
        </nav>
    )
}

export default Nav