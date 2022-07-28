import './coffeeCard.scss';

import cardImg from '../../images/cards/solimo.jpg';

const CoffeeCard = (props) => {
    const {text, price} = props;

    return (
        <div className='card'>
            <div className='card_img'>
                <img src={cardImg} alt="Product" />
            </div>            
            <div className='card_text'>{text}</div>
            <div className='card_price'>{price}</div>
        </div>
    )
}

export default CoffeeCard;