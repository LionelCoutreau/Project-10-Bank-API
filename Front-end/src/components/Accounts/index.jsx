import AccountItem from '../AccountItem'

import './index.scss';

const Accounts = () => {
    return (
        <>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountItem accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountCurrentBalance="false" />
            <AccountItem accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" accountCurrentBalance="false" />
            <AccountItem accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" accountCurrentBalance="true" />
        </>
    )
}

export default Accounts