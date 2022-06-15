import { Component } from 'react/cjs/react.production.min';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMSG from '../ErrorMSG/errorMSG';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false,
    }

    marvelService = new MarvelService();

    componentDidUpdate(prefProps, prefState){
        if (this.props.charId !== prefProps.charId) {
            this.updateChar();
        }
    }

    componentDidMount() {
        this.updateChar();
    }

    updateChar= () => {
        const {charId} = this.props;
        if(!charId) {
            return;
        }
        
        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onCharLoading = (char) => {
        this.setState({
            loading: true //як тільки дані зявилися загрузка стає в false
        }) 
    }

    onCharLoaded = (char) => {
        this.setState({
            char, // сhar записався як стейт
            loading: false //як тільки дані зявилися загрузка стає в false
        }) 
    }

    onError = () => {
        this.setState({
            loading: false, //якщо виникла помилка то спіннер непотрібен
            error: true,
        })
    }


    render() {
        const{char, loading, error} = this.state;
        const skeleton = char || loading || error ? null : <Skeleton/>
        const errorMSG = error ? <ErrorMSG/> :null;
        const spinner = loading ? <Spinner/> :null;
        const content = !(loading || error || !char) ? <View char={char}/> :null;
        return (
            <div className="char__info">
                {skeleton}
                {errorMSG}
                {spinner}
                {content}
            </div>
        )
    }
}
const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    return(
        <>
        <div className="char__basics">
            <img src={thumbnail} alt={name}/>
            <div>
                <div className="char__info-name">{name}</div>
                <div className="char__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">Homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="char__descr">
            {description}
        </div>
        <div className="char__comics">Comics:</div>
        <ul className="char__comics-list">
            {
                comics.map((item, i) => {
                    return (
                        <li key={i} className="char__comics-item">
                        {item.name}
                        </li>
                    )
                })
            }
            <li className="char__comics-item">
                All-Winners Squad: Band of Heroes (2011) #3
            </li>
        </ul>
        </>
    )
    
}

export default CharInfo;