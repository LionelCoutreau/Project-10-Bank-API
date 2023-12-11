import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUserAccount } from "../../Store/useraccount"
import { profilupdate, updateUserData } from "../../Store/profilupdate"

import AccountItem from '../AccountItem'

import './index.scss';

const Accounts = ({onSave}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userConnected = localStorage.getItem("user")
    const userAcc = useSelector((state) => state.userAccount.userAccount)
    
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
                    //console.log("DATA:",userData)
                    setFirstName(userData.payload.body.firstName)
                    setLastName(userData.payload.body.lastName)
                    setEditingFirstName(userData.payload.body.firstName)
                    setEditingLastName(userData.payload.body.lastName)
                }
            });
        }
    }, [userConnected, navigate, dispatch])

    const handleNewName = () => {
        // Créez un objet avec les nouvelles valeurs du prénom et du nom
        const updatedUser = {
            firstName: editingFirstName, // Utilisez la variable d'état editingFirstName
            lastName: editingLastName // Utilisez la variable d'état editingFirstName
        };
        
        // Appelez l'action asynchrone profilupdate avec les nouvelles données utilisateur
        dispatch(profilupdate(updatedUser))
            .then(() => {
                // La mise à jour a réussi, mettez à jour la variable d'état firstname
                //dispatch(updateUserData())
                //console.log("USERACCOUNT3:", userAcc)
                setFirstName(editingFirstName)
                setLastName(editingLastName)
                console.log("Mise à jour réussie !")
                setEditMode(false)
                onSave();
            })
            .catch((error) => {
                // La mise à jour a échoué, vous pouvez gérer les erreurs ici
                console.error("Erreur lors de la mise à jour :", error)
            })
    };

    const handleCancel = () => {
        // Réinitialisez les variables d'état d'édition aux valeurs actuelles du prénom et du nom
        setEditingFirstName(firstName)
        setEditingLastName(lastName)
        setEditMode(false)
    }
    //console.log(editMode)

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