import {useHttp} from '../hooks/http.hook';

//custom hook that handles api requests
const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=40a3926a6e4232f0c9490806ed717e9c';
    const _baseOffset = 210;    
    
    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);

        return res.data.results.map(_transformCharacter);
    }

    const getCharacterById = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 200)}...` : `Oops! There is no info for this character.`,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);

        return res.data.results.map(_transformComics);
    }

    const getComicsById = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);

        return _transformComics(res.data.results[0]);
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            homepage: comics.urls[0].url, 
            description: comics.description || 'There is no description',
            pages: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-us',

        }
    }

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);

        return res.data.results.map(_transformCharacter);
    }

    return {loading, error, clearError, getAllCharacters, getCharacterById, getAllComics, getComicsById, getCharacterByName}
}

export default useMarvelService;