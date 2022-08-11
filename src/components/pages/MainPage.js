import { useState } from "react";
import { Helmet } from "react-helmet";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import CharSearchForm from "../CharSearchForm/CharSearchForm";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

  const [selectedChar, setChar] = useState(null);

  let [showRandomChar, setRandomChar]= useState(true);

  const onCharSelected = (id) => {
    setChar(id);
  }

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Marvel information portal"
        />
        <title>Marvel information portal</title>
      </Helmet>

      {showRandomChar ? <RandomChar/> : null}
      
      <div className="randomchar__btns" onClick={() => setRandomChar (showRandomChar = !showRandomChar)}>
        <a className="button button__main">
          <div 
            className="inner">{showRandomChar ? 'HIDE': 'SHOW'}
          </div>
        </a>
      </div>
      
      <div className="char__content">
        <CharList onCharSelected={onCharSelected}/>

        <ErrorBoundary>
          <CharInfo charId={selectedChar}/>
        </ErrorBoundary>

        <ErrorBoundary>
          <CharSearchForm/>
        </ErrorBoundary>
      </div>
      
      <img className="bg-decoration" src={decoration} alt="vision"/>
    </>
  )
}

export default MainPage;