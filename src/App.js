import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const HatsPage = () => <h1>hats page</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
