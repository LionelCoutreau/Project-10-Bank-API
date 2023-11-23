import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Footer from '../../components/Footer'

import './index.scss';

const Homepage = () => {
    return (
        <>
            <Header userConnected="false" />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </>
    )
}

export default Homepage