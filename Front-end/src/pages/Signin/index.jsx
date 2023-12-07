import Header from '../../components/Header'
import SigninForm from '../../components/SigninForm'
import Footer from '../../components/Footer'

import './index.scss';

const Signin = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main bg-dark">
                <SigninForm />
            </main>
            <Footer />
        </div>
    )
}

export default Signin