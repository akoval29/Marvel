import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';

const App = () => {
    const [selectedChar, setChar] = useState(null);

    let [showRandomChar, setRandomChar]= useState(true);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                {showRandomChar ? <RandomChar/> : null}
                
                <div className="randomchar__btns" onClick={() => setRandomChar(showRandomChar = !showRandomChar)}>
                <a href={null} className="button button__main">
                    <div className="inner">{showRandomChar ? 'Hide this': 'Show this'}</div>
                </a>
                </div> 
                
                <div className="char__content">
                    <CharList onCharSelected={onCharSelected}/>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
    
}

export default App;