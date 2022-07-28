import './productList.scss';

import ProductListItem from '../productListItem/productListItem';

const ProductList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <ProductListItem
                    key={id}
                    {...itemProps}/>
    })

    return (
        <section className='product_list'>
            {elements}
        </section>
    )
}

export default ProductList;