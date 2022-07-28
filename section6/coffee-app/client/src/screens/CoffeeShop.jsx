import { Component } from "react";

import Promo from "../components/promo/promo";
import About from "../components/about/about";
import Best from "../components/best/best";
import Footer from "../components/footer/footer";


class CoffeeShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, text: 'Solimo Coffee Beans 2 kg', price: '10.73$', url: '../../images/cards/solimo.jpg'},
                {id: 2, text: 'Presto Coffee Beans 1 kg', price: '15.99$', url: '../../images/cards/presto.jpg'},
                {id: 3, text: 'AROMISTICO Coffee 1 kg', price: '6.99$', url: '../../images/cards/aromistico.jpg'}
            ],
            about: {
                title: 'About Us', description: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.\nNow residence dashwoods she excellent you. Shade being under his bed her, Muchread on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.'
            }
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Promo/>
                <About
                    about={this.state.about}/>
                <Best
                    data={this.state.data}/>
                <Footer/>
            </div>
        )
    }
}

export default CoffeeShop;