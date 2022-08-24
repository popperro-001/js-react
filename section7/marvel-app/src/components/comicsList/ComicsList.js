import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './comicsList.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';

const setContent = (process, Component, newItemLoading) => {
    switch(process) {
        case 'waiting':
            return <Spinner/>;            
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;            
        case 'confirmed':
            return <Component/>;           
        case 'error':
            return <ErrorMessage/>;            
        default:
            throw new Error('Unexpected process state');
    }
}

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(230);
    const [comicsEnded, setComicsEnded] = useState(false);
    const {        
        getAllComics,
        process,
        setProcess
    } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onComicsLoaded = (newComics) => {
        let ended = false;
        if(newComics.length < 8) {
            ended = true
        }
        setComics (comics => [...comics, ...newComics]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setComicsEnded(comicsEnded => ended);
    }

    function renderItems(arr) {
        const items = arr.map((comics, i) => {
            return <li className="comics__item"
                        key={i}>
                        <Link to={`/comics/${comics.id}`}>
                            <img src={comics.thumbnail} alt={comics.title} className="comics__item-img"/>
                            <div className="comics__item-name">{comics.title}</div>
                            <div className="comics__item-price">{comics.price}</div>
                        </Link>
                    </li>
        });

        return (
            <ul className="comics__grid">
                {
                    items
                }
            </ul>
        )
    }

    return (
        <div className="comics__list">
            {setContent(process, () => renderItems(comics), newItemLoading)}            
            <button className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': comicsEnded ? 'none' : 'block'}}
                    onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;