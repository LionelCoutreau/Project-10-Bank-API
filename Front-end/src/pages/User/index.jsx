import Header from '../../components/Header'
import Accounts from '../../components/Accounts'
import Footer from '../../components/Footer'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import './index.scss'

const User = () => {
    const userConnected = localStorage.getItem("user")
    const navigate = useNavigate()

    useEffect(() => {
        // Si aucun utilisateur n'est connecté, redirection vers la page de connexion
        if (!userConnected) {
            console.log("redirect to login")
            navigate("/login")
        }
    }, [userConnected, navigate])

    return (
        <div className="wrapper">
            <Header />
            <main className="main bg-dark">
                <Accounts />
            </main>
            <Footer />
        </div>
    )
}

export default User