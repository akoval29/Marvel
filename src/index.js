import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

import MarvelService from './services/MarvelService'

const marvelService = new MarvelService();

// marvelService.getAllCharacters().then(res => console.log(res));
// marvelService.getCharacter(101152).then(res => console.log(res));
marvelService.getAllCharacters().then(res => res.data.results.forEach(elem => console.log(elem.name)));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

