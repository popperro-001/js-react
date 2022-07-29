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
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChars();
    }

    onCharsLoaded = (chars) => {
        this.setState({
            chars,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChars = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharsLoaded)
    }

    renderItems(arr) {
        const items = arr.map(char => {    
            let classNames = '';                          
            if(char.thumbnail.endsWith('image_not_available.jpg')) {
                classNames += 'not_found'
            }
            return <li className="char__item" key={char.id}>
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
        const {chars, loading, error} = this.state; 
        const items = this.renderItems(chars);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;