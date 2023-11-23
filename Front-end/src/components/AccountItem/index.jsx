import './index.scss';

const AccountItem = (accountTitle, accountAmount, accountCurrentBalance) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{accountTitle}</h3>
                <p className="account-amount">{accountAmount}</p>
                <p className="account-amount-description">{accountCurrentBalance ? "Current Balance" : "Available Balance"}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default AccountItem