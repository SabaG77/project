import "./css/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { allRoutes, LanguageContextProvider } from "./services";
import { Header } from "./pages";
import { FavoritesContextProvider } from "./services";

function App() {
  return (
    <div className="App">
      <Router>
        <LanguageContextProvider>
          <FavoritesContextProvider>
            <Header />
            <Routes>
              {allRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </FavoritesContextProvider>
        </LanguageContextProvider>
      </Router>
    </div>
  );
}

export default App;
