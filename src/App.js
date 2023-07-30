import "./css/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { allRoutes, LanguageContextProvider } from "./services";
import { Header, Footer } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <LanguageContextProvider>
          <Header />
          <Routes>
            {allRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </LanguageContextProvider>
      </Router>
    </div>
  );
}

export default App;
