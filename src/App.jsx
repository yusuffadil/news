import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepages from "./components/home";
import Footer from "./components/common/footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          {/* <Route path="/singlepage/:id" exact component={SinglePage} />
          <Route exact path="/culture" component={Culture} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
