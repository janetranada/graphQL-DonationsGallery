import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
