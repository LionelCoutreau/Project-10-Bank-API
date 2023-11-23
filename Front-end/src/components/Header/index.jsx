import Nav from '../Nav'

import './index.scss';

const Header = (userConnected) => {
    return (
        <header>
            <Nav userConnected={userConnected} />
        </header>
    )
}

export default Header