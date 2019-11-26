import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Test from "./Pages/Test";
import FinalQuestions from "./Pages/FinalQuestions";

export default function src() {
  return (
    <>
      <Navbar />
      <div className="App-header">
        <Router>
          <Switch>
            <Route path="/" component={Home} initial exact />
            <Route path="/teste" component={Test} />
            <Route path="/final" component={FinalQuestions} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
