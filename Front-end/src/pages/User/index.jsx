import Header from '../../components/Header'
import Accounts from '../../components/Accounts'
import Footer from '../../components/Footer'

import './index.scss';

const User = () => {
    return (
        <div className="wrapper">
            <Header userConnected={true} />
            <main className="main bg-dark">
                <Accounts />
            </main>
            <Footer />
        </div>
    )
}

export default User