import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Spinner from '../spinner/spinner';
import AppHeader from "../appHeader/AppHeader";

// import {MainPage, ComicsPage, SingleComicPage} from '../pages'

// Перероблено на динамічні імпорти
// І вони розміщуються нижче статичних
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComixPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));



const App = () => {

  return (
    <Router>
      <div className="app">
      <AppHeader/>
        <main>
          {/* <Suspense fallback={<span>Loading ...</span>}> */}
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path='/' element = {<MainPage/>}/>
              <Route path='/comics' element = {<ComicsPage/>}/>
              <Route path='/comics/:comicId' element = {<SingleComicPage/>}/>
              <Route path='*' element = {<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App;