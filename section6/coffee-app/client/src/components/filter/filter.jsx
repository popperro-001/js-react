import { Button } from 'react-bootstrap';

import './filter.scss';

const Filter = () => {
    return(
        <div className='filter'>
            <div className='btn_label'>Or filter</div>
            <div className='btn_group'>            
                <Button variant="outline-light" className='btn'>Brazil</Button>
                <Button variant="outline-light" className='btn'>Kenya</Button>
                <Button variant="outline-light" className='btn'>Columbia</Button>
            </div>
        </div>        
    )
}

export default Filter;