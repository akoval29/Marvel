import { Component } from 'react/cjs/react.production.min';

import './randomChar.scss';
// import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMSG from '../ErrorMSG/errorMSG';



class RandomChar extends Component {
    // constructor(props) {          //непотрібен
    //     console.log('constructor');
    //     super(props);
        
    // }

    state = {
        char: {},
        loading: true,
        error: false,

    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
        // this.timerID = setInterval(this.updateChar, 5000);   // таймер роллить запроси randomChar, фіксим баг з подвійними запросами
        console.log('mount');
    }

    componentDidUpdate() {
        console.log('update');
    }

    componentWillUnmount() {
        // clearInterval(this.timerID);  // фіксим баг з подвійними запросами ТАЙМЕР
        console.log('UNmount');
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

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
        // .getAllCharacters()
        // .then(res => console.log(res));
        .getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError)
    }

    // marvelService.getAllCharacters().then(res => res.data.results.forEach(elem => console.log(elem.name)));

    render() {
        const {char, loading, error} = this.state;
        const errorMSG = error ? <ErrorMSG/> :null;
        const spinner = loading ? <Spinner/> :null;
        const content = !(loading || error) ? <View char={char}/> :null;
        // if(loading) {
        //     return <Spinner/>;
        
        return (
            <div className="randomchar">
                {errorMSG}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button onClick={this.toggleRandomChar} className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    
    }
}
const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki}= char;
    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">Homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;