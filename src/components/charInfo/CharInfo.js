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
        // showMore: false,
        // buttonShowMore: true,
    }

    marvelService = new MarvelService();

    componentDidUpdate(prefProps, prefState){
        if (this.props.charId !== prefProps.charId) {
            this.updateChar();
        }
    }

    // componentDidCatch(err) {

    // }

    componentDidMount() {
        this.updateChar();
        
    }

    updateChar = () => {
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
            loading: true, //як тільки дані зявилися загрузка стає в false
            
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

    // onButtonShowMore = () => {
    //     this.setState((state) => {
    //         return {
    //             showMore: !state.showMore,
    //             buttonShowMore: !state.buttonShowMore,
    //         }
    //     })
    // }

    // onShowMore = () => {
    //     this.state.showMore ? <View/> : <View/>
    // }

    render() {
        const {char, loading, error} = this.state;
        const skeleton = char || loading || error ? null : <Skeleton/>
        const errorMSG = error ? <ErrorMSG/> :null;
        const spinner = loading ? <Spinner/> :null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;
        return (
            <div className="char__info">
                {skeleton}
                {errorMSG}
                {spinner}
                {content}
                {/* <button onClick={this.onShowMore}>{this.state.buttonShowMore ? '< Show more >': '< Show less >'}</button> */}
            </div>
        )
    }

}
const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return(
        <>
        <div className="char__basics">
            <img src={thumbnail} alt={name} style={imgStyle}/>
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
            {comics.length > 0 ? null : "No comics yet"}
            {
                comics.map((item, i) => {
                    // {this.state.showMore ? null : if (i > 9) return}
                    if (i > 9) return
                    return (
                        <li key={i} className="char__comics-item">
                        {item.name}
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
    
}

export default CharInfo;