import Header from '../../components/Header'
import Accounts from '../../components/Accounts'
import Footer from '../../components/Footer'

import './index.scss';

const User = () => {
    return (
        <>
            <Header userConnected="true" />
            <main className="main bg-dark">
                <Accounts />
            </main>
            <Footer />
        </>
    )
}

export default User