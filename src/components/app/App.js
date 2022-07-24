import { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const App = () => {
  const [selectedChar, setChar] = useState(null);

  let [showRandomChar, setRandomChar]= useState(true);

  const onCharSelected = (id) => {
    setChar(id);
  }

  return (
    <Router>
      <div className="app">
      <AppHeader/>
        <main>
          <Switch>
            <Route exact path='/'>
              {showRandomChar ? <RandomChar/> : null}
              
              <div className="randomchar__btns" onClick={() => setRandomChar (showRandomChar = !showRandomChar)}>
              <a href={null} className="button button__main">
                <div className="inner">{showRandomChar ? 'HIDE': 'SHOW'}</div>
              </a>
              </div>
              
              <div className="char__content">
                <CharList onCharSelected={onCharSelected}/>
                <ErrorBoundary>
                  <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
              </div>
              
              <img className="bg-decoration" src={decoration} alt="vision"/>
            </Route>
            <Route exact path='/comics'>
              <AppBanner/>
              <ComicsList/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;