import './footer.scss';

import logo_dark from '../../images/logos/logo_dark.svg';
import logo_black from '../../images/logos/beans_logo_black.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_links'>
                <a href="localhost:3000/">
                    <img src={logo_dark} alt="Main Logo" />
                    Coffee house
                </a>
                <a href="localhost:3000/ourCoffee">Our coffee</a>
                <a href="localhost:3000/">For your pleasure</a>
            </div>
            <div className='footer_logo'>
                <img src={logo_black} alt='Bean Logo'></img>
            </div>
        </footer>
    )
}

export default Footer;