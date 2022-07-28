import {Button} from 'react-bootstrap';

import './promo.scss';
import Header from '../header/header';

import logo from '../../images/logos/beans_logo_white.svg';


const Promo = () => {
    return ( 
        <section className='promo'>
                <Header/>                               
                <h1 className='text-center'>Everything You Love About Coffee</h1>
                <img src={logo} alt="Beans Logo White" className='logo'/> 
                <h2>We makes every day full of energy and taste</h2>
                <h2>Want to try our beans?</h2>
                <Button variant="outline-light">More</Button>                  
        </section>                 
    )
}

export default Promo;