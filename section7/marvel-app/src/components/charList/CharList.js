import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './charList.scss';


const CharList = (props) => {
    const [chars, setChars] = useState([]);    
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);    

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);
    
    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);        
        getAllCharacters(offset)
            .then(onCharsLoaded)            
    }   

    const onCharsLoaded = (newChars) => {
        let ended = false;
        if(newChars.length < 9) {
            ended = true
        }
        setChars(chars => [...chars, ...newChars]);        
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);        
    }      

    const itemRefs = useRef([]);   

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const items = arr.map((char, i) => {    
            // let classNames = '';                          
            // if(char.thumbnail.endsWith('image_not_available.jpg')) {
            //     classNames += 'not_found'
            // }
            let imgStyle = {'objectFit' : 'cover'};
            if (char.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            return (
                <CSSTransition key={char.id} timeout={500} classNames="char_item">
                    <li 
                        className="char__item"                         
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
                        <img src={char.thumbnail} alt={char.name} style={imgStyle}/>
                        <div className="char__name">{char.name}</div>
                    </li>
                </CSSTransition>
            )
        });

        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {items}     
                </TransitionGroup>                   
            </ul>
        )
    }    
        
    const items = renderItems(chars);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;  

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
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