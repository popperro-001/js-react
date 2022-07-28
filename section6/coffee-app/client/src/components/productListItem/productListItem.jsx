import './productListItem.scss'

import productImage from '../../images/products/coffee_item.jpg';

const ProductListItem = (props) => {
    const {text, price, country} = props;

    return (
        <div className='item_group'>
            <div className='item_img'>
                <img src={productImage} alt="Product" />
            </div>            
            <div className='item_text'>{text}</div>
            <div className='item_country'>{country}</div>
            <div className='item_price'>{price}</div>
        </div>
    )
}

export default ProductListItem;