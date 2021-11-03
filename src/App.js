import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// L'APPLICATION
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
