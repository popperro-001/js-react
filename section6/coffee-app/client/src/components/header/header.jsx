import './header.scss';

import logo from '../../images/logos/logo.svg';

const Header = () => {
    

    return (
        <header className='header'>
            <a href="localhost:3000/">
                <img src={logo} alt="Main Logo" />
                Coffee house
            </a>
            <a href="localhost:3000/">Our coffee</a>
            <a href="localhost:3000/">For your pleasure</a>
        </header>
    )
}

export default Header;