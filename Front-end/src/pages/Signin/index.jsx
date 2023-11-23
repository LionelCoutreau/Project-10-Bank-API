import Header from '../../components/Header'
import SigninForm from '../../components/SigninForm'
import Footer from '../../components/Footer'

import './index.scss';

const Signin = () => {
    return (
        <>
            <Header userConnected="false" />
            <main className="main bg-dark">
                <SigninForm />
            </main>
            <Footer />
        </>
    )
}

export default Signin