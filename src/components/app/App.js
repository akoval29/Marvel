import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Spinner from "../spinner/spinner";
import AppHeader from "../appHeader/AppHeader";

// Перероблено на динамічні імпорти
// І вони розміщуються нижче статичних
const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComixPage"));

const SingleComicLayout = lazy(() =>
  import("../pages/singleComicLayout/SingleComicLayout")
);
const SingleCharacterLayout = lazy(() =>
  import("../pages/singleCharacterLayout/SingleCharacterLayout")
);
const SinglePage = lazy(() => import("../pages/SinglePage"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          {/* <Suspense fallback={<span>Loading ...</span>}> */}
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route
                path="/comics/:Id"
                element={
                  <SinglePage Component={SingleComicLayout} dataType="comic" />
                }
              />
              <Route
                path="/characters/:id"
                element={
                  <SinglePage
                    Component={SingleCharacterLayout}
                    dataType="character"
                  />
                }
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
