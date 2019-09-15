import React from "react";
import Body from "./Layout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import Interna from './pages/hq';

function App() {
  return (
    <Router>
      <>
        <Body>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Interna} />
          </Switch>
        </Body>
      </>
    </Router>
  );
}

export default App;
