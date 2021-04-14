import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeImage from "./HomeImage";
import Card from "../Cards/Card";
import EducationFunc from "../Education, Coworking, Events/EducationFunc";
import Events from "../Education, Coworking, Events/Events";
import Coworking from "../Education, Coworking, Events/Coworking";
import Spaces from "../Education, Coworking, Events/Spaces";

const Home = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeImage />
            <Card />
            <EducationFunc />
            <Events />
            <Coworking />
            <Spaces />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
