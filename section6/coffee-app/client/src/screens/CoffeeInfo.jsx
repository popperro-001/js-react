import { Component } from "react";

import './CoffeeInfo.scss';

import image from '../images/about/aromistico.jpg';
import logo from '../images/logos/beans_logo_black.svg';

import PromoMini from "../components/promoMini/promoMini";

import Footer from "../components/footer/footer";

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {title: 'About it', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',  country: 'Brazil', price: '16.99$'},
            promo: {title: 'Our Coffee'},
            
        }
    }


    render() {
        return (
            <>
                <PromoMini
                    promo={this.state.promo}/>
                <section className="about_product">
                    <div>
                        <img src={image} alt="Girl with coffee" />
                    </div>
                    <div className='about_description'>
                        <h2>{this.state.about.title}</h2>
                        <img src={logo} alt="Beans Logo Black" />
                        <p><span>Country: </span>{this.state.about.country}</p>
                        <p><span>Description: </span>{this.state.about.description}</p>
                        <p><span>Price: </span>{this.state.about.price}</p>
                    </div>
                </section>                
                <Footer/>           
            </>
        )
    }
}

export default OurCoffee;