import { Component } from "react";

import './OurCoffee.scss';

import image from '../images/about/girl_coffee.jpg';

import PromoMini from "../components/promoMini/promoMini";
import About from "../components/about/about";
import Divider from "../components/divider/divider";
import Filter from "../components/filter/filter";
import SearchPanel from "../components/searchPanel/searchPanel";
import ProductList from "../components/productList/productList";
import Footer from "../components/footer/footer";

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {title: 'About our beans', description: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.         Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'},
            promo: {title: 'Our Coffee'},
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
                <section className="search_filter">
                    <SearchPanel/>
                    <Filter/>
                </section>   

                <ProductList
                    data={this.state.data}/>  
                <Footer/>           
            </>
        )
    }
}

export default OurCoffee;