import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './charList.scss';


class CharList extends Component {
    state = {
        chars: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharsLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharsLoaded)
            .catch(this.onError);
    }

    onCharsLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharsLoaded = (newChars) => {
        let ended = false;
        if(newChars.length < 9) {
            ended = true
        }
        this.setState(({offset, chars}) => ({
            chars: [...chars, ...newChars],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }    

    renderItems(arr) {
        const items = arr.map(char => {    
            let classNames = '';                          
            if(char.thumbnail.endsWith('image_not_available.jpg')) {
                classNames += 'not_found'
            }
            return <li 
                        className="char__item" 
                        key={char.id}
                        onClick={() => this.props.onCharSelected(char.id)}>
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

    render() {
        const {chars, loading, error, offset, newItemLoading, charEnded} = this.state; 
        const items = this.renderItems(chars);
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
                        onClick={() => this.onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;