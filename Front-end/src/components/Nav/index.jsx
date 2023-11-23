import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";

import './index.scss';

const Nav = (userConnected) => {
    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {userConnected === true
                    ? <>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </NavLink>
                        <NavLink className="main-nav-item" to="/">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </>
                    
                    : <NavLink className="main-nav-item" to="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                }
            </div>            
        </nav>
    )
}

export default Nav