import { NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/argentBankLogo.png"
import { logOutUser } from "../../Store/userlogin"
import { removeUserData } from "../../Store/useraccount";
import { useDispatch, useSelector } from "react-redux"

import './index.scss';

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userAcc = useSelector((state) => state.userAccount.userAccount)

    // Déconnexion de l'utilisateur
    const handleDisconnect = () => {
        dispatch(logOutUser())
        dispatch(removeUserData())
        // Redirection vers la page de connexion
        navigate("/login")
    };

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {userAcc
                    ? <>
                        <NavLink className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle"></i>
                            {userAcc.firstName}
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