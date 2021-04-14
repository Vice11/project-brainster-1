import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Academies from "./components/Academies/Academies";
import EventSpace from "./components/EventSpace/EventSpace";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Academies" component={Academies}/>
        <Route  path="/EventSpace" component={EventSpace} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
