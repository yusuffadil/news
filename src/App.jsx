import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepages from "./components/home";
import Searchpages from "./components/search";
import Footer from "./components/common/footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route exact path="/search" component={Homepages} />
          <Route path="/search/:id" exact component={Searchpages} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
