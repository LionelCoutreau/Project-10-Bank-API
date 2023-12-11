import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getUserAccount, profilupdate} from "../../Store/useraccount"

import AccountItem from '../AccountItem'
import './index.scss';

const Accounts = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userConnected = localStorage.getItem("user")
    const [editMode, setEditMode] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [editingFirstName, setEditingFirstName] = useState("")
    const [editingLastName, setEditingLastName] = useState("")

    useEffect(() => {
        if (!userConnected) {
            console.log("redirect to login");
            navigate("/login")
        } else {
            dispatch(getUserAccount()).then((userData) => {
                if (userData) {
                    // Initialisation du formulaire de changement de nom
                    setFirstName(userData.payload.firstName)
                    setLastName(userData.payload.lastName)
                    setEditingFirstName(userData.payload.firstName)
                    setEditingLastName(userData.payload.lastName)
                }
            });
        }
    }, [userConnected, navigate, dispatch])

    // Changement de nom
    const handleNewName = () => {
        // création d'un objet avec les nouvelles valeurs du prénom et du nom
        const updatedUser = {
            firstName: editingFirstName,
            lastName: editingLastName
        };
        
        // Mise à jour des données avec les nouvelles données utilisateur
        dispatch(profilupdate(updatedUser))
            .then(() => {
                // Mise à jour des states firstName et lastName
                setFirstName(editingFirstName)
                setLastName(editingLastName)
                console.log("Mise à jour réussie !")
                // Masquage du formulaire de mise à jour de nom et prénom
                setEditMode(false)
            })
            .catch((error) => {
                // Mise à jour échouée
                console.error("Erreur lors de la mise à jour :", error)
            })
    };

    // Annulation du changement de nom
    const handleCancel = () => {
        // Remise à zéro des valeurs du formulaire
        setEditingFirstName(firstName)
        setEditingLastName(lastName)
        // Masquage du formulaire de mise à jour de nom et prénom
        setEditMode(false)
    }

    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                { !editMode && <button className="edit-button" onClick={() => setEditMode(true)}>Edit Name</button> }
                {
                    editMode &&  (<div className="info_input_box">
                        <div className="info_box_left">
                            <input className="info_input" type="text" placeholder={firstName} value={editingFirstName} onChange={(e) => setEditingFirstName(e.target.value)} />
                            <button className="info_button button_left" onClick={handleNewName}>SAVE</button>
                        </div>
                        <div className="info_box_right ">
                            <input className="info_input" type="text" name="" id="" placeholder={lastName} value={editingLastName} onChange={(e) => setEditingLastName(e.target.value)} />
                            <button className="info_button button_right" onClick={handleCancel}>CANCEL</button>
                        </div>
                    </div>)
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountItem accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountCurrentBalance="false" />
            <AccountItem accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" accountCurrentBalance="false" />
            <AccountItem accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" accountCurrentBalance="true" />
        </>
    )
}

export default Accounts