import { Component } from "react";


import './ForYourPleasure.scss';

import image from '../images/about/coffee_cup.jpg';

import PromoMini from "../components/promoMini/promoMini";
import About from "../components/about/about";
import Divider from "../components/divider/divider";
import ProductList from "../components/productList/productList";
import Footer from "../components/footer/footer";

class ForYourPleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {title: 'About our goods', description: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.         Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'},
            promo: {title: 'For your pleasure'},
            data: [
                {id: 1, text: 'Solimo Coffee Beans 2 kg', price: '10.73$', country: 'Brazil'},
                {id: 2, text: 'Presto Coffee Beans 1 kg', price: '15.99$', country: 'Kenya'},
                {id: 3, text: 'AROMISTICO Coffee 1 kg', price: '6.99$', country: 'Columbia'},
                {id: 4, text: 'Solimo Coffee Beans 2 kg', price: '10.73$', country: 'Brazil'},
                {id: 5, text: 'Presto Coffee Beans 1 kg', price: '15.99$', country: 'Columbia'},
            ],
        }
    }


    render() {
        return (
            <>
                <PromoMini
                    promo={this.state.promo}/>
                <section className="about_with_image">
                    <div>
                        <img src={image} alt="Girl with coffee" />
                    </div>
                    <About
                        about={this.state.about}/>
                </section>
                <Divider/>
                <ProductList
                    data={this.state.data}/>  
                <Footer/>           
            </>
        )
    }
}

export default ForYourPleasure;