import './promoMini.scss';

import Header from '../header/header';

const PromoMini = ({promo}) => {
    return (
        <section className='promo_mini'>
            <Header/>
            <h1>{promo.title}</h1>
        </section>
    )
}

export default PromoMini;