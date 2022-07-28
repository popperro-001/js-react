
import './best.scss';

import CoffeeCard from '../coffeeCard/coffeeCard';

const Best = ({data}) => {  
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <CoffeeCard 
                    key={id}
                    {...itemProps}/>
    });

    return(
        <section className='best'>
            <h2>Our best</h2>
            <div className='card_wrapper'>                
                {elements}
            </div>            
        </section>
    )
}

export default Best;