import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './charList.scss';


const CharList = (props) => {
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);    

    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest();
    }, []);
    
    const onRequest = (offset) => {
        onCharsLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharsLoaded)
            .catch(onError);
    }

    const onCharsLoading = () => {
        setNewItemLoading(true);        
    }

    const onCharsLoaded = (newChars) => {
        let ended = false;
        if(newChars.length < 9) {
            ended = true
        }
        setChars(chars => [...chars, ...newChars]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);        
    }

    const onError = () => {
        setError(true);
        setLoading(false);        
    }    

    const itemRefs = useRef([]);   

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const items = arr.map((char, i) => {    
            let classNames = '';                          
            if(char.thumbnail.endsWith('image_not_available.jpg')) {
                classNames += 'not_found'
            }
            return <li 
                        className="char__item" 
                        key={char.id}
                        tabIndex={0}
                        ref={el => itemRefs.current[i] = el}
                        onClick={() => {
                            props.onCharSelected(char.id);
                            focusOnItem(i)}}
                        onKeyPress={(e) => {
                            if(e.key === ' ' || e.key === 'Enter') {
                                props.onCharSelected(char.id);
                                focusOnItem(i);
                            }
                        }}>
                        <img src={char.thumbnail} alt={char.name} className={classNames}/>
                        <div className="char__name">{char.name}</div>
                    </li>
        });

        return (
            <ul className="char__grid">
                {
                    items
                }                    
            </ul>
        )
    }    
        
    const items = renderItems(chars);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {content}
            <button className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
    
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;