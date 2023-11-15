import Header from '../../components/Header'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'
import picture from '../../assets/bg_accueil.png'

import './index.scss';

const Homepage = () => {
    return (
        <>
            <Header />
            <main className="kasa-accueil">
                <Section pageTitle='Chez vous, partout et ailleurs' pageBackground={picture} />
                <Gallery />
            </main>
            <Footer />
        </>
    )
}

export default Homepage