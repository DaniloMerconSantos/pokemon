import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./imagens/logo.png";
import "./App.css";
import BarraNavegacao from "./components/BarraNavegacao";
import routes from "./rotas";
import Loader from "./components/Loader";

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <BarraNavegacao />
          </header>
          <Switch>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Switch>
          <footer className="App-footer">Challeng!!</footer>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
